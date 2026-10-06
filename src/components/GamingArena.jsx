import React, { useState, useEffect } from 'react';
import { Gamepad2, ArrowLeft, ArrowRight, X, Trophy } from 'lucide-react';
import { NeedsWantsDetective } from './games/NeedsWantsDetective';
import { AllowancePlanner } from './games/AllowancePlanner';
import { FinancialFlashcardsQuiz } from './games/FinancialFlashcardsQuiz';
import { SavingsGoalRace } from './games/SavingsGoalRace';
import { LemonadeStandSimulator } from './games/LemonadeStandSimulator';

const GAMES_DATA = [
  {
    id: 'game-1',
    badge: 'Game 1',
    title: 'Needs vs. Wants Detective',
    icon: '🕵️‍♂️',
    themeColor: '#FD79A8',
    subtitle: 'Solve tricky financial case files and uncover the golden difference between survival necessities and lifestyle wants!',
    features: ['🔍 8 Real-World Cases', '🔥 Streak Combos', '⭐ Detective Ranks'],
    duration: '5 Mins',
    component: NeedsWantsDetective
  },
  {
    id: 'game-2',
    badge: 'Game 2',
    title: 'Weekly Allowance Planner',
    icon: '🐖',
    themeColor: '#FFA502',
    subtitle: 'Master the 3-Jar System: Allocate allowance into Spend, Save, and Invest piggy banks, then survive surprise life events!',
    features: ['⚖️ 50/30/20 Presets', '🎲 Life Surprise Events', '🛡️ Financial Health Score'],
    duration: '6 Mins',
    component: AllowancePlanner
  },
  {
    id: 'game-3',
    badge: 'Game 3',
    title: 'Financial Term Flashcards & Quiz',
    icon: '🃏',
    themeColor: '#6C5CE7',
    subtitle: 'Flip 3D interactive flashcards to decode Wall Street power terms and test your lightning reflexes in the speed quiz arena!',
    features: ['🔄 3D Flip Cards', '⚡ Speed Quiz Mode', '💡 Plain-English Examples'],
    duration: '7 Mins',
    component: FinancialFlashcardsQuiz
  },
  {
    id: 'game-4',
    badge: 'Game 4',
    title: 'Savings Goal Race',
    icon: '🏎️',
    themeColor: '#00B894',
    subtitle: 'Pick your dream bicycle or laptop, run smart weekend side hustles, and outrun impulse spending hazards on the race track!',
    features: ['🏁 Animated Racetrack', '🐕 Side Hustle Moves', '🚨 Resist Impulse Hazards'],
    duration: '6 Mins',
    component: SavingsGoalRace
  },
  {
    id: 'game-5',
    badge: 'Game 5',
    title: 'Lemonade & Toy Stand Simulator',
    icon: '🍋',
    themeColor: '#FDCB6E',
    subtitle: 'Run your very own sunny sidewalk business! Balance weather forecasts, inventory supply costs, pricing, and count weekly profits!',
    features: ['☀️ Daily Weather Shifts', '📊 Cost vs Price Strategy', '👑 Entrepreneur Tycoon Score'],
    duration: '8 Mins',
    component: LemonadeStandSimulator
  }
];

export const GamingArena = ({ user, category }) => {
  const isSenior = category === 'senior' || user?.gradeCategory === 'grade8-10';

  const [activeGameId, setActiveGameId] = useState(null);
  const [completedGames, setCompletedGames] = useState(() => {
    try {
      const saved = localStorage.getItem('finquest_games_completed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const activeGame = GAMES_DATA.find(g => g.id === activeGameId);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveGameId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activeGameId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeGameId]);

  const handleGameComplete = (gameId, _score) => {
    if (!completedGames.includes(gameId)) {
      const updated = [...completedGames, gameId];
      setCompletedGames(updated);
      try {
        localStorage.setItem('finquest_games_completed', JSON.stringify(updated));
      } catch (e) {
        console.warn("Storage not available:", e);
      }
    }
  };

  return (
    <div className="animate-pop-in" style={{ position: 'relative' }}>
      {/* ARENA HEADER SECTION */}
      <div
        className="glass-card"
        style={{
          padding: '28px 28px',
          marginBottom: '28px',
          background: isSenior
            ? 'linear-gradient(135deg, rgba(0, 184, 148, 0.2) 0%, rgba(20, 16, 45, 0.9) 100%)'
            : 'linear-gradient(135deg, rgba(108, 92, 231, 0.2) 0%, rgba(253, 121, 168, 0.2) 50%, rgba(20, 16, 45, 0.85) 100%)',
          border: isSenior
            ? '1.5px solid rgba(0, 184, 148, 0.35)'
            : '1.5px solid rgba(162, 155, 254, 0.35)',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.35), var(--shadow-glow-purple)'
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{ maxWidth: '720px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: isSenior
                ? 'linear-gradient(135deg, #00B894 0%, #55EFC4 100%)'
                : 'linear-gradient(135deg, #6C5CE7 0%, #FD79A8 100%)',
              color: isSenior ? '#083329' : '#fff',
              fontWeight: 800,
              fontSize: '0.78rem',
              padding: '4px 12px',
              borderRadius: '6px',
              textTransform: 'uppercase',
              marginBottom: '10px',
              boxShadow: '0 4px 12px rgba(108, 92, 231, 0.35)'
            }}>
              <Gamepad2 size={14} />
              <span>{isSenior ? 'Grades 8th to 10th Arena' : 'Interactive Simulations & Arcades'}</span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.9rem, 3.8vw, 2.5rem)',
              margin: '0 0 8px 0',
              color: '#fff',
              lineHeight: 1.15
            }}>
              Financial Games Arena 🏆
            </h1>

            <p style={{
              color: 'var(--text-muted)',
              fontSize: '1rem',
              margin: 0,
              lineHeight: 1.5
            }}>
              Play interactive mini-games to test your smart spending, saving, and budgeting skills!
            </p>
          </div>

          {!isSenior && (
            /* Arena Stats Badge */
            <div style={{
              background: 'rgba(20, 16, 45, 0.88)',
              border: '1.5px solid rgba(253, 121, 168, 0.45)',
              borderRadius: 'var(--radius-md)',
              padding: '12px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3), var(--shadow-glow-pink)'
            }}>
              <Trophy size={24} color="#FD79A8" />
              <div>
                <span style={{
                  fontSize: '0.7rem',
                  color: 'var(--text-dim)',
                  textTransform: 'uppercase',
                  fontWeight: 800,
                  display: 'block',
                  lineHeight: 1
                }}>
                  Arena Status
                </span>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  color: '#FD79A8',
                  lineHeight: 1.15,
                  marginTop: '4px'
                }}>
                  {completedGames.length} of 5 Games Played
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {isSenior ? (
        /* EMPTY STATE FOR 8th TO 10th SECTION AS REQUESTED */
        <div className="glass-card animate-pop-in" style={{
          padding: '60px 24px',
          textAlign: 'center',
          border: '1.5px dashed rgba(255, 255, 255, 0.2)',
          background: 'rgba(20, 16, 45, 0.65)',
          maxWidth: '680px',
          margin: '20px auto'
        }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '16px' }}>🚀🎮</div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.6rem',
            color: '#fff',
            margin: '0 0 10px'
          }}>
            Senior Games Arena Coming Soon
          </h3>
          <p style={{
            fontSize: '0.95rem',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            maxWidth: '520px',
            margin: '0 auto'
          }}>
            The Games Arena for 8th to 10th grade (Market Masters) is currently kept empty while advanced high school stock market and venture simulations are being prepared.
          </p>
        </div>
      ) : (
        /* GAMES RESPONSIVE GRID (Only in 5th to 7th Section) */
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
          gap: '24px'
        }}>
          {GAMES_DATA.map((game) => {
            const isDone = completedGames.includes(game.id);

            return (
              <div
                key={game.id}
                className="glass-card"
                style={{
                  padding: '26px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: isDone
                    ? '1.5px solid rgba(0, 184, 148, 0.5)'
                    : `1.5px solid ${game.themeColor}55`,
                  background: isDone
                    ? 'linear-gradient(135deg, rgba(0, 184, 148, 0.12) 0%, rgba(20, 16, 45, 0.85) 100%)'
                    : 'rgba(20, 16, 45, 0.8)',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Header: Badge & Status */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px'
                  }}>
                    <span style={{
                      background: game.themeColor,
                      color: '#000',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      padding: '3px 10px',
                      borderRadius: '6px',
                      textTransform: 'uppercase'
                    }}>
                      {game.badge}
                    </span>

                    <span style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-dim)',
                      fontWeight: 600
                    }}>
                      ⏱️ {game.duration}
                    </span>
                  </div>

                  {/* Game Title & Emoji */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '10px'
                  }}>
                    <span style={{ fontSize: '2.2rem' }}>
                      {game.icon}
                    </span>

                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#fff',
                      margin: 0,
                      lineHeight: 1.25
                    }}>
                      {game.title}
                    </h3>
                  </div>

                  {/* Subtitle / Description */}
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                    marginBottom: '18px'
                  }}>
                    {game.subtitle}
                  </p>

                  {/* Key Features Tags */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    fontSize: '0.72rem',
                    color: 'var(--text-dim)',
                    marginBottom: '20px'
                  }}>
                    {game.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        style={{
                          background: 'rgba(255, 255, 255, 0.06)',
                          padding: '4px 8px',
                          borderRadius: '6px'
                        }}
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary Play Game Button */}
                <button
                  onClick={() => setActiveGameId(game.id)}
                  className="btn-funky btn-yellow-funky"
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: `linear-gradient(135deg, ${game.themeColor} 0%, #FFA502 100%)`,
                    color: '#1a1530',
                    fontWeight: 800
                  }}
                >
                  <span>Play Game 🕹️</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* FULL-SCREEN INTERACTIVE GAME MODAL / OVERLAY */}
      {activeGame && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(10, 8, 22, 0.94)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            animation: 'popIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
          }}
        >
          {/* Modal Header / Sticky Navigation Bar */}
          <div style={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            width: '100%',
            padding: '14px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(15, 12, 32, 0.92)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
          }}>
            {/* Left: Game Title & Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '1.8rem' }}>
                {activeGame.icon}
              </span>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    background: activeGame.themeColor,
                    color: '#000',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    padding: '2px 8px',
                    borderRadius: '4px',
                    textTransform: 'uppercase'
                  }}>
                    {activeGame.badge}
                  </span>
                  <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#fff',
                    margin: 0
                  }}>
                    {activeGame.title}
                  </h2>
                </div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Interactive FinQuest Mini-Game
                </span>
              </div>
            </div>

            {/* Right: "Back to Arena" Close Button */}
            <button
              onClick={() => setActiveGameId(null)}
              className="btn-funky"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.22)',
                color: '#fff',
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 118, 117, 0.2)';
                e.currentTarget.style.borderColor = '#FF7675';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to Arena</span>
              <X size={16} />
            </button>
          </div>

          {/* Modal Game Viewport Container */}
          <div style={{
            flex: 1,
            padding: '24px 16px 60px',
            maxWidth: '920px',
            width: '100%',
            margin: '0 auto'
          }}>
            {React.createElement(activeGame.component, {
              user,
              onComplete: (score) => handleGameComplete(activeGame.id, score)
            })}
          </div>
        </div>
      )}
    </div>
  );
};
