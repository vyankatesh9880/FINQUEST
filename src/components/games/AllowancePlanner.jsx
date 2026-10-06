import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

const SCENARIOS = [
  {
    day: "Monday",
    dayIndex: 0,
    title: "School Lunch Dilemma",
    scenario: "It's lunchtime at school. What will you eat today?",
    isMandatory: false,
    choiceA: {
      text: "Packed lunch from home",
      cost: 0,
      happiness: 0,
      description: "Healthy and completely free from home ($0, +0 Happiness)"
    },
    choiceB: {
      text: "Canteen hot meal",
      cost: 5,
      happiness: 10,
      description: "Warm pizza slice and fruit punch ($5, +10 Happiness)"
    }
  },
  {
    day: "Tuesday",
    dayIndex: 1,
    title: "Morning Commute",
    scenario: "The weather is cool and breezy. How are you traveling to school?",
    isMandatory: false,
    choiceA: {
      text: "Walk to school with classmates",
      cost: 0,
      happiness: 0,
      description: "Fresh morning walk and zero spend ($0, +0 Happiness)"
    },
    choiceB: {
      text: "Ride the city bus",
      cost: 2,
      happiness: 5,
      description: "Quick air-conditioned commute ($2, +5 Happiness)"
    }
  },
  {
    day: "Wednesday",
    dayIndex: 2,
    title: "Friend's Birthday Present",
    scenario: "It's your best friend's birthday party this afternoon!",
    isMandatory: false,
    choiceA: {
      text: "Craft a custom handmade card & origami",
      cost: 3,
      happiness: 15,
      description: "Thoughtful, heartfelt, and budget-friendly ($3, +15 Happiness)"
    },
    choiceB: {
      text: "Buy a branded store gift",
      cost: 20,
      happiness: 20,
      description: "Fancy boxed game from the mall ($20, +20 Happiness)"
    }
  },
  {
    day: "Thursday",
    dayIndex: 3,
    title: "After-School Snack",
    scenario: "Classes just ended and you're feeling a bit hungry.",
    isMandatory: false,
    choiceA: {
      text: "Eat fresh fruit brought from home",
      cost: 0,
      happiness: 0,
      description: "Sweet banana and apple snack ($0, +0 Happiness)"
    },
    choiceB: {
      text: "Buy gourmet waffle cone ice cream",
      cost: 4,
      happiness: 10,
      description: "Delicious cold chocolate scoop ($4, +10 Happiness)"
    }
  },
  {
    day: "Friday",
    dayIndex: 4,
    title: "Friday Night Fun",
    scenario: "The school week is over! Time to celebrate Friday evening.",
    isMandatory: false,
    choiceA: {
      text: "Watch a favorite movie at home",
      cost: 0,
      happiness: 0,
      description: "Cozy movie night with family popcorn ($0, +0 Happiness)"
    },
    choiceB: {
      text: "Go to the cinema with friends",
      cost: 12,
      happiness: 25,
      description: "Big screen theater ticket & snacks ($12, +25 Happiness)"
    }
  },
  {
    day: "Saturday",
    dayIndex: 5,
    title: "Weekend Opportunity",
    scenario: "Your neighbor needs help raking leaves and cleaning their garden yard.",
    isMandatory: false,
    choiceA: {
      text: "Clean neighbor's yard",
      cost: -15, // Income!
      happiness: 10,
      description: "Earn extra pocket money (+ $15 Income, +10 Happiness)"
    },
    choiceB: {
      text: "Sleep in & lounge around",
      cost: 0,
      happiness: 5,
      description: "Lazy Saturday morning ($0 Income, +5 Happiness)"
    }
  },
  {
    day: "Sunday",
    dayIndex: 6,
    title: "Unexpected Expense Alert!",
    scenario: "Your school backpack zipper broke and your math notebook set got damaged.",
    isMandatory: true,
    choiceA: {
      text: "Buy mandatory notebook set replacement",
      cost: 4,
      happiness: -5,
      description: "Required for Monday's classes (- $4 Mandatory Cost)"
    }
  }
];

export const AllowancePlanner = ({ onComplete }) => {
  const weeklyAllowance = 50.00;
  const targetSavingsGoal = 15.00;

  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [balance, setBalance] = useState(weeklyAllowance);
  const [happiness, setHappiness] = useState(100);
  const [history, setHistory] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const currentScenario = SCENARIOS[currentDayIndex];

  const handleDecision = (choice) => {
    // If cost is negative (income), balance increases
    const newBalance = balance - choice.cost;
    const newHappiness = Math.max(0, happiness + choice.happiness);

    setBalance(newBalance);
    setHappiness(newHappiness);

    const logEntry = {
      day: currentScenario.day,
      title: currentScenario.title,
      decisionText: choice.text,
      cost: choice.cost,
      happinessDelta: choice.happiness
    };

    setHistory(prev => [...prev, logEntry]);

    if (currentDayIndex + 1 < SCENARIOS.length) {
      setCurrentDayIndex(prev => prev + 1);
    } else {
      setGameOver(true);
      if (newBalance >= targetSavingsGoal) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
      if (onComplete) onComplete(Math.round(newBalance * 10));
    }
  };

  const handleRestart = () => {
    setCurrentDayIndex(0);
    setBalance(weeklyAllowance);
    setHappiness(100);
    setHistory([]);
    setGameOver(false);
  };

  const isWin = balance >= targetSavingsGoal && balance >= 0;

  if (gameOver) {
    return (
      <div className="animate-pop-in" style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
        <div className="glass-card" style={{
          padding: '36px 26px',
          background: isWin
            ? 'linear-gradient(135deg, rgba(20, 16, 45, 0.95) 0%, rgba(20, 40, 45, 0.95) 100%)'
            : 'linear-gradient(135deg, rgba(40, 16, 30, 0.95) 0%, rgba(20, 16, 45, 0.95) 100%)',
          border: isWin ? '2px solid #00B894' : '2px solid #FF7675',
          boxShadow: isWin ? '0 20px 50px rgba(0, 0, 0, 0.6), var(--shadow-glow-green)' : '0 20px 50px rgba(0, 0, 0, 0.6)'
        }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '10px' }}>
            {isWin ? '🎉💰' : '⚠️📉'}
          </div>

          <span style={{
            background: isWin ? 'rgba(0, 184, 148, 0.2)' : 'rgba(255, 118, 117, 0.2)',
            color: isWin ? '#55EFC4' : '#FF7675',
            padding: '4px 14px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.8rem',
            fontWeight: 800,
            textTransform: 'uppercase'
          }}>
            {isWin ? 'Savings Goal Conquered!' : 'Budget Alert'}
          </span>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 4vw, 2.3rem)',
            color: '#fff',
            margin: '12px 0 8px'
          }}>
            {isWin ? 'Smart Budget Master Win!' : 'Missed Savings Goal'}
          </h2>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: '0.98rem',
            maxWidth: '540px',
            margin: '0 auto 24px',
            lineHeight: 1.5
          }}>
            {isWin
              ? `Tremendous budgeting! You ended the week with $${balance.toFixed(2)}, easily beating your $${targetSavingsGoal.toFixed(2)} target while maintaining ${happiness}% happiness!`
              : balance < 0
                ? `You overspent your budget by $${Math.abs(balance).toFixed(2)}. Remember: choosing free alternatives on smaller days leaves cushion for weekend emergencies.`
                : `You had $${balance.toFixed(2)} left, missing your $${targetSavingsGoal.toFixed(2)} goal by $${(targetSavingsGoal - balance).toFixed(2)}. Practice picking homemade snacks and thrifty gifts next time!`}
          </p>

          {/* Final Metrics Grid */}
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
              <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', display: 'block', textTransform: 'uppercase' }}>Final Balance</span>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 800,
                color: balance >= targetSavingsGoal ? '#55EFC4' : balance >= 0 ? '#FFA502' : '#FF7675'
              }}>
                ${balance.toFixed(2)}
              </span>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '14px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', display: 'block', textTransform: 'uppercase' }}>Target Goal</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: '#55EFC4' }}>
                ${targetSavingsGoal.toFixed(2)}
              </span>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '14px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', display: 'block', textTransform: 'uppercase' }}>Final Happiness</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: '#FD79A8' }}>
                {happiness}%
              </span>
            </div>
          </div>

          {/* Week Journey Log */}
          <div style={{
            textAlign: 'left',
            maxHeight: '190px',
            overflowY: 'auto',
            background: 'rgba(0, 0, 0, 0.35)',
            borderRadius: 'var(--radius-md)',
            padding: '12px 16px',
            marginBottom: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <h4 style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '8px' }}>
              Your 7-Day Decisions:
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {history.map((h, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  fontSize: '0.82rem'
                }}>
                  <div>
                    <strong style={{ color: '#FDCB6E' }}>{h.day}: </strong>
                    <span style={{ color: '#fff' }}>{h.decisionText}</span>
                  </div>
                  <span style={{
                    fontWeight: 700,
                    color: h.cost < 0 ? '#55EFC4' : h.cost === 0 ? '#B8B5D1' : '#FF7675'
                  }}>
                    {h.cost < 0 ? `+$${Math.abs(h.cost)}` : h.cost === 0 ? '$0' : `-$${h.cost}`}
                  </span>
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
            <span>Try Another Week (Reset)</span>
          </button>
        </div>
      </div>
    );
  }

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="animate-pop-in" style={{ maxWidth: '780px', margin: '0 auto' }}>
      {/* 1. HEADER DASHBOARD */}
      <div style={{
        padding: '18px 20px',
        borderRadius: 'var(--radius-md)',
        background: 'rgba(20, 16, 45, 0.92)',
        border: '1.5px solid rgba(255, 165, 2, 0.35)',
        marginBottom: '20px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)'
      }}>
        {/* Metric Badges */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '12px',
          marginBottom: '16px'
        }}>
          {/* Weekly Allowance */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '10px 14px',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800 }}>
              Weekly Allowance
            </span>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: '#FFA502' }}>
              ${weeklyAllowance.toFixed(2)}
            </div>
          </div>

          {/* Current Balance */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '10px 14px',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800 }}>
              Current Balance
            </span>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              fontWeight: 800,
              color: balance >= targetSavingsGoal ? '#55EFC4' : balance >= 0 ? '#FFA502' : '#FF7675'
            }}>
              ${balance.toFixed(2)}
            </div>
          </div>

          {/* Target Savings Goal */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '10px 14px',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800 }}>
              Savings Goal
            </span>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: '#55EFC4' }}>
              ${targetSavingsGoal.toFixed(2)}
            </div>
          </div>

          {/* Happiness Meter */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '10px 14px',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800 }}>
              Happiness Meter
            </span>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: '#FD79A8' }}>
              {happiness}% 😊
            </div>
          </div>
        </div>

        {/* Current Day Indicator: Monday through Sunday */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '6px',
          background: 'rgba(0, 0, 0, 0.3)',
          padding: '8px 12px',
          borderRadius: 'var(--radius-full)'
        }}>
          {daysOfWeek.map((dayLabel, idx) => {
            const isCurrent = idx === currentDayIndex;
            const isPassed = idx < currentDayIndex;

            return (
              <div
                key={idx}
                style={{
                  flex: 1,
                  textAlign: 'center',
                  padding: '6px 4px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  transition: 'all 0.25s ease',
                  background: isCurrent
                    ? 'linear-gradient(135deg, #FFA502 0%, #FD79A8 100%)'
                    : isPassed
                      ? 'rgba(0, 184, 148, 0.25)'
                      : 'transparent',
                  color: isCurrent
                    ? '#1a1530'
                    : isPassed
                      ? '#55EFC4'
                      : 'var(--text-dim)'
                }}
              >
                {dayLabel} {isPassed ? '✓' : ''}
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. SCENARIO CARD */}
      <div className="glass-card" style={{
        padding: '30px 24px',
        border: '1.5px solid rgba(255, 255, 255, 0.15)',
        background: 'linear-gradient(135deg, rgba(20, 16, 45, 0.95) 0%, rgba(28, 22, 58, 0.95) 100%)',
        marginBottom: '20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '14px'
        }}>
          <span style={{
            background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)',
            color: '#fff',
            fontSize: '0.75rem',
            fontWeight: 800,
            padding: '4px 12px',
            borderRadius: 'var(--radius-full)',
            textTransform: 'uppercase'
          }}>
            📅 {currentScenario.day}
          </span>

          {currentScenario.isMandatory && (
            <span style={{
              background: 'rgba(255, 118, 117, 0.2)',
              color: '#FF7675',
              border: '1px solid #FF7675',
              fontSize: '0.75rem',
              fontWeight: 800,
              padding: '3px 10px',
              borderRadius: '6px'
            }}>
              ⚠️ Mandatory Surprise Expense
            </span>
          )}
        </div>

        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.45rem',
          color: '#fff',
          margin: '0 0 8px'
        }}>
          {currentScenario.title}
        </h3>

        <p style={{
          fontSize: '0.98rem',
          color: 'var(--text-muted)',
          lineHeight: 1.5,
          marginBottom: '24px'
        }}>
          "{currentScenario.scenario}"
        </p>

        {/* Decision Choice Buttons with cost & happiness indicators */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: currentScenario.isMandatory ? '1fr' : '1fr 1fr',
          gap: '16px'
        }}>
          {/* Choice A */}
          <button
            onClick={() => handleDecision(currentScenario.choiceA)}
            className="btn-funky"
            style={{
              padding: '18px 16px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1.5px solid rgba(255, 255, 255, 0.18)',
              color: '#fff',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#FFA502';
              e.currentTarget.style.background = 'rgba(255, 165, 2, 0.12)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <span style={{ fontWeight: 800, fontSize: '1rem', color: '#fff' }}>
                Option 1
              </span>
              <span style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: currentScenario.choiceA.cost < 0 ? '#55EFC4' : currentScenario.choiceA.cost === 0 ? '#55EFC4' : '#FF7675'
              }}>
                {currentScenario.choiceA.cost < 0 ? `+$${Math.abs(currentScenario.choiceA.cost)} Income` : `$${currentScenario.choiceA.cost} Cost`}
              </span>
            </div>

            <span style={{ fontSize: '0.92rem', color: '#fff', fontWeight: 600 }}>
              {currentScenario.choiceA.text}
            </span>

            <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
              {currentScenario.choiceA.description}
            </span>
          </button>

          {/* Choice B (if not mandatory) */}
          {!currentScenario.isMandatory && currentScenario.choiceB && (
            <button
              onClick={() => handleDecision(currentScenario.choiceB)}
              className="btn-funky"
              style={{
                padding: '18px 16px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1.5px solid rgba(255, 255, 255, 0.18)',
                color: '#fff',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#FD79A8';
                e.currentTarget.style.background = 'rgba(253, 121, 168, 0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <span style={{ fontWeight: 800, fontSize: '1rem', color: '#fff' }}>
                  Option 2
                </span>
                <span style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: currentScenario.choiceB.cost === 0 ? '#55EFC4' : '#FF7675'
                }}>
                  ${currentScenario.choiceB.cost} Cost
                </span>
              </div>

              <span style={{ fontSize: '0.92rem', color: '#fff', fontWeight: 600 }}>
                {currentScenario.choiceB.text}
              </span>

              <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                {currentScenario.choiceB.description}
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
