import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  ArrowLeft,
  RotateCcw, 
  Trophy, 
  Sparkles,
  Zap
} from 'lucide-react';

export const QuizSection = ({ 
  questions, 
  moduleTitle, 
  moduleTheme = '#6C5CE7', 
  onCompleteQuiz,
  onNextModule,
  onFinishTrack
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  // Map of question index -> { selectedOption: number, isCorrect: boolean }
  const [userAnswers, setUserAnswers] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ = questions[currentIdx];
  const currentAnswer = userAnswers[currentIdx];
  const hasAnswered = currentAnswer !== undefined;
  const selectedOption = currentAnswer?.selectedOption;
  const isCurrentCorrect = hasAnswered && currentAnswer.isCorrect;
  const isCurrentWrong = hasAnswered && !currentAnswer.isCorrect;

  // Calculate live score
  const score = Object.values(userAnswers).filter(a => a.isCorrect).length;

  // Fire celebratory burst effect for correct answers
  const triggerCelebration = () => {
    confetti({
      particleCount: 60,
      angle: 60,
      spread: 55,
      origin: { x: 0.1, y: 0.7 },
      colors: ['#00B894', '#55EFC4', '#FFA502', '#FD79A8']
    });
    confetti({
      particleCount: 60,
      angle: 120,
      spread: 55,
      origin: { x: 0.9, y: 0.7 },
      colors: ['#6C5CE7', '#A29BFE', '#FFA502', '#00B894']
    });
  };

  const handleSelectOption = (idx) => {
    if (hasAnswered) return; // Freeze once chosen

    const isCorrect = idx === currentQ.correctIndex;
    setUserAnswers(prev => ({
      ...prev,
      [currentIdx]: {
        selectedOption: idx,
        isCorrect
      }
    }));

    if (isCorrect) {
      triggerCelebration();
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setQuizFinished(true);
      const finalScore = Object.values(userAnswers).filter(a => a.isCorrect).length;
      if (finalScore >= 7) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#FFA502', '#00B894', '#6C5CE7', '#FD79A8']
        });
      }
      if (onCompleteQuiz) {
        onCompleteQuiz(finalScore);
      }
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setUserAnswers({});
    setQuizFinished(false);
  };

  // Render Finished Summary Screen
  if (quizFinished) {
    const passed = score >= 7;
    return (
      <div className="glass-card animate-pop-in" style={{
        padding: '36px 24px',
        textAlign: 'center',
        border: passed ? '2px solid rgba(0, 184, 148, 0.4)' : '2px solid rgba(255, 165, 2, 0.4)',
        background: 'linear-gradient(135deg, rgba(20, 16, 45, 0.95) 0%, rgba(15, 12, 32, 0.95) 100%)',
        marginTop: '24px'
      }}>
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          margin: '0 auto 16px auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.5rem',
          background: passed ? 'rgba(0, 184, 148, 0.2)' : 'rgba(255, 165, 2, 0.2)',
          border: passed ? '2px solid #00B894' : '2px solid #FFA502',
          boxShadow: passed ? 'var(--shadow-glow-green)' : 'var(--shadow-glow-yellow)'
        }}>
          {passed ? '🏆' : '🌱'}
        </div>

        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.8rem',
          color: '#fff',
          margin: '0 0 6px 0'
        }}>
          {passed ? 'Quest Mastery Achieved!' : 'Great Effort, Adventurer!'}
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: '0 0 20px 0' }}>
          {moduleTitle} • Assessment Complete
        </p>

        {/* Big Score Box */}
        <div style={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '16px 36px',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          marginBottom: '24px'
        }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>
            Your Final Score
          </span>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '3.2rem',
            fontWeight: 900,
            color: passed ? '#55EFC4' : '#FFA502',
            lineHeight: 1.1
          }}>
            {score} <span style={{ fontSize: '1.4rem', color: '#fff' }}>/ {questions.length}</span>
          </div>
          <span style={{ fontSize: '0.85rem', color: passed ? '#00B894' : 'var(--cyber-yellow)', fontWeight: 700, marginTop: '4px' }}>
            {passed ? '⭐ Outstanding Financial IQ! ⭐' : 'Review the concepts and level up to 10/10!'}
          </span>
        </div>

        {/* Action Buttons: Next Module or Complete Track */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '14px',
          flexWrap: 'wrap'
        }}>
          {onNextModule ? (
            <button
              onClick={onNextModule}
              className="btn-funky btn-mint"
              style={{ padding: '14px 32px', fontSize: '1.05rem', minWidth: '220px' }}
            >
              <span>Continue to Next Module</span>
              <ArrowRight size={20} />
            </button>
          ) : (
            <button
              onClick={onFinishTrack}
              className="btn-funky btn-mint"
              style={{ padding: '14px 32px', fontSize: '1.05rem', minWidth: '220px' }}
            >
              <span>🎓 View Track Completion Ceremony</span>
              <Sparkles size={20} />
            </button>
          )}

          <button
            onClick={handleRestart}
            className="btn-funky"
            style={{
              padding: '12px 24px',
              fontSize: '0.95rem',
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
          >
            <RotateCcw size={16} />
            <span>Retake 10-Q Quiz</span>
          </button>
        </div>
      </div>
    );
  }

  // Split explanation into 2 clean lines
  const explanationLines = currentQ.explanation ? currentQ.explanation.split('\n') : [];

  return (
    <div className="glass-card" style={{
      padding: '28px 24px',
      marginTop: '28px',
      border: '1px solid rgba(255, 255, 255, 0.14)',
      background: 'linear-gradient(135deg, rgba(20, 16, 45, 0.85) 0%, rgba(15, 12, 32, 0.85) 100%)',
      position: 'relative'
    }}>
      {/* Quiz Header Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        marginBottom: '20px',
        paddingBottom: '16px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            background: 'rgba(255, 165, 2, 0.2)',
            color: '#FFA502',
            padding: '6px',
            borderRadius: '8px',
            display: 'flex'
          }}>
            <Zap size={18} />
          </div>
          <div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem',
              fontWeight: 800,
              color: '#fff',
              display: 'block'
            }}>
              Interactive Mastery Challenge
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Question {currentIdx + 1} of {questions.length} • 4 Options
            </span>
          </div>
        </div>

        {/* Live Score Counter Badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(0, 184, 148, 0.15)',
          border: '1px solid rgba(0, 184, 148, 0.3)',
          padding: '6px 14px',
          borderRadius: 'var(--radius-full)',
          fontFamily: 'var(--font-display)',
          fontSize: '0.9rem',
          fontWeight: 800,
          color: '#55EFC4'
        }}>
          <Trophy size={16} color="#FFA502" />
          <span>Score: {score} / {questions.length}</span>
        </div>
      </div>

      {/* Progress Track Dots (Clickable Jump Navigation) */}
      <div style={{
        display: 'flex',
        gap: '6px',
        marginBottom: '24px',
        overflowX: 'auto',
        paddingBottom: '4px'
      }}>
        {questions.map((q, idx) => {
          let dotColor = 'rgba(255, 255, 255, 0.15)';
          const ans = userAnswers[idx];
          if (ans) {
            dotColor = ans.isCorrect ? '#00B894' : '#FF7675';
          } else if (idx === currentIdx) {
            dotColor = '#FFA502';
          }
          return (
            <button
              key={q.id}
              onClick={() => setCurrentIdx(idx)}
              title={`Jump to Question ${idx + 1}`}
              style={{
                flex: 1,
                minWidth: '24px',
                height: '8px',
                borderRadius: 'var(--radius-full)',
                background: dotColor,
                border: idx === currentIdx ? '1.5px solid #fff' : 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0
              }}
            />
          );
        })}
      </div>

      {/* Question Card */}
      <div style={{ marginBottom: '22px' }}>
        <h4 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.2rem',
          fontWeight: 700,
          lineHeight: 1.4,
          color: '#fff',
          margin: '0 0 16px 0'
        }}>
          {currentIdx + 1}. {currentQ.question}
        </h4>

        {/* 4 Options Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '12px'
        }}>
          {currentQ.options.map((optionText, optIdx) => {
            const isSelected = selectedOption === optIdx;
            const isCorrectOption = optIdx === currentQ.correctIndex;

            let btnBg = 'rgba(255, 255, 255, 0.05)';
            let btnBorder = '1px solid rgba(255, 255, 255, 0.12)';
            let textColor = '#fff';

            if (hasAnswered) {
              if (isCorrectOption) {
                btnBg = 'rgba(0, 184, 148, 0.22)';
                btnBorder = '2px solid #00B894';
                textColor = '#55EFC4';
              } else if (isSelected) {
                btnBg = 'rgba(255, 118, 117, 0.22)';
                btnBorder = '2px solid #FF7675';
                textColor = '#FF7675';
              } else {
                btnBg = 'rgba(255, 255, 255, 0.02)';
                textColor = 'var(--text-dim)';
              }
            }

            return (
              <button
                key={optIdx}
                onClick={() => handleSelectOption(optIdx)}
                disabled={hasAnswered}
                style={{
                  textAlign: 'left',
                  padding: '14px 18px',
                  borderRadius: 'var(--radius-sm)',
                  background: btnBg,
                  border: btnBorder,
                  color: textColor,
                  fontSize: '0.95rem',
                  fontFamily: 'var(--font-body)',
                  fontWeight: isSelected || (hasAnswered && isCorrectOption) ? 700 : 500,
                  cursor: hasAnswered ? 'default' : 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: isSelected && isCurrentCorrect ? 'var(--shadow-glow-green)' : 'none'
                }}
              >
                <div style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  flexShrink: 0
                }}>
                  {['A', 'B', 'C', 'D'][optIdx]}
                </div>
                <span style={{ flex: 1, lineHeight: 1.35 }}>{optionText}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Answer Feedback Banner */}
      {hasAnswered && (
        <div className="animate-pop-in" style={{
          marginTop: '20px',
          padding: '16px 20px',
          borderRadius: 'var(--radius-md)',
          background: isCurrentCorrect 
            ? 'linear-gradient(135deg, rgba(0, 184, 148, 0.2) 0%, rgba(85, 239, 196, 0.08) 100%)' 
            : 'linear-gradient(135deg, rgba(255, 118, 117, 0.2) 0%, rgba(214, 48, 49, 0.08) 100%)',
          border: isCurrentCorrect ? '1.5px solid #00B894' : '1.5px solid #FF7675',
          boxShadow: isCurrentCorrect ? 'var(--shadow-glow-green)' : 'none'
        }}>
          {/* Header Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '8px'
          }}>
            <span style={{ fontSize: '1.6rem' }}>
              {isCurrentCorrect ? '🎉' : '😢'}
            </span>
            <div>
              <strong style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.05rem',
                color: isCurrentCorrect ? '#55EFC4' : '#FF7675'
              }}>
                {isCurrentCorrect ? 'Correct! +1 Point' : 'Incorrect (0 Points)'}
              </strong>
            </div>
          </div>

          {/* Explicit 2-Line Explanation */}
          <div style={{
            fontSize: '0.88rem',
            lineHeight: 1.45,
            color: '#fff',
            marginLeft: '34px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}>
            {explanationLines.map((line, lIdx) => (
              <p key={lIdx} style={{ margin: 0 }}>
                {lIdx === 0 && !isCurrentCorrect && <strong style={{ color: '#FDCB6E' }}>Key Concept: </strong>}
                {line}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Navigation Controls: Previous and Next Question */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '24px',
        paddingTop: '16px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={handlePrev}
          disabled={currentIdx === 0}
          className="btn-funky"
          style={{
            padding: '10px 20px',
            fontSize: '0.92rem',
            background: currentIdx === 0 ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.1)',
            color: currentIdx === 0 ? 'var(--text-dim)' : '#fff',
            cursor: currentIdx === 0 ? 'not-allowed' : 'pointer',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <ArrowLeft size={16} />
          <span>Previous Question</span>
        </button>

        <button
          onClick={handleNext}
          className={`btn-funky ${isCurrentCorrect ? 'btn-mint' : 'btn-yellow-funky'}`}
          style={{
            padding: '10px 24px',
            fontSize: '0.95rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span>{currentIdx + 1 === questions.length ? 'View Final Results' : 'Next Question'}</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
