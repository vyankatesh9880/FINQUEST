import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Rocket, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  Award, 
  Gamepad2, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

export const Onboarding = ({ onComplete }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    gradeCategory: 'grade5-7', // default selected
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) {
      errs.firstName = 'First name is required!';
    }
    if (!formData.surname.trim()) {
      errs.surname = 'Surname is required!';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required!';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format (e.g. alex@school.edu)';
    }
    if (!formData.gradeCategory) {
      errs.gradeCategory = 'Please choose your grade arena!';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Blast celebratory confetti on successful onboarding!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#6C5CE7', '#FFA502', '#00B894', '#FD79A8', '#74B9FF'],
    });

    setTimeout(() => {
      onComplete(formData);
    }, 700);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div style={{
      position: 'relative',
      zIndex: 1,
      minHeight: 'calc(100vh - 80px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px 16px 60px 16px',
    }}>
      <div style={{
        maxWidth: '960px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '32px',
        alignItems: 'center',
      }}>

        {/* Left Column: Funky Brand Hero & Value Pitch */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.3rem, 4.3vw, 3.2rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: '-0.5px',
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #FFA502 0%, #FD79A8 50%, #A29BFE 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 4px 15px rgba(255, 165, 2, 0.3))'
            }}>
              FinQuest : Where Gaming Meets Financial Learning
            </span>
          </h1>

          <p style={{
            fontSize: '1.05rem',
            lineHeight: 1.6,
            color: 'var(--text-muted)',
            maxWidth: '460px'
          }}>
            Forget boring spreadsheets and textbook lectures. Unlock exciting rewards, master financial quests, and build essential life skills early.
          </p>

          {/* Gamified perk badges */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '12px 16px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div style={{
                background: 'rgba(255, 165, 2, 0.2)',
                color: '#FFA502',
                padding: '8px',
                borderRadius: '10px'
              }}>
                <Gamepad2 size={20} />
              </div>
              <div>
                <strong style={{ fontSize: '0.95rem', display: 'block', color: '#fff' }}>
                  Interactive Games & Challenges
                </strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                  Make smart money decision through fun, interactive games
                </span>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '12px 16px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div style={{
                background: 'rgba(0, 184, 148, 0.2)',
                color: '#55EFC4',
                padding: '8px',
                borderRadius: '10px'
              }}>
                <Award size={20} />
              </div>
              <div>
                <strong style={{ fontSize: '0.95rem', display: 'block', color: '#fff' }}>
                  Video & Theory Lessons
                </strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                  Explore structured video lessons designed for your specific grade level
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Gamified Glassmorphic Form Card */}
        <div className="glass-card animate-pop-in" style={{
          padding: 'clamp(24px, 4vw, 36px)',
          border: '1px solid rgba(162, 155, 254, 0.25)',
          boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5), var(--shadow-glow-purple)',
        }}>
          {/* Card Header */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                🚀 Create Adventurer Profile
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Fill in your student badge details to embark on your financial adventure!
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }} noValidate>
            {/* Name Fields Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '14px',
            }}>
              {/* First Name */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                  First Name <span style={{ color: '#FF7675' }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alex"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.07)',
                    border: errors.firstName ? '2px solid #FF7675' : '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '12px 14px',
                    color: '#fff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'all 0.2s',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#6C5CE7'}
                  onBlur={(e) => !errors.firstName && (e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)')}
                />
                {errors.firstName && (
                  <span style={{ color: '#FF7675', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <AlertCircle size={12} /> {errors.firstName}
                  </span>
                )}
              </div>

              {/* Surname */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                  Surname <span style={{ color: '#FF7675' }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Vance"
                  value={formData.surname}
                  onChange={(e) => handleInputChange('surname', e.target.value)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.07)',
                    border: errors.surname ? '2px solid #FF7675' : '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '12px 14px',
                    color: '#fff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'all 0.2s',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#6C5CE7'}
                  onBlur={(e) => !errors.surname && (e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)')}
                />
                {errors.surname && (
                  <span style={{ color: '#FF7675', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <AlertCircle size={12} /> {errors.surname}
                  </span>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                Email Address <span style={{ color: '#FF7675' }}>*</span>
              </label>
              <input
                type="email"
                placeholder="alex.vance@school.edu"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                style={{
                  background: 'rgba(255, 255, 255, 0.07)',
                  border: errors.email ? '2px solid #FF7675' : '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '12px 14px',
                  color: '#fff',
                  fontSize: '0.95rem',
                  outline: 'none',
                  transition: 'all 0.2s',
                }}
                onFocus={(e) => e.target.style.borderColor = '#6C5CE7'}
                onBlur={(e) => !errors.email && (e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)')}
              />
              {errors.email && (
                <span style={{ color: '#FF7675', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <AlertCircle size={12} /> {errors.email}
                </span>
              )}
            </div>

            {/* Target Grade Category Selector */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '6px' }}>
              <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>🎯 Select Your Grade Category</span>
              </label>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '12px',
              }}>
                {/* 5th to 7th Grade Option */}
                <div
                  onClick={() => handleInputChange('gradeCategory', 'grade5-7')}
                  style={{
                    cursor: 'pointer',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px 14px',
                    border: formData.gradeCategory === 'grade5-7' 
                      ? '2px solid #FFA502' 
                      : '1px solid rgba(255, 255, 255, 0.12)',
                    background: formData.gradeCategory === 'grade5-7'
                      ? 'linear-gradient(135deg, rgba(255, 165, 2, 0.18) 0%, rgba(253, 203, 110, 0.1) 100%)'
                      : 'rgba(255, 255, 255, 0.04)',
                    boxShadow: formData.gradeCategory === 'grade5-7' ? '0 0 20px rgba(255, 165, 2, 0.35)' : 'none',
                    transition: 'all 0.25s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '1.8rem' }}>🐣</span>
                    {formData.gradeCategory === 'grade5-7' ? (
                      <CheckCircle2 size={18} color="#FFA502" />
                    ) : (
                      <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)' }} />
                    )}
                  </div>
                  <strong style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.05rem',
                    color: formData.gradeCategory === 'grade5-7' ? '#FFA502' : '#fff'
                  }}>
                    5th to 7th Grade
                  </strong>
                </div>

                {/* 8th to 10th Grade Option */}
                <div
                  onClick={() => handleInputChange('gradeCategory', 'grade8-10')}
                  style={{
                    cursor: 'pointer',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px 14px',
                    border: formData.gradeCategory === 'grade8-10' 
                      ? '2px solid #00B894' 
                      : '1px solid rgba(255, 255, 255, 0.12)',
                    background: formData.gradeCategory === 'grade8-10'
                      ? 'linear-gradient(135deg, rgba(0, 184, 148, 0.18) 0%, rgba(85, 239, 196, 0.1) 100%)'
                      : 'rgba(255, 255, 255, 0.04)',
                    boxShadow: formData.gradeCategory === 'grade8-10' ? '0 0 20px rgba(0, 184, 148, 0.35)' : 'none',
                    transition: 'all 0.25s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '1.8rem' }}>⚡</span>
                    {formData.gradeCategory === 'grade8-10' ? (
                      <CheckCircle2 size={18} color="#00B894" />
                    ) : (
                      <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)' }} />
                    )}
                  </div>
                  <strong style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.05rem',
                    color: formData.gradeCategory === 'grade8-10' ? '#55EFC4' : '#fff'
                  }}>
                    8th to 10th Grade
                  </strong>
                </div>
              </div>
            </div>

            {/* Launch Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-funky ${formData.gradeCategory === 'grade5-7' ? 'btn-yellow-funky' : 'btn-mint'}`}
              style={{
                width: '100%',
                marginTop: '10px',
                padding: '16px',
                fontSize: '1.1rem',
              }}
            >
              {isSubmitting ? (
                <>Loading Quest Deck...</>
              ) : (
                <>
                  <span>Enter My Arena</span>
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
