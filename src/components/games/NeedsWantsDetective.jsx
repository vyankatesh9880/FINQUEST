import React, { useState } from 'react';
import { Search, CheckCircle2, XCircle, RotateCcw, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

const ITEMS = [
  {
    id: 1,
    title: "Groceries",
    cost: "$50",
    emoji: "🥦🥛",
    description: "Essential food, vegetables, and milk for preparing healthy meals to keep your body fueled.",
    isNeed: true,
    tip: "Nutrition is non-negotiable for human health and survival. Everyday food essentials are always NEEDS."
  },
  {
    id: 2,
    title: "Latest Smartphone",
    cost: "$800",
    emoji: "📱✨",
    description: "The newest luxury smartphone with titanium casing when your existing phone still works fine.",
    isNeed: false,
    tip: "Basic communication is helpful, but expensive flagship gadget upgrades are WANTS."
  },
  {
    id: 3,
    title: "Winter Jacket",
    cost: "$40",
    emoji: "🧥❄️",
    description: "A warm insulated jacket to protect you from freezing winter temperatures and frostbite.",
    isNeed: true,
    tip: "Proper seasonal clothing protects you from harsh weather elements and illness, making it a NEED."
  },
  {
    id: 4,
    title: "Video Game Console",
    cost: "$500",
    emoji: "🎮🕹️",
    description: "A brand-new 4K gaming system designed for playing the latest multiplayer titles.",
    isNeed: false,
    tip: "Gaming is wonderful entertainment, but it is not essential for daily living, so it's a WANT."
  },
  {
    id: 5,
    title: "Water & Electricity Bill",
    cost: "$30",
    emoji: "💡🚰",
    description: "Monthly utility payment keeping fresh drinking water running and lights shining at home.",
    isNeed: true,
    tip: "Clean running water and electric power are fundamental utilities required for safe modern shelter."
  },
  {
    id: 6,
    title: "Designer Sneakers",
    cost: "$150",
    emoji: "👟💎",
    description: "Trendy limited-edition fashion sneakers purchased primarily for social status and style.",
    isNeed: false,
    tip: "Sturdy shoes for walking are a need; high-priced designer fashion collector sneakers are WANTS."
  },
  {
    id: 7,
    title: "School Textbooks",
    cost: "$35",
    emoji: "📚✏️",
    description: "Mandatory course workbooks and reading materials assigned by teachers for school classes.",
    isNeed: true,
    tip: "Foundational education tools build your career and knowledge, qualifying as vital educational NEEDS."
  },
  {
    id: 8,
    title: "Movie Theater Ticket",
    cost: "$15",
    emoji: "🍿🎬",
    description: "An admission pass to watch a new blockbuster film with surround sound on Friday evening.",
    isNeed: false,
    tip: "Weekend recreational outings are fun perks of life, but are classic leisure WANTS."
  },
  {
    id: 9,
    title: "Prescribed Medicine",
    cost: "$20",
    emoji: "💊🩺",
    description: "Doctor-prescribed antibiotic or allergy medication needed to recover from illness safely.",
    isNeed: true,
    tip: "Healthcare and medications that cure illness and safeguard life are critical human NEEDS."
  },
  {
    id: 10,
    title: "Fast Food Combo",
    cost: "$12",
    emoji: "🍔🍟",
    description: "A quick drive-thru burger, large salted fries, and sugary soda on the way home.",
    isNeed: false,
    tip: "Eating food is a need, but dining on processed fast food convenience combos is considered a WANT."
  }
];

export const NeedsWantsDetective = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [lastFeedback, setLastFeedback] = useState(null); // { isCorrect, tip, title, userChoice }
  const [animationClass, setAnimationClass] = useState(''); // 'green-glow' | 'shake-red'
  const [isDragOverNeed, setIsDragOverNeed] = useState(false);
  const [isDragOverWant, setIsDragOverWant] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const currentItem = ITEMS[currentIndex];

  const handleClassify = (choiceIsNeed) => {
    if (lastFeedback) return;

    const isCorrect = choiceIsNeed === currentItem.isNeed;
    const pointsDelta = isCorrect ? 10 : -5;
    const newScore = Math.max(0, score + pointsDelta);

    setScore(newScore);

    if (isCorrect) {
      setAnimationClass('green-glow');
      confetti({
        particleCount: 20,
        spread: 45,
        origin: { y: 0.65 }
      });
    } else {
      setAnimationClass('shake-red');
    }

    setLastFeedback({
      isCorrect,
      tip: currentItem.tip,
      title: currentItem.title,
      isNeed: currentItem.isNeed,
      userChoice: choiceIsNeed
    });

    setAnswers(prev => [
      ...prev,
      {
        item: currentItem,
        userChoice: choiceIsNeed,
        isCorrect
      }
    ]);
  };

  const handleNext = () => {
    setAnimationClass('');
    setLastFeedback(null);

    if (currentIndex + 1 < ITEMS.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setGameOver(true);
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.55 }
      });
      if (onComplete) onComplete(score);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setAnswers([]);
    setLastFeedback(null);
    setAnimationClass('');
    setGameOver(false);
  };

  // Drag and Drop handlers
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', 'item-card');
  };

  const handleDragOver = (e, target) => {
    e.preventDefault();
    if (target === 'need') setIsDragOverNeed(true);
    if (target === 'want') setIsDragOverWant(true);
  };

  const handleDragLeave = (target) => {
    if (target === 'need') setIsDragOverNeed(false);
    if (target === 'want') setIsDragOverWant(false);
  };

  const handleDrop = (e, target) => {
    e.preventDefault();
    setIsDragOverNeed(false);
    setIsDragOverWant(false);
    handleClassify(target === 'need');
  };

  if (gameOver) {
    const correctCount = answers.filter(a => a.isCorrect).length;
    const accuracy = Math.round((correctCount / ITEMS.length) * 100);

    let badge = "Smart Saver Detective 🕵️‍♂️⭐";
    if (accuracy >= 90) badge = "Master Financial Sleuth 🏆";
    else if (accuracy >= 70) badge = "Smart Saver Detective 🕵️‍♂️";
    else if (accuracy >= 50) badge = "Apprentice Investigator 🔍";
    else badge = "Budget Trainee 🌱";

    return (
      <div className="animate-pop-in" style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
        <div className="glass-card" style={{
          padding: '36px 26px',
          background: 'linear-gradient(135deg, rgba(20, 16, 45, 0.95) 0%, rgba(35, 25, 70, 0.95) 100%)',
          border: '1.5px solid rgba(0, 184, 148, 0.45)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), var(--shadow-glow-green)'
        }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '10px' }}>🏆</div>

          <span style={{
            background: 'rgba(0, 184, 148, 0.2)',
            color: '#55EFC4',
            padding: '4px 14px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.8rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Investigation Complete
          </span>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 4vw, 2.3rem)',
            color: '#fff',
            margin: '12px 0 6px'
          }}>
            {badge}
          </h2>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
            You evaluated all 10 real-world spending items with sharp financial instincts!
          </p>

          {/* Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
            marginBottom: '26px'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '14px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', display: 'block', textTransform: 'uppercase' }}>Total Score</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#FFA502' }}>
                {score} pts
              </span>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '14px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', display: 'block', textTransform: 'uppercase' }}>Accuracy</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#55EFC4' }}>
                {accuracy}%
              </span>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '14px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', display: 'block', textTransform: 'uppercase' }}>Correct</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#FD79A8' }}>
                {correctCount} / 10
              </span>
            </div>
          </div>

          {/* Case Review Log */}
          <div style={{
            textAlign: 'left',
            maxHeight: '200px',
            overflowY: 'auto',
            background: 'rgba(0, 0, 0, 0.35)',
            borderRadius: 'var(--radius-md)',
            padding: '12px 16px',
            marginBottom: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <h4 style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '8px' }}>
              Item Review Summary:
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {answers.map((a, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  background: a.isCorrect ? 'rgba(0, 184, 148, 0.1)' : 'rgba(255, 118, 117, 0.1)',
                  fontSize: '0.82rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>{a.item.emoji}</span>
                    <span style={{ color: '#fff', fontWeight: 600 }}>{a.item.title} ({a.item.cost})</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: a.item.isNeed ? '#55EFC4' : '#74B9FF', fontWeight: 700 }}>
                      {a.item.isNeed ? 'NEED' : 'WANT'}
                    </span>
                    {a.isCorrect ? <CheckCircle2 size={16} color="#55EFC4" /> : <XCircle size={16} color="#FF7675" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleRestart}
            className="btn-funky btn-yellow-funky"
            style={{ width: '100%', padding: '14px' }}
          >
            <RotateCcw size={18} />
            <span>Play Again 🔄</span>
          </button>
        </div>
      </div>
    );
  }

  const progressPercent = Math.round((currentIndex / ITEMS.length) * 100);

  return (
    <div className="animate-pop-in" style={{ maxWidth: '740px', margin: '0 auto' }}>
      {/* 1. HEADER: Title, Score Tracker, and Progress Bar (0/10 items) */}
      <div style={{
        padding: '16px 20px',
        borderRadius: 'var(--radius-md)',
        background: 'rgba(20, 16, 45, 0.9)',
        border: '1.5px solid rgba(255, 255, 255, 0.14)',
        marginBottom: '20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Search size={22} color="#FFA502" />
            <div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#fff',
                margin: 0
              }}>
                Needs vs. Wants Detective 🕵️‍♂️
              </h2>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                Target Audience: Grades 5–8 Financial Literacy
              </span>
            </div>
          </div>

          {/* Score Tracker (starts at 0) */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255, 165, 2, 0.15)',
            border: '1.5px solid rgba(255, 165, 2, 0.45)',
            padding: '6px 16px',
            borderRadius: 'var(--radius-full)'
          }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800 }}>Score:</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: '#FFA502' }}>
              {score} pts
            </span>
          </div>
        </div>

        {/* Progress Bar (0/10 items) */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            marginBottom: '6px'
          }}>
            <span>Progress: {currentIndex} / {ITEMS.length} Items Investigated</span>
            <span>{progressPercent}% Complete</span>
          </div>

          <div style={{
            height: '10px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 'var(--radius-full)',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${(currentIndex / ITEMS.length) * 100}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #00B894 0%, #FFA502 100%)',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>
      </div>

      {/* 2. MAIN GAMEPLAY AREA */}
      <div
        className={`glass-card ${animationClass}`}
        draggable={!lastFeedback}
        onDragStart={handleDragStart}
        style={{
          padding: '28px 24px',
          textAlign: 'center',
          cursor: lastFeedback ? 'default' : 'grab',
          border: animationClass === 'green-glow'
            ? '2px solid #00B894'
            : animationClass === 'shake-red'
              ? '2px solid #FF7675'
              : '1.5px solid rgba(162, 155, 254, 0.35)',
          background: 'linear-gradient(135deg, rgba(20, 16, 45, 0.95) 0%, rgba(28, 22, 58, 0.95) 100%)',
          boxShadow: animationClass === 'green-glow'
            ? '0 0 30px rgba(0, 184, 148, 0.6)'
            : animationClass === 'shake-red'
              ? '0 0 30px rgba(255, 118, 117, 0.6)'
              : 'var(--shadow-md)',
          transition: 'all 0.3s ease',
          marginBottom: '20px'
        }}
      >
        <span style={{
          background: 'rgba(255, 255, 255, 0.08)',
          color: '#FDCB6E',
          fontSize: '0.75rem',
          fontWeight: 800,
          padding: '3px 10px',
          borderRadius: 'var(--radius-full)',
          textTransform: 'uppercase'
        }}>
          Item #{currentIndex + 1} • Drag card or tap buttons below
        </span>

        {/* Emoji, Title, Cost, 1-Sentence Description */}
        <div style={{
          fontSize: '4.5rem',
          margin: '14px 0 8px',
          filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.4))'
        }}>
          {currentItem.emoji}
        </div>

        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.7rem',
          color: '#fff',
          margin: '0 0 6px'
        }}>
          {currentItem.title}
        </h3>

        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.25rem',
          fontWeight: 800,
          color: '#55EFC4',
          marginBottom: '12px'
        }}>
          Cost: {currentItem.cost}
        </div>

        <p style={{
          fontSize: '0.96rem',
          color: 'var(--text-muted)',
          lineHeight: 1.5,
          maxWidth: '560px',
          margin: '0 auto 10px'
        }}>
          "{currentItem.description}"
        </p>
      </div>

      {/* FEEDBACK QUICK TIP CARD */}
      {lastFeedback ? (
        <div className="animate-pop-in" style={{
          padding: '18px 20px',
          borderRadius: 'var(--radius-md)',
          marginBottom: '20px',
          background: lastFeedback.isCorrect ? 'rgba(0, 184, 148, 0.18)' : 'rgba(255, 118, 117, 0.18)',
          border: `1.5px solid ${lastFeedback.isCorrect ? '#00B894' : '#FF7675'}`
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            {lastFeedback.isCorrect ? (
              <>
                <CheckCircle2 size={22} color="#55EFC4" />
                <strong style={{ color: '#55EFC4', fontSize: '1.1rem' }}>
                  Correct Decision! (+10 Points 🟢)
                </strong>
              </>
            ) : (
              <>
                <XCircle size={22} color="#FF7675" />
                <strong style={{ color: '#FF7675', fontSize: '1.1rem' }}>
                  Incorrect Selection! (-5 Points ❌)
                </strong>
              </>
            )}
          </div>

          <p style={{ fontSize: '0.9rem', color: '#fff', margin: '4px 0 10px', lineHeight: 1.5 }}>
            <strong>Explanation:</strong> {lastFeedback.title} is definitely a{' '}
            <strong style={{ color: lastFeedback.isNeed ? '#55EFC4' : '#74B9FF' }}>
              {lastFeedback.isNeed ? 'NEED' : 'WANT'}
            </strong>
            . {lastFeedback.tip}
          </p>

          <button
            onClick={handleNext}
            className="btn-funky btn-yellow-funky"
            style={{ width: '100%', padding: '12px', fontSize: '0.95rem' }}
          >
            <span>{currentIndex + 1 < ITEMS.length ? 'Next Item ➡️' : 'View Detective Badge 🏆'}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      ) : (
        /* TWO LARGE TARGET BUTTONS & DRAG-AND-DROP ZONES */
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px'
        }}>
          {/* NEED Drop Zone & Button */}
          <div
            onDragOver={(e) => handleDragOver(e, 'need')}
            onDragLeave={() => handleDragLeave('need')}
            onDrop={(e) => handleDrop(e, 'need')}
            onClick={() => handleClassify(true)}
            style={{
              padding: '24px 18px',
              borderRadius: 'var(--radius-lg)',
              background: isDragOverNeed
                ? 'rgba(0, 184, 148, 0.35)'
                : 'linear-gradient(135deg, rgba(0, 184, 148, 0.18) 0%, rgba(20, 16, 45, 0.9) 100%)',
              border: isDragOverNeed
                ? '2.5px dashed #00B894'
                : '2px solid rgba(0, 184, 148, 0.55)',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              boxShadow: isDragOverNeed ? '0 0 25px rgba(0, 184, 148, 0.5)' : 'none'
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '4px' }}>🟢</div>
            <button
              className="btn-funky"
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #00B894 0%, #55EFC4 100%)',
                color: '#083329',
                fontSize: '1.15rem',
                fontWeight: 800,
                padding: '14px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <ShieldCheck size={20} />
              <span>NEED 🟢</span>
            </button>
            <span style={{ fontSize: '0.75rem', color: '#55EFC4', display: 'block', marginTop: '8px' }}>
              Drag item card here or tap
            </span>
          </div>

          {/* WANT Drop Zone & Button */}
          <div
            onDragOver={(e) => handleDragOver(e, 'want')}
            onDragLeave={() => handleDragLeave('want')}
            onDrop={(e) => handleDrop(e, 'want')}
            onClick={() => handleClassify(false)}
            style={{
              padding: '24px 18px',
              borderRadius: 'var(--radius-lg)',
              background: isDragOverWant
                ? 'rgba(9, 132, 227, 0.35)'
                : 'linear-gradient(135deg, rgba(9, 132, 227, 0.18) 0%, rgba(20, 16, 45, 0.9) 100%)',
              border: isDragOverWant
                ? '2.5px dashed #0984E3'
                : '2px solid rgba(9, 132, 227, 0.55)',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              boxShadow: isDragOverWant ? '0 0 25px rgba(9, 132, 227, 0.5)' : 'none'
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '4px' }}>🔵</div>
            <button
              className="btn-funky"
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #0984E3 0%, #74B9FF 100%)',
                color: '#0b2742',
                fontSize: '1.15rem',
                fontWeight: 800,
                padding: '14px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <Heart size={20} />
              <span>WANT 🔵</span>
            </button>
            <span style={{ fontSize: '0.75rem', color: '#74B9FF', display: 'block', marginTop: '8px' }}>
              Drag item card here or tap
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
