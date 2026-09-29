import React, { useState } from 'react';
import { User, X, Mail, GraduationCap, Sparkles } from 'lucide-react';

export const Navbar = ({ user, onLogout }) => {
  const [showProfileModal, setShowProfileModal] = useState(false);

  // Friendly label for grade category
  const getCategoryLabel = (cat) => {
    if (cat === 'grade5-7') return '5th to 7th Grade';
    if (cat === 'grade8-10') return '8th to 10th Grade';
    return cat || 'Student';
  };

  return (
    <>
      <header style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        padding: '14px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(15, 12, 32, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}>
        {/* Brand Logo & Heading */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer' }}>
          <img 
            src="/finquest-logo.png" 
            alt="FinQuest Logo" 
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              objectFit: 'contain',
              boxShadow: '0 4px 15px rgba(255, 165, 2, 0.35)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              background: '#fff'
            }}
          />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.55rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FFA502 60%, #FD79A8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.5px',
                lineHeight: 1.1
              }}>
                FinQuest
              </span>
            </div>
            <p style={{ 
              fontSize: '0.78rem', 
              color: 'var(--text-muted)', 
              margin: '3px 0 0 0',
              fontWeight: 600,
              letterSpacing: '0.4px',
            }}>
              Play Games | Master Finance
            </p>
          </div>
        </div>

        {/* User Account Button (kept as requested; opens profile details modal) */}
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => setShowProfileModal(true)}
              title="Click to view student profile"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '7px 16px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                color: '#fff',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.14)';
                e.currentTarget.style.borderColor = '#FFA502';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
              }}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FFA502 0%, #FD79A8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.9rem',
                fontWeight: 800,
                color: '#1a1530',
                boxShadow: '0 2px 8px rgba(255, 165, 2, 0.4)'
              }}>
                {user.firstName[0]?.toUpperCase() || 'Q'}
              </div>
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 700, display: 'block', lineHeight: 1.1 }}>
                  {user.firstName} {user.surname}
                </span>
                <span style={{ fontSize: '0.7rem', color: '#55EFC4', fontWeight: 600 }}>
                  Account Info
                </span>
              </div>
            </button>
          </div>
        ) : null}
      </header>

      {/* Student Personal Information Modal */}
      {showProfileModal && user && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 100,
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px'
        }}>
          <div className="glass-card animate-pop-in" style={{
            maxWidth: '460px',
            width: '100%',
            padding: '28px 24px',
            border: '1.5px solid rgba(255, 165, 2, 0.4)',
            background: 'linear-gradient(135deg, rgba(20, 16, 45, 0.96) 0%, rgba(15, 12, 32, 0.98) 100%)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), var(--shadow-glow-yellow)',
            position: 'relative'
          }}>
            {/* Close Button */}
            <button
              onClick={() => setShowProfileModal(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                color: '#fff',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FFA502 0%, #FD79A8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 900,
                color: '#1a1530',
                boxShadow: '0 4px 16px rgba(255, 165, 2, 0.5)'
              }}>
                {user.firstName[0]?.toUpperCase() || 'Q'}
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: '#fff',
                  margin: 0
                }}>
                  Student Profile
                </h3>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Verified FinQuest Account Details
                </span>
              </div>
            </div>

            {/* Profile Fields List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              {/* Full Name */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '12px 16px',
                borderRadius: 'var(--radius-sm)'
              }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800, display: 'block', marginBottom: '3px' }}>
                  Student Name
                </span>
                <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>
                  {user.firstName} {user.surname}
                </span>
              </div>

              {/* Email Address */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '12px 16px',
                borderRadius: 'var(--radius-sm)'
              }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800, display: 'block', marginBottom: '3px' }}>
                  Registered Email
                </span>
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#A29BFE' }}>
                  {user.email}
                </span>
              </div>

              {/* Target Grade Category */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '12px 16px',
                borderRadius: 'var(--radius-sm)'
              }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800, display: 'block', marginBottom: '3px' }}>
                  Target Grade Category
                </span>
                <span style={{ fontSize: '1rem', fontWeight: 800, color: '#55EFC4' }}>
                  {getCategoryLabel(user.gradeCategory)}
                </span>
              </div>
            </div>

            {/* Sign Out Option inside Modal */}
            <div>
              <button
                onClick={() => {
                  setShowProfileModal(false);
                  if (onLogout) onLogout();
                }}
                className="btn-funky"
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  background: 'rgba(255, 118, 117, 0.18)',
                  border: '1px solid rgba(255, 118, 117, 0.4)',
                  color: '#FF7675',
                  cursor: 'pointer'
                }}
              >
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
