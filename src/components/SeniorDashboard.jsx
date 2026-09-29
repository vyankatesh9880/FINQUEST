import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  BookOpen, 
  Gamepad2, 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  Trophy, 
  ArrowRight,
  RotateCcw
} from 'lucide-react';
import { SENIOR_MODULES } from '../data/seniorModulesData';
import { ModuleDetailView } from './ModuleDetailView';
import { CompletionCelebration } from './CompletionCelebration';

export const SeniorDashboard = ({ user }) => {
  // Top Navbar Center Tab: "Learning" | "Games"
  const [topTab, setTopTab] = useState('learning');
  
  // Selected module (null means showing module list track)
  const [selectedModuleId, setSelectedModuleId] = useState(null);

  // Show track completion screen
  const [showCompletion, setShowCompletion] = useState(false);
  
  // Strict progression state:
  // Default: Module 1 unlocked and not completed yet. Modules 2..5 locked.
  const [moduleProgress, setModuleProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(`finquest_senior_prog_${user?.firstName || 'default'}`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Calculate unlocked status for each module:
  // Module 1 is ALWAYS unlocked.
  // Module N is unlocked ONLY IF Module N-1 is completed.
  const isModuleUnlocked = (moduleId) => {
    if (moduleId === 1) return true;
    const prevModId = moduleId - 1;
    return !!moduleProgress[prevModId]?.completed;
  };

  const handleCompleteModule = (modId, finalScore) => {
    setModuleProgress(prev => {
      const updated = {
        ...prev,
        [modId]: { 
          score: Math.max(finalScore, prev[modId]?.score || 0), 
          completed: true 
        }
      };
      try {
        localStorage.setItem(`finquest_senior_prog_${user?.firstName || 'default'}`, JSON.stringify(updated));
      } catch (e) {
        console.warn(e);
      }
      return updated;
    });
  };

  // Transition to next sequential module
  const handleNextSequentialModule = (nextModId) => {
    setSelectedModuleId(nextModId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinishTrack = () => {
    setSelectedModuleId(null);
    setShowCompletion(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetProgress = () => {
    if (window.confirm("Are you sure you want to reset your learning track progress back to Module 1?")) {
      setModuleProgress({});
      try {
        localStorage.removeItem(`finquest_senior_prog_${user?.firstName || 'default'}`);
      } catch (e) {
        console.warn(e);
      }
      setShowCompletion(false);
      setSelectedModuleId(null);
    }
  };

  const completedCount = SENIOR_MODULES.filter(m => moduleProgress[m.id]?.completed).length;
  const progressPercent = Math.round((completedCount / SENIOR_MODULES.length) * 100);
  const totalScore = SENIOR_MODULES.reduce((sum, m) => sum + (moduleProgress[m.id]?.score || 0), 0);

  const selectedModule = SENIOR_MODULES.find(m => m.id === selectedModuleId);
  const nextModule = selectedModule ? SENIOR_MODULES.find(m => m.id === selectedModule.id + 1) : null;

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '16px 16px 60px 16px',
      position: 'relative',
      zIndex: 1,
    }}>
      {/* 1. TOP NAVBAR: Horizontal Navigation Bar Right At Top Center */}
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
          background: 'rgba(20, 16, 45, 0.88)',
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
          </button>
        </div>
      </div>

      {/* 2. MAIN VIEW SWITCHER */}
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
            <span>Back to Learning Track</span>
          </button>
        </div>
      ) : showCompletion ? (
        /* 4. CELEBRATORY COMPLETION SCREEN (Triggered after Module 5) */
        <CompletionCelebration
          categoryName="8th to 10th Grade: Market Masters"
          user={user}
          totalScore={totalScore}
          onRestartTrack={() => {
            setShowCompletion(false);
            setSelectedModuleId(null);
          }}
          onGoToGames={() => {
            setShowCompletion(false);
            setTopTab('games');
          }}
        />
      ) : selectedModule ? (
        /* 3. DETAIL VIEW FOR SELECTED MODULE (Theory, Video, 10-Q Quiz with Next Button) */
        <ModuleDetailView
          module={selectedModule}
          nextModule={nextModule}
          onCompleteModule={handleCompleteModule}
          onNextModule={handleNextSequentialModule}
          onFinishTrack={handleFinishTrack}
          onBackToList={() => setSelectedModuleId(null)}
        />
      ) : (
        /* 2. LEARNING TRACK WITH PROGRESS COUNTER */
        <div className="animate-pop-in">
          {/* Progress Tracker Card at Top */}
          <div className="glass-card" style={{
            padding: '24px 28px',
            marginBottom: '28px',
            background: 'linear-gradient(135deg, rgba(0, 184, 148, 0.16) 0%, rgba(9, 132, 227, 0.15) 50%, rgba(108, 92, 231, 0.2) 100%)',
            border: '1px solid rgba(85, 239, 196, 0.35)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ maxWidth: '680px' }}>
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
                  margin: '0 0 8px 0',
                  color: '#fff'
                }}>
                  {user?.firstName ? `${user.firstName}'s Financial Quest` : "Master's Financial Quest"} 📈🚀
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>
                  Start your financial adventure here! Progress sequentially from Module one to Module five to build a solid foundation in finance
                </p>
              </div>

              {/* Reduced Size Track Progress Counter Badge */}
              <div style={{
                background: 'rgba(20, 16, 45, 0.85)',
                border: '1px solid rgba(85, 239, 196, 0.35)',
                borderRadius: 'var(--radius-sm)',
                padding: '6px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
              }}>
                <Trophy size={16} color="#55EFC4" />
                <div>
                  <span style={{ fontSize: '0.62rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800, display: 'block', lineHeight: 1 }}>
                    Track Progress
                  </span>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.92rem',
                    fontWeight: 800,
                    color: '#55EFC4',
                    lineHeight: 1.1,
                    marginTop: '2px'
                  }}>
                    {completedCount}/5 Modules Completed
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Module Grid: 5 Advanced Modules All Unlocked Initially */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '24px'
          }}>
            {SENIOR_MODULES.map((mod) => {
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
                      : `1.5px solid ${mod.themeColor}55`,
                    background: isCompleted
                      ? 'linear-gradient(135deg, rgba(0, 184, 148, 0.12) 0%, rgba(20, 16, 45, 0.85) 100%)'
                      : 'rgba(20, 16, 45, 0.75)',
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

                      {/* Status Badges */}
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
                          <CheckCircle2 size={14} /> Completed ({savedScore}/10)
                        </span>
                      ) : (
                        <span style={{
                          fontSize: '0.75rem',
                          color: '#55EFC4',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          ⚡ Ready to Start
                        </span>
                      )}
                    </div>

                    {/* Module Title with Icon */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <span style={{ fontSize: '2rem' }}>
                        {mod.icon}
                      </span>
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
                        📖 Comic Story
                      </span>
                      <span style={{ background: 'rgba(255,255,255,0.06)', padding: '4px 8px', borderRadius: '6px' }}>
                        🎬 Summary Video
                      </span>
                      <span style={{ background: 'rgba(255,255,255,0.06)', padding: '4px 8px', borderRadius: '6px' }}>
                        ❓ 10-Q MCQ Quiz
                      </span>
                    </div>
                  </div>

                  {/* Launch Button (Unlocked for all modules) */}
                  <button
                    onClick={() => setSelectedModuleId(mod.id)}
                    className={`btn-funky ${isCompleted ? 'btn-mint' : 'btn-primary-purple'}`}
                    style={{ width: '100%', padding: '12px' }}
                  >
                    <span>{isCompleted ? 'Review & Retake Quiz' : 'Start Module'}</span>
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

export default SeniorDashboard;

