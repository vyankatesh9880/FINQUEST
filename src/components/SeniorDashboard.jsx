import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  BookOpen, 
  Gamepad2, 
  Sparkles, 
  Play, 
  CheckCircle2, 
  Lock, 
  Trophy, 
  Star, 
  ArrowRight,
  HelpCircle,
  Award,
  Zap,
  Flame,
  TrendingUp,
  BrainCircuit
} from 'lucide-react';
import { SENIOR_MODULES } from '../data/seniorModulesData';
import { ModuleDetailView } from './ModuleDetailView';

export const SeniorDashboard = ({ user }) => {
  // Top Navbar Center Tab: "Learning" | "Games"
  const [topTab, setTopTab] = useState('learning');
  
  // Selected module (null means showing module list track)
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  
  // Module completion & score tracking state
  const [moduleProgress, setModuleProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(`finquest_senior_prog_${user?.firstName || 'default'}`);
      return saved ? JSON.parse(saved) : { 1: { score: 10, completed: true } };
    } catch {
      return { 1: { score: 10, completed: true } };
    }
  });

  const handleCompleteModule = (modId, finalScore) => {
    setModuleProgress(prev => {
      const updated = {
        ...prev,
        [modId]: { score: finalScore, completed: true }
      };
      try {
        localStorage.setItem(`finquest_senior_prog_${user?.firstName || 'default'}`, JSON.stringify(updated));
      } catch (e) {
        console.warn(e);
      }
      return updated;
    });
  };

  const selectedModule = SENIOR_MODULES.find(m => m.id === selectedModuleId);
  const completedCount = Object.values(moduleProgress).filter(p => p.completed).length;

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '16px 16px 60px 16px',
      position: 'relative',
      zIndex: 1,
    }}>
      {/* 1. TOP NAVBAR: Right at top center of the screen with tabs for "Learning" and "Games" */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '28px',
        position: 'sticky',
        top: '12px',
        zIndex: 20
      }}>
        <div style={{
          display: 'inline-flex',
          background: 'rgba(20, 16, 45, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          padding: '6px',
          borderRadius: 'var(--radius-full)',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4), var(--shadow-glow-green)',
          gap: '8px'
        }}>
          {/* Learning Tab */}
          <button
            onClick={() => { setTopTab('learning'); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 28px',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              fontWeight: 700,
              background: topTab === 'learning' 
                ? 'linear-gradient(135deg, #00B894 0%, #55EFC4 100%)' 
                : 'transparent',
              color: topTab === 'learning' ? '#0b2e25' : 'var(--text-muted)',
              boxShadow: topTab === 'learning' ? '0 4px 15px rgba(0, 184, 148, 0.4)' : 'none',
              transition: 'all 0.25s ease'
            }}
          >
            <BookOpen size={18} />
            <span>Learning Track</span>
            <span style={{
              fontSize: '0.72rem',
              padding: '2px 7px',
              borderRadius: '10px',
              background: topTab === 'learning' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.1)',
              color: topTab === 'learning' ? '#000' : '#55EFC4',
              fontWeight: 800
            }}>
              5 Modules
            </span>
          </button>

          {/* Games Tab (placeholder) */}
          <button
            onClick={() => setTopTab('games')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 28px',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              fontWeight: 700,
              background: topTab === 'games' 
                ? 'linear-gradient(135deg, #FD79A8 0%, #FF7675 100%)' 
                : 'transparent',
              color: topTab === 'games' ? '#fff' : 'var(--text-muted)',
              boxShadow: topTab === 'games' ? '0 4px 15px rgba(253, 121, 168, 0.4)' : 'none',
              transition: 'all 0.25s ease'
            }}
          >
            <Gamepad2 size={18} />
            <span>Games Arena</span>
            <span style={{
              fontSize: '0.68rem',
              padding: '2px 6px',
              borderRadius: '6px',
              background: 'rgba(255, 255, 255, 0.15)',
              color: '#fff',
              fontWeight: 700
            }}>
              COMING SOON
            </span>
          </button>
        </div>
      </div>

      {/* 2. MAIN VIEW SWITCHER: LEARNING VS GAMES */}
      {topTab === 'games' ? (
        /* Games Tab Placeholder */
        <div className="glass-card animate-pop-in" style={{
          padding: '60px 24px',
          textAlign: 'center',
          maxWidth: '680px',
          margin: '0 auto',
          border: '1px solid rgba(85, 239, 196, 0.3)',
          background: 'linear-gradient(135deg, rgba(0, 184, 148, 0.1) 0%, rgba(20, 16, 45, 0.9) 100%)',
        }}>
          <div style={{
            fontSize: '3.5rem',
            marginBottom: '14px',
            animation: 'floatSlow 4s ease-in-out infinite'
          }}>
            📈⚡
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2rem',
            color: '#fff',
            marginBottom: '8px'
          }}>
            Wall Street Simulation Arcade In Development!
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 24px auto' }}>
            Get ready for Live Paper Stock Trading, The Credit Card Debt Survival Maze, and 50-30-20 Cash Flow Speedrun.
            Conquer your 5 Advanced Modules to unlock trading simulator leverage!
          </p>
          <button
            onClick={() => setTopTab('learning')}
            className="btn-funky btn-mint"
            style={{ padding: '12px 28px' }}
          >
            <BookOpen size={18} />
            <span>Explore 5 Advanced Modules</span>
          </button>
        </div>
      ) : selectedModule ? (
        /* DETAIL VIEW FOR SELECTED MODULE (Theory, Video, 10-Q Quiz) */
        <ModuleDetailView
          module={selectedModule}
          onCompleteModule={handleCompleteModule}
          onBackToList={() => setSelectedModuleId(null)}
        />
      ) : (
        /* ADVANCED LEARNING TRACK: 5 SEQUENTIAL MODULES */
        <div className="animate-pop-in">
          {/* Welcome Banner */}
          <div className="glass-card" style={{
            padding: '28px',
            marginBottom: '32px',
            background: 'linear-gradient(135deg, rgba(0, 184, 148, 0.16) 0%, rgba(9, 132, 227, 0.15) 50%, rgba(108, 92, 231, 0.2) 100%)',
            border: '1px solid rgba(85, 239, 196, 0.35)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#00B894',
                  color: '#000',
                  fontWeight: 800,
                  fontSize: '0.75rem',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}>
                  ⚡ Grades 8th to 10th: Market Masters Track
                </div>
                <h1 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                  margin: '0 0 6px 0',
                  color: '#fff'
                }}>
                  Welcome Back, Master {user.firstName} 📈🚀
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0 }}>
                  Conquer 5 advanced financial modules: Digital security, 50-30-20 cash flow, credit debt reality, high-yield banking, and compound index investing!
                </p>
              </div>

              {/* Progress Summary Pill */}
              <div style={{
                background: 'rgba(20, 16, 45, 0.85)',
                border: '1px solid rgba(85, 239, 196, 0.4)',
                borderRadius: 'var(--radius-md)',
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                boxShadow: 'var(--shadow-glow-green)'
              }}>
                <Trophy size={28} color="#55EFC4" />
                <div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800 }}>
                    Track Mastery
                  </span>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: '#55EFC4'
                  }}>
                    {completedCount} / 5 Modules Done
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Module Grid: 5 Advanced Modules */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '24px'
          }}>
            {SENIOR_MODULES.map((mod, index) => {
              const isCompleted = moduleProgress[mod.id]?.completed;
              const savedScore = moduleProgress[mod.id]?.score;

              return (
                <div
                  key={mod.id}
                  className="glass-card"
                  style={{
                    padding: '26px 22px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: isCompleted 
                      ? '1.5px solid rgba(0, 184, 148, 0.45)' 
                      : '1px solid rgba(255, 255, 255, 0.14)',
                    background: isCompleted
                      ? 'linear-gradient(135deg, rgba(0, 184, 148, 0.12) 0%, rgba(20, 16, 45, 0.85) 100%)'
                      : 'rgba(20, 16, 45, 0.7)',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                >
                  <div>
                    {/* Header line: Badge + Status */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                      <span style={{
                        background: mod.themeColor,
                        color: '#000',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        padding: '3px 10px',
                        borderRadius: '6px',
                        textTransform: 'uppercase'
                      }}>
                        {mod.badge}
                      </span>
                      {isCompleted ? (
                        <span style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          color: '#55EFC4',
                          background: 'rgba(0, 184, 148, 0.2)',
                          padding: '3px 10px',
                          borderRadius: 'var(--radius-full)'
                        }}>
                          <CheckCircle2 size={14} /> Score: {savedScore}/10
                        </span>
                      ) : (
                        <span style={{
                          fontSize: '0.75rem',
                          color: '#55EFC4',
                          fontWeight: 700
                        }}>
                          ⚡ Ready to Start
                        </span>
                      )}
                    </div>

                    {/* Module Title with Icon */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <span style={{ fontSize: '2rem' }}>{mod.icon}</span>
                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: '#fff',
                        margin: 0,
                        lineHeight: 1.25
                      }}>
                        {mod.title}
                      </h3>
                    </div>

                    <p style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.5,
                      marginBottom: '18px'
                    }}>
                      {mod.subtitle}
                    </p>

                    {/* Features included */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      fontSize: '0.72rem',
                      color: 'var(--text-dim)',
                      marginBottom: '20px'
                    }}>
                      <span style={{ background: 'rgba(255,255,255,0.06)', padding: '4px 8px', borderRadius: '6px' }}>
                        📖 Comic Theory
                      </span>
                      <span style={{ background: 'rgba(255,255,255,0.06)', padding: '4px 8px', borderRadius: '6px' }}>
                        🎬 Video Summary
                      </span>
                      <span style={{ background: 'rgba(255,255,255,0.06)', padding: '4px 8px', borderRadius: '6px' }}>
                        ❓ 10-Question MCQ Quiz
                      </span>
                    </div>
                  </div>

                  {/* Launch Module Button */}
                  <button
                    onClick={() => setSelectedModuleId(mod.id)}
                    className={`btn-funky ${isCompleted ? 'btn-mint' : 'btn-primary-purple'}`}
                    style={{ width: '100%', padding: '12px' }}
                  >
                    <span>{isCompleted ? 'Review & Retake Quiz' : 'Launch Module'}</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
