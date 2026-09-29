import React from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  Sparkles, 
  CheckCircle2, 
  RotateCcw, 
  Star, 
  ArrowRight, 
  BookOpen, 
  Gamepad2,
  Award,
  Crown
} from 'lucide-react';

export const CompletionCelebration = ({ categoryName, user, totalScore, onRestartTrack, onGoToGames }) => {
  React.useEffect(() => {
    // Grand celebratory fireworks
    const duration = 3.5 * 1000;
    const animationEnd = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 65,
        origin: { x: 0, y: 0.65 },
        colors: ['#FFA502', '#00B894', '#6C5CE7', '#FD79A8']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 65,
        origin: { x: 1, y: 0.65 },
        colors: ['#FFA502', '#00B894', '#6C5CE7', '#FD79A8']
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="glass-card animate-pop-in" style={{
      maxWidth: '840px',
      margin: '0 auto',
      padding: '48px 32px',
      textAlign: 'center',
      border: '2px solid rgba(255, 165, 2, 0.5)',
      background: 'linear-gradient(135deg, rgba(20, 16, 45, 0.95) 0%, rgba(15, 12, 32, 0.95) 100%)',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7), var(--shadow-glow-yellow)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative ambient top glow */}
      <div style={{
        position: 'absolute',
        top: '-80px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '320px',
        height: '180px',
        background: 'radial-gradient(circle, rgba(255, 165, 2, 0.4) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none'
      }} />

      {/* Gold Crown Trophy Badge */}
      <div style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        margin: '0 auto 20px auto',
        background: 'linear-gradient(135deg, #FFA502 0%, #FDCB6E 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 40px rgba(255, 165, 2, 0.7)',
        position: 'relative'
      }}>
        <Crown size={52} color="#1a1530" />
      </div>

      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        background: 'rgba(255, 165, 2, 0.2)',
        border: '1px solid rgba(255, 165, 2, 0.4)',
        padding: '6px 16px',
        borderRadius: 'var(--radius-full)',
        marginBottom: '16px'
      }}>
        <Sparkles size={16} color="#FFA502" />
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.85rem',
          fontWeight: 800,
          color: '#FFA502',
          letterSpacing: '0.5px'
        }}>
          OFFICIAL FINQUEST DIPLOMA
        </span>
      </div>

      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem, 4vw, 2.8rem)',
        fontWeight: 900,
        color: '#fff',
        margin: '0 0 10px 0',
        lineHeight: 1.15
      }}>
        Congratulations, {user?.firstName || 'Adventurer'}! 🎓🎉
      </h1>

      <p style={{
        color: 'var(--text-muted)',
        fontSize: '1.1rem',
        maxWidth: '580px',
        margin: '0 auto 24px auto',
        lineHeight: 1.6
      }}>
        You have successfully mastered all <strong style={{ color: '#fff' }}>5 Sequential Modules</strong> of the{' '}
        <strong style={{ color: '#55EFC4' }}>{categoryName}</strong>! You have proven genuine financial literacy mastery.
      </p>

      {/* Achievement stats showcase */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '16px',
        maxWidth: '640px',
        margin: '0 auto 32px auto'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '16px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800 }}>
            Curriculum Status
          </span>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.6rem',
            fontWeight: 800,
            color: '#55EFC4',
            marginTop: '4px'
          }}>
            5 / 5 Unlocked
          </div>
          <span style={{ fontSize: '0.75rem', color: '#00B894', fontWeight: 700 }}>100% Complete</span>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '16px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800 }}>
            Mastery Score
          </span>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.6rem',
            fontWeight: 800,
            color: '#FFA502',
            marginTop: '4px'
          }}>
            {totalScore} / 50 pts
          </div>
          <span style={{ fontSize: '0.75rem', color: '#FDCB6E', fontWeight: 700 }}>Financial Wizard</span>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '16px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800 }}>
            Title Unlocked
          </span>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.4rem',
            fontWeight: 800,
            color: '#FD79A8',
            marginTop: '4px'
          }}>
            Money Ninja 🥷
          </div>
          <span style={{ fontSize: '0.75rem', color: '#FD79A8', fontWeight: 700 }}>Tier 5 Achieved</span>
        </div>
      </div>

      {/* Action buttons */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '14px',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={onRestartTrack}
          className="btn-funky btn-yellow-funky"
          style={{ padding: '14px 28px', fontSize: '1rem' }}
        >
          <BookOpen size={18} />
          <span>Review Learning Track</span>
        </button>

        <button
          onClick={onGoToGames}
          className="btn-funky"
          style={{
            padding: '14px 28px',
            fontSize: '1rem',
            background: 'linear-gradient(135deg, #FD79A8 0%, #FF7675 100%)',
            color: '#fff'
          }}
        >
          <Gamepad2 size={18} />
          <span>Explore Games Arena</span>
        </button>
      </div>
    </div>
  );
};
