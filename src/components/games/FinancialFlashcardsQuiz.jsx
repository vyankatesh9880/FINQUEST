import React, { useState, useEffect } from 'react';
import { Layers, Zap, RotateCw, CheckCircle2, XCircle, ChevronLeft, ChevronRight, Shuffle, Timer, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

const VOCABULARY = [
  {
    id: 1,
    term: "Budget",
    emoji: "📋💰",
    definition: "A plan for managing income and expenses over a set period.",
    example: "Writing down how much of your $20 allowance will go to snacks vs. your savings jar.",
    question: "What is a 'Budget'?",
    options: [
      "A plan for managing income and expenses",
      "A penalty fine banks charge on savings",
      "A receipt you get after buying video games",
      "A loan taken from a credit card company"
    ],
    correctIndex: 0
  },
  {
    id: 2,
    term: "Income",
    emoji: "💵💼",
    definition: "Money earned from working, chores, or received as an allowance.",
    example: "Earning $15 for washing neighbor cars or getting $20 weekly allowance from parents.",
    question: "What best defines 'Income'?",
    options: [
      "Money you owe to your school library",
      "Money spent at the cinema",
      "Money earned from working or allowance",
      "The tax charged when purchasing clothes"
    ],
    correctIndex: 2
  },
  {
    id: 3,
    term: "Expense",
    emoji: "🧾🛍️",
    definition: "Money spent on goods, supplies, or services.",
    example: "Spending $5 at the school cafeteria for lunch or $2 for a bus ticket.",
    question: "What is an 'Expense'?",
    options: [
      "Money placed into a long-term investment",
      "Money spent on goods or services",
      "Money received as a birthday gift",
      "A secret bank password"
    ],
    correctIndex: 1
  },
  {
    id: 4,
    term: "Interest",
    emoji: "📈✨",
    definition: "Extra money paid for borrowing money, or extra money earned for saving in a bank.",
    example: "Earning an extra $3 in your savings account over a year just for keeping your money in the bank.",
    question: "How does 'Interest' work in finance?",
    options: [
      "It is extra money paid for borrowing or earned for saving",
      "It is a discount code on online shopping",
      "It is the cost of paper used to print money",
      "It guarantees you can never lose savings"
    ],
    correctIndex: 0
  },
  {
    id: 5,
    term: "Debt",
    emoji: "💳⏳",
    definition: "Money owed to someone else or to a bank that must be repaid.",
    example: "Borrowing $10 from a friend for lunch that you promise to pay back on Monday.",
    question: "What is 'Debt'?",
    options: [
      "Cash you find on the sidewalk",
      "Money set aside for your college fund",
      "Money owed to someone else that must be repaid",
      "A digital coin in a multiplayer game"
    ],
    correctIndex: 2
  },
  {
    id: 6,
    term: "Savings",
    emoji: "🐖🪙",
    definition: "Money set aside for future use instead of spending it immediately.",
    example: "Keeping $10 from your allowance each week to buy a $60 skateboard later.",
    question: "What is the primary purpose of 'Savings'?",
    options: [
      "Money set aside for future use",
      "Spending all cash the minute you receive it",
      "Throwing away loose coins",
      "Borrowing loans with high interest"
    ],
    correctIndex: 0
  },
  {
    id: 7,
    term: "Inflation",
    emoji: "🎈💸",
    definition: "A general increase in prices of goods and services over time.",
    example: "A chocolate bar costing $1 five years ago that now costs $1.50 due to inflation.",
    question: "What happens during 'Inflation'?",
    options: [
      "Everything in stores becomes completely free",
      "Prices of goods and services increase over time",
      "Banks double everyone's savings account",
      "Money turns into physical gold coins"
    ],
    correctIndex: 1
  },
  {
    id: 8,
    term: "Emergency Fund",
    emoji: "🛡️☔",
    definition: "Money saved specifically for unexpected costs or urgent surprises.",
    example: "Having $50 set aside to replace your broken glasses or sudden doctor visit.",
    question: "When should an 'Emergency Fund' be used?",
    options: [
      "To buy the latest designer sneakers",
      "For unplanned urgent costs and emergencies",
      "To purchase extra in-game skins",
      "To lend cash to total strangers"
    ],
    correctIndex: 1
  }
];

export const FinancialFlashcardsQuiz = ({ onComplete }) => {
  const [mode, setMode] = useState('study'); // 'study' | 'quiz'

  // Flashcards state
  const [deck, setDeck] = useState(VOCABULARY);
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Quiz state
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15);
  const [quizFinished, setQuizFinished] = useState(false);

  // Initialize Quiz: Pick 5 random questions
  const startQuiz = () => {
    const shuffled = [...VOCABULARY].sort(() => 0.5 - Math.random()).slice(0, 5);
    setQuizQuestions(shuffled);
    setQuizIndex(0);
    setQuizScore(0);
    setSelectedOption(null);
    setTimeLeft(15);
    setQuizFinished(false);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setDeck(prev => [...prev].sort(() => 0.5 - Math.random()));
    setCardIndex(0);
  };

  const handleNextCard = () => {
    setIsFlipped(false);
    setCardIndex(prev => (prev + 1) % deck.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCardIndex(prev => (prev - 1 + deck.length) % deck.length);
  };

  // 15-second timer per question in Quiz mode
  useEffect(() => {
    if (mode !== 'quiz' || quizFinished || selectedOption !== null) return;

    if (timeLeft <= 0) {
      // Time expired: auto-fail this question
      setSelectedOption(-1);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [mode, timeLeft, selectedOption, quizFinished]);

  const handleSelectOption = (idx) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);

    const currentQ = quizQuestions[quizIndex];
    if (idx === currentQ.correctIndex) {
      setQuizScore(prev => prev + 1);
      confetti({ particleCount: 20, spread: 45, origin: { y: 0.65 } });
    }
  };

  const handleNextQuizQuestion = () => {
    if (quizIndex + 1 < quizQuestions.length) {
      setQuizIndex(prev => prev + 1);
      setSelectedOption(null);
      setTimeLeft(15);
    } else {
      setQuizFinished(true);
      confetti({ particleCount: 90, spread: 80, origin: { y: 0.55 } });
      if (onComplete) onComplete(quizScore * 20);
    }
  };

  const currentCard = deck[cardIndex];
  const currentQuiz = quizQuestions[quizIndex];

  return (
    <div className="animate-pop-in" style={{ maxWidth: '780px', margin: '0 auto' }}>
      {/* MODE TOGGLE TABS */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '24px'
      }}>
        <div style={{
          display: 'inline-flex',
          background: 'rgba(20, 16, 45, 0.9)',
          padding: '6px',
          borderRadius: 'var(--radius-full)',
          border: '1.5px solid rgba(255, 255, 255, 0.15)',
          gap: '6px'
        }}>
          <button
            onClick={() => {
              setMode('study');
              setIsFlipped(false);
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 24px',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-display)',
              fontSize: '0.95rem',
              fontWeight: 700,
              background: mode === 'study'
                ? 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)'
                : 'transparent',
              color: mode === 'study' ? '#fff' : 'var(--text-muted)',
              transition: 'all 0.25s ease'
            }}
          >
            <Layers size={18} />
            <span>Study Cards Mode 🃏</span>
          </button>

          <button
            onClick={() => {
              setMode('quiz');
              startQuiz();
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 24px',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-display)',
              fontSize: '0.95rem',
              fontWeight: 700,
              background: mode === 'quiz'
                ? 'linear-gradient(135deg, #FFA502 0%, #FDCB6E 100%)'
                : 'transparent',
              color: mode === 'quiz' ? '#1a1530' : 'var(--text-muted)',
              transition: 'all 0.25s ease'
            }}
          >
            <Zap size={18} />
            <span>Challenge Quiz Mode ⚡</span>
          </button>
        </div>
      </div>

      {mode === 'study' ? (
        /* FLASHCARD MODE UI */
        <div className="animate-pop-in">
          {/* Deck Counter */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '14px',
            padding: '0 8px'
          }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 700 }}>
              Term {cardIndex + 1} of {deck.length}
            </span>
            <span style={{ fontSize: '0.8rem', color: '#FDCB6E' }}>
              💡 Click card or tap "Flip" to reveal definition
            </span>
          </div>

          {/* 3D Flip Card */}
          <div
            onClick={() => setIsFlipped(prev => !prev)}
            style={{
              perspective: '1200px',
              cursor: 'pointer',
              marginBottom: '24px'
            }}
          >
            <div className="glass-card" style={{
              minHeight: '340px',
              padding: '36px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              border: '2px solid rgba(162, 155, 254, 0.4)',
              background: isFlipped
                ? 'linear-gradient(135deg, rgba(20, 16, 45, 0.95) 0%, rgba(35, 22, 65, 0.95) 100%)'
                : 'linear-gradient(135deg, rgba(28, 22, 58, 0.9) 0%, rgba(20, 16, 45, 0.9) 100%)',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4), var(--shadow-glow-purple)',
              transition: 'all 0.35s ease',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                top: '18px',
                right: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.75rem',
                color: 'var(--text-dim)'
              }}>
                <RotateCw size={14} />
                Flip
              </span>

              {!isFlipped ? (
                /* FRONT: Term + Emoji icon */
                <div>
                  <div style={{ fontSize: '5rem', marginBottom: '12px' }}>
                    {currentCard.emoji}
                  </div>
                  <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 4.5vw, 2.6rem)',
                    color: '#fff',
                    margin: 0
                  }}>
                    {currentCard.term}
                  </h2>
                </div>
              ) : (
                /* BACK: Simple Definition + Real-World Example */
                <div className="animate-pop-in">
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    color: '#FFA502',
                    margin: '0 0 10px'
                  }}>
                    {currentCard.term}
                  </h3>

                  <p style={{
                    fontSize: '1.05rem',
                    color: '#fff',
                    lineHeight: 1.6,
                    maxWidth: '560px',
                    margin: '0 auto 16px'
                  }}>
                    {currentCard.definition}
                  </p>

                  <div style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    padding: '12px 18px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    maxWidth: '540px',
                    margin: '0 auto',
                    textAlign: 'left'
                  }}>
                    <strong style={{ color: '#55EFC4', fontSize: '0.85rem', display: 'block', marginBottom: '4px' }}>
                      🌟 Real-World Example:
                    </strong>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      "{currentCard.example}"
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Controls: Previous, Next, Flip, and Shuffle */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
            <button
              onClick={handlePrevCard}
              className="btn-funky"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                padding: '12px'
              }}
            >
              <ChevronLeft size={18} />
              <span>Previous</span>
            </button>

            <button
              onClick={() => setIsFlipped(prev => !prev)}
              className="btn-funky"
              style={{
                background: 'rgba(108, 92, 231, 0.25)',
                color: '#A29BFE',
                border: '1px solid rgba(108, 92, 231, 0.5)',
                padding: '12px'
              }}
            >
              <RotateCw size={18} />
              <span>Flip</span>
            </button>

            <button
              onClick={handleShuffle}
              className="btn-funky"
              style={{
                background: 'rgba(253, 121, 168, 0.2)',
                color: '#FD79A8',
                border: '1px solid rgba(253, 121, 168, 0.4)',
                padding: '12px'
              }}
            >
              <Shuffle size={18} />
              <span>Shuffle</span>
            </button>

            <button
              onClick={handleNextCard}
              className="btn-funky btn-primary-purple"
              style={{ padding: '12px' }}
            >
              <span>Next</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      ) : (
        /* QUIZ MODE UI */
        <div className="animate-pop-in">
          {!quizFinished && currentQuiz ? (
            <div className="glass-card" style={{
              padding: '30px 24px',
              border: '1.5px solid rgba(255, 165, 2, 0.35)',
              background: 'linear-gradient(135deg, rgba(20, 16, 45, 0.95) 0%, rgba(28, 22, 58, 0.95) 100%)'
            }}>
              {/* Question container header with 15s timer and live score display */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '18px'
              }}>
                <span style={{
                  background: 'rgba(255, 165, 2, 0.15)',
                  color: '#FFA502',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  fontWeight: 800
                }}>
                  Question {quizIndex + 1} of 5
                </span>

                {/* 15-second Question Timer */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: timeLeft <= 5 ? 'rgba(255, 118, 117, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                  border: `1px solid ${timeLeft <= 5 ? '#FF7675' : 'rgba(255, 255, 255, 0.15)'}`,
                  color: timeLeft <= 5 ? '#FF7675' : '#fff',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 800
                }}>
                  <Timer size={16} />
                  <span>{timeLeft}s</span>
                </div>

                {/* Live Score Display */}
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  color: '#55EFC4'
                }}>
                  Live Score: {quizScore} / {quizIndex}
                </span>
              </div>

              {/* Question Title */}
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                color: '#fff',
                marginBottom: '20px',
                lineHeight: 1.4
              }}>
                {currentQuiz.question}
              </h3>

              {/* 4 Multiple-Choice Option Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                {currentQuiz.options.map((opt, idx) => {
                  let btnBg = 'rgba(255, 255, 255, 0.06)';
                  let border = '1px solid rgba(255, 255, 255, 0.14)';
                  let textColor = '#fff';

                  if (selectedOption !== null) {
                    if (idx === currentQuiz.correctIndex) {
                      btnBg = 'rgba(0, 184, 148, 0.25)';
                      border = '2px solid #00B894';
                      textColor = '#55EFC4';
                    } else if (idx === selectedOption) {
                      btnBg = 'rgba(255, 118, 117, 0.25)';
                      border = '2px solid #FF7675';
                      textColor = '#FF7675';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={selectedOption !== null}
                      style={{
                        padding: '14px 18px',
                        borderRadius: 'var(--radius-md)',
                        background: btnBg,
                        border,
                        color: textColor,
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        textAlign: 'left',
                        cursor: selectedOption !== null ? 'default' : 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span>{opt}</span>
                      {selectedOption !== null && idx === currentQuiz.correctIndex && (
                        <CheckCircle2 size={18} color="#55EFC4" />
                      )}
                      {selectedOption !== null && idx === selectedOption && idx !== currentQuiz.correctIndex && (
                        <XCircle size={18} color="#FF7675" />
                      )}
                    </button>
                  );
                })}
              </div>

              {selectedOption !== null && (
                <button
                  onClick={handleNextQuizQuestion}
                  className="btn-funky btn-yellow-funky animate-pop-in"
                  style={{ width: '100%', padding: '14px' }}
                >
                  <span>{quizIndex + 1 < quizQuestions.length ? 'Next Question ⚡' : 'View Final Rank 🏆'}</span>
                  <ChevronRight size={18} />
                </button>
              )}
            </div>
          ) : (
            /* QUIZ END SCREEN */
            <div className="glass-card animate-pop-in" style={{
              padding: '36px 28px',
              textAlign: 'center',
              border: '2px solid rgba(255, 165, 2, 0.5)',
              background: 'linear-gradient(135deg, rgba(20, 16, 45, 0.95) 0%, rgba(35, 25, 70, 0.95) 100%)'
            }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '10px' }}>🎯🏆</div>

              <span style={{
                background: 'rgba(255, 165, 2, 0.2)',
                color: '#FFA502',
                padding: '4px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: 800,
                textTransform: 'uppercase'
              }}>
                Challenge Complete
              </span>

              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                color: '#fff',
                margin: '12px 0 6px'
              }}>
                {quizScore === 5 ? 'Financial Wordsmith 🌟' : quizScore >= 3 ? 'Budget Scholar 🎓' : 'Vocabulary Explorer 🌱'}
              </h2>

              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '24px' }}>
                You scored <strong style={{ color: '#55EFC4' }}>{quizScore} out of 5</strong> on the financial word bank!
              </p>

              <button
                onClick={startQuiz}
                className="btn-funky btn-yellow-funky"
                style={{ width: '100%', padding: '14px' }}
              >
                <RotateCcw size={18} />
                <span>Play Challenge Again ⚡</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
