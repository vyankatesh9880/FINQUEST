import React from 'react';
import { Sparkles, Trophy, LogOut, Flame } from 'lucide-react';

export const Navbar = ({ user, onLogout }) => {
  return (
    <header style={{
      position: 'relative',
      zIndex: 10,
      width: '100%',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      background: 'rgba(15, 12, 32, 0.65)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
    }}>
      {/* Brand Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
        <img 
          src="/favicon.svg" 
          alt="FinQuest Logo" 
          style={{
            width: '44px',
            height: '42px',
            objectFit: 'contain',
            filter: 'drop-shadow(0 4px 12px rgba(134, 59, 255, 0.5))',
          }}
        />
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FFA502 60%, #FD79A8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '0.5px'
            }}>
              FinQuest
            </span>
          </div>
          <p style={{ 
            fontSize: '0.78rem', 
            color: 'var(--text-muted)', 
            margin: 0,
            fontWeight: 600,
            letterSpacing: '0.3px',
            textTransform: 'lowercase'
          }}>
            play games \ master finance
          </p>
        </div>
      </div>

      {/* User Stats / Controls if logged in */}
      {user ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Streak pill */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255, 118, 117, 0.15)',
            border: '1px solid rgba(255, 118, 117, 0.3)',
            padding: '6px 12px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: '#FF7675'
          }}>
            <Flame size={18} />
            <span>1 Day Streak!</span>
          </div>

          {/* FinCoins */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255, 165, 2, 0.15)',
            border: '1px solid rgba(255, 165, 2, 0.3)',
            padding: '6px 14px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: '#FFA502'
          }}>
            <span>🪙</span>
            <span>250 FinCoins</span>
          </div>

          {/* Student Profile Info */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255, 255, 255, 0.08)',
            padding: '6px 12px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #00B894 0%, #0984E3 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.85rem',
              fontWeight: 800,
              color: '#fff'
            }}>
              {user.firstName[0]?.toUpperCase() || 'Q'}
            </div>
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', lineHeight: 1 }}>
                {user.firstName}
              </span>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={onLogout}
            title="Switch Student Profile"
            style={{
              background: 'rgba(255, 255, 255, 0.07)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '8px 12px',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8rem',
              fontWeight: 600,
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 118, 117, 0.2)';
              e.currentTarget.style.color = '#FF7675';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.07)';
              e.currentTarget.style.color = 'var(--text-muted)';
            }}
          >
            <LogOut size={15} />
            <span style={{ display: 'inline' }}>Exit</span>
          </button>
        </div>
      ) : null}
    </header>
  );
};
