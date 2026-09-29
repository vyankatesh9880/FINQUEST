import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  RotateCcw, 
  Trophy, 
  Sparkles,
  Zap
} from 'lucide-react';

export const QuizSection = ({ questions, moduleTitle, moduleTheme = '#6C5CE7', onCompleteQuiz }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredHistory, setAnsweredHistory] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ = questions[currentIdx];

  // Fire celebratory burst effect for correct answers
  const triggerCelebration = () => {
    // Left fire-shot cannon
    confetti({
      particleCount: 60,
      angle: 60,
      spread: 55,
      origin: { x: 0.1, y: 0.7 },
      colors: ['#00B894', '#55EFC4', '#FFA502', '#FD79A8']
    });
    // Right fire-shot cannon
    confetti({
      particleCount: 60,
      angle: 120,
      spread: 55,
      origin: { x: 0.9, y: 0.7 },
      colors: ['#6C5CE7', '#A29BFE', '#FFA502', '#00B894']
    });
  };

  const handleSelectOption = (idx) => {
    if (hasAnswered) return;
    setSelectedOption(idx);
    setHasAnswered(true);

    const isCorrect = idx === currentQ.correctIndex;
    const newScore = isCorrect ? score + 1 : score;
    if (isCorrect) {
      setScore(newScore);
      triggerCelebration();
    }

    setAnsweredHistory(prev => [
      ...prev,
      {
        questionId: currentQ.id,
        userPick: idx,
        isCorrect,
        correctPick: currentQ.correctIndex,
        explanation: currentQ.explanation
      }
    ]);
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
    } else {
      setQuizFinished(true);
      if (score >= 7) {
        // Grand finale celebration
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#FFA502', '#00B894', '#6C5CE7', '#FD79A8']
        });
      }
      if (onCompleteQuiz) {
        onCompleteQuiz(score + (selectedOption === currentQ.correctIndex ? 0 : 0));
      }
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setScore(0);
    setAnsweredHistory([]);
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

        <div>
          <button
            onClick={handleRestart}
            className="btn-funky btn-yellow-funky"
            style={{ padding: '12px 28px', fontSize: '1rem' }}
          >
            <RotateCcw size={18} />
            <span>Retake 10-Question Quiz</span>
          </button>
        </div>
      </div>
    );
  }

  const isCurrentCorrect = hasAnswered && selectedOption === currentQ.correctIndex;
  const isCurrentWrong = hasAnswered && selectedOption !== currentQ.correctIndex;

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
          <span>Score: {score} / 10</span>
        </div>
      </div>

      {/* Progress Track Dots */}
      <div style={{
        display: 'flex',
        gap: '6px',
        marginBottom: '24px',
        overflowX: 'auto',
        paddingBottom: '4px'
      }}>
        {questions.map((q, idx) => {
          let dotColor = 'rgba(255, 255, 255, 0.15)';
          if (idx < currentIdx) {
            const hist = answeredHistory.find(h => h.questionId === q.id);
            dotColor = hist?.isCorrect ? '#00B894' : '#FF7675';
          } else if (idx === currentIdx) {
            dotColor = '#FFA502';
          }
          return (
            <div
              key={q.id}
              style={{
                flex: 1,
                minWidth: '20px',
                height: '6px',
                borderRadius: 'var(--radius-full)',
                background: dotColor,
                transition: 'all 0.3s ease'
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

          {/* Next Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '14px' }}>
            <button
              onClick={handleNext}
              className={`btn-funky ${isCurrentCorrect ? 'btn-mint' : 'btn-yellow-funky'}`}
              style={{ padding: '10px 22px', fontSize: '0.95rem' }}
            >
              <span>{currentIdx + 1 === questions.length ? 'View Final Results' : 'Next Question'}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
