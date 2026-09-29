import React, { useState } from 'react';
import { 
  Play, 
  BookOpen, 
  HelpCircle, 
  CheckCircle, 
  Sparkles, 
  Award,
  Video,
  Lightbulb,
  ArrowRight,
  Clock,
  Flame
} from 'lucide-react';
import { QuizSection } from './QuizSection';

export const ModuleDetailView = ({ 
  module, 
  nextModule,
  onCompleteModule, 
  onNextModule,
  onFinishTrack,
  onBackToList 
}) => {
  const [activeSubTab, setActiveSubTab] = useState('theory'); // 'theory' | 'video' | 'quiz'

  return (
    <div className="animate-pop-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Module Banner */}
      <div className="glass-card" style={{
        padding: '24px 28px',
        border: `1.5px solid ${module.themeColor}55`,
        background: `linear-gradient(135deg, ${module.themeColor}18 0%, rgba(20, 16, 45, 0.9) 100%)`,
        boxShadow: `0 8px 30px ${module.themeColor}25`
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{
                background: module.themeColor,
                color: '#000',
                fontSize: '0.75rem',
                fontWeight: 800,
                padding: '3px 10px',
                borderRadius: '6px',
                textTransform: 'uppercase'
              }}>
                {module.badge}
              </span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                Foundational Financial Track
              </span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)',
              color: '#fff',
              margin: '0 0 6px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span>{module.icon}</span>
              <span>{module.title}</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0, maxWidth: '650px' }}>
              {module.subtitle}
            </p>
          </div>

          <button
            onClick={onBackToList}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#fff',
              padding: '10px 18px',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'}
          >
            ← View All Modules
          </button>
        </div>

        {/* Inner Module Sub-Navigation (Theory | Video | 10-Q Quiz) */}
        <div style={{
          display: 'flex',
          gap: '10px',
          marginTop: '22px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '16px',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => setActiveSubTab('theory')}
            style={{
              padding: '10px 18px',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              background: activeSubTab === 'theory' ? module.themeColor : 'rgba(255, 255, 255, 0.06)',
              color: activeSubTab === 'theory' ? '#000' : '#fff',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s ease'
            }}
          >
            <BookOpen size={16} />
            <span>1. Comic Theory & Real Life</span>
          </button>

          <button
            onClick={() => setActiveSubTab('video')}
            style={{
              padding: '10px 18px',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              background: activeSubTab === 'video' ? module.themeColor : 'rgba(255, 255, 255, 0.06)',
              color: activeSubTab === 'video' ? '#000' : '#fff',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s ease'
            }}
          >
            <Video size={16} />
            <span>2. Summary Video</span>
          </button>

          <button
            onClick={() => setActiveSubTab('quiz')}
            style={{
              padding: '10px 18px',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              background: activeSubTab === 'quiz' ? module.themeColor : 'rgba(255, 255, 255, 0.06)',
              color: activeSubTab === 'quiz' ? '#000' : '#fff',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s ease'
            }}
          >
            <HelpCircle size={16} />
            <span>3. 10-Question MCQ Quiz (+1 Fire / 0 😢)</span>
          </button>
        </div>
      </div>

      {/* SUB-SECTION 1: COMIC-STYLE THEORY */}
      {activeSubTab === 'theory' && (
        <div className="glass-card" style={{ padding: '32px 24px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <span style={{ fontSize: '1.8rem' }}>🎨</span>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: 800,
                color: '#fff',
                margin: 0
              }}>
                {module.comicIntro.headline}
              </h3>
              <span style={{ fontSize: '0.8rem', color: module.themeColor, fontWeight: 700 }}>
                Comic-Style Financial Storyline
              </span>
            </div>
          </div>

          {/* 3 Illustrated Concept Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '14px',
            marginBottom: '28px'
          }}>
            {module.illustrations.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '18px 16px',
                  borderRadius: 'var(--radius-md)',
                  background: item.bg,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <div style={{ fontSize: '2.4rem' }}>{item.emoji}</div>
                <strong style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.95rem',
                  color: '#fff'
                }}>
                  {item.label}
                </strong>
              </div>
            ))}
          </div>

          {/* Comic Dialogue / Narrative Bubbles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              borderLeft: `4px solid ${module.themeColor}`,
              padding: '16px 20px',
              borderRadius: '0 var(--radius-sm) var(--radius-sm) 0'
            }}>
              <span style={{ fontSize: '0.75rem', color: module.themeColor, textTransform: 'uppercase', fontWeight: 800 }}>
                Scene 1: The Dilemma
              </span>
              <p style={{ color: '#fff', fontSize: '0.98rem', lineHeight: 1.6, margin: '6px 0 0 0' }}>
                {module.comicIntro.story}
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 118, 117, 0.1)',
              borderLeft: '4px solid #FF7675',
              padding: '16px 20px',
              borderRadius: '0 var(--radius-sm) var(--radius-sm) 0'
            }}>
              <span style={{ fontSize: '0.75rem', color: '#FF7675', textTransform: 'uppercase', fontWeight: 800 }}>
                Scene 2: The Trap
              </span>
              <p style={{ color: '#fff', fontSize: '0.98rem', lineHeight: 1.6, margin: '6px 0 0 0' }}>
                {module.comicIntro.painPoint}
              </p>
            </div>

            <div style={{
              background: 'rgba(0, 184, 148, 0.12)',
              borderLeft: '4px solid #00B894',
              padding: '16px 20px',
              borderRadius: '0 var(--radius-sm) var(--radius-sm) 0'
            }}>
              <span style={{ fontSize: '0.75rem', color: '#55EFC4', textTransform: 'uppercase', fontWeight: 800 }}>
                Scene 3: The Money Ninja Breakthrough
              </span>
              <p style={{ color: '#fff', fontSize: '0.98rem', lineHeight: 1.6, margin: '6px 0 0 0' }}>
                {module.comicIntro.breakthrough}
              </p>
            </div>

            {/* Relatable Real-Life Case Box */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 165, 2, 0.15) 0%, rgba(20, 16, 45, 0.8) 100%)',
              border: '1px solid rgba(255, 165, 2, 0.3)',
              padding: '20px',
              borderRadius: 'var(--radius-md)',
              marginTop: '8px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Lightbulb size={20} color="#FFA502" />
                <strong style={{ fontFamily: 'var(--font-display)', color: '#FFA502', fontSize: '1.05rem' }}>
                  Real-Life Student Example
                </strong>
              </div>
              <p style={{ color: '#fff', fontSize: '0.92rem', lineHeight: 1.55, margin: 0 }}>
                {module.comicIntro.realLifeExample}
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '28px', flexWrap: 'wrap', gap: '12px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
              Completed reading? Watch the 3-minute summary video or jump straight to the quiz!
            </span>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => setActiveSubTab('video')}
                className="btn-funky"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  padding: '10px 18px',
                  fontSize: '0.9rem'
                }}
              >
                <span>Watch Video</span>
                <Video size={16} />
              </button>
              <button
                onClick={() => setActiveSubTab('quiz')}
                className="btn-funky btn-yellow-funky"
                style={{ padding: '10px 20px', fontSize: '0.9rem' }}
              >
                <span>Take 10-Q Quiz</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SUB-SECTION 2: SUMMARY VIDEO PLACEHOLDER */}
      {activeSubTab === 'video' && (
        <div className="glass-card" style={{ padding: '32px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '14px' }}>
              <Video size={22} color={module.themeColor} />
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: 800,
                color: '#fff',
                margin: 0
              }}>
                {module.videoInfo.title}
              </h3>
            </div>

            {/* Video Player Frame Placeholder */}
            <div style={{
              width: '100%',
              aspectRatio: '16/9',
              borderRadius: 'var(--radius-lg)',
              background: 'radial-gradient(circle, rgba(108, 92, 231, 0.4) 0%, rgba(15, 12, 32, 0.95) 100%)',
              border: `2px dashed ${module.themeColor}77`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              position: 'relative',
              boxShadow: 'var(--shadow-lg)',
              margin: '0 auto 20px auto',
              overflow: 'hidden'
            }}>
              {/* Animated Play Button */}
              <div 
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FFA502 0%, #FD79A8 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 30px rgba(255, 165, 2, 0.6)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Play size={36} fill="#fff" color="#fff" style={{ marginLeft: '4px' }} />
              </div>

              <div>
                <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: '#fff', display: 'block' }}>
                  Interactive Video Lesson Ready
                </strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Duration: {module.videoInfo.duration} • High-Energy Visual Explainer
                </span>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '24px' }}>
              {module.videoInfo.summary}
            </p>

            <button
              onClick={() => setActiveSubTab('quiz')}
              className="btn-funky btn-yellow-funky"
              style={{ padding: '12px 28px', fontSize: '1rem' }}
            >
              <span>Ready for the 10-Question Challenge!</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* SUB-SECTION 3: 10-QUESTION MCQ QUIZ */}
      {activeSubTab === 'quiz' && (
        <QuizSection 
          questions={module.quiz} 
          moduleTitle={module.title}
          moduleTheme={module.themeColor}
          onCompleteQuiz={(finalScore) => {
            if (onCompleteModule) {
              onCompleteModule(module.id, finalScore);
            }
          }}
          onNextModule={nextModule ? () => onNextModule(nextModule.id) : null}
          onFinishTrack={onFinishTrack}
        />
      )}
    </div>
  );
};
