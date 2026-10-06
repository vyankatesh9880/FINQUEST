import React, { useState } from 'react';
import { RotateCcw, FastForward } from 'lucide-react';
import confetti from 'canvas-confetti';

const TARGET_GOALS = [
  { id: 'bicycle', name: "New Bicycle", target: 120, emoji: "🚲" },
  { id: 'concert', name: "Concert Ticket", target: 60, emoji: "🎟️" },
  { id: 'tablet', name: "Tablet", target: 200, emoji: "📱" }
];

const RANDOM_EVENTS = [
  {
    type: 'bonus',
    title: "Grandma sent birthday cash! 🎂",
    delta: 10,
    desc: "A warm card in the mail with surprise cash tucked inside!"
  },
  {
    type: 'bonus',
    title: "Found money cleaning room! 🧹",
    delta: 5,
    desc: "You cleaned under your desk and found spare dollar bills!"
  },
  {
    type: 'cost',
    title: "Library lost book fine! 📚",
    delta: -6,
    desc: "You accidentally misplaced a library science book and had to pay the fine."
  },
  {
    type: 'cost',
    title: "Snack craving with friends! 🍿",
    delta: -4,
    desc: "You joined classmates for an impromptu frozen yogurt treat."
  }
];

export const SavingsGoalRace = ({ onComplete }) => {
  const allowance = 20; // $20/week
  const chores = 10;    // $10/week
  const totalWeeklyIncome = allowance + chores; // $30/week

  const [selectedGoal, setSelectedGoal] = useState(TARGET_GOALS[0]);
  const [weeklySaveRate, setWeeklySaveRate] = useState(15); // $5 to $25
  const [weeksPassed, setWeeksPassed] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [activePopupEvent, setActivePopupEvent] = useState(null);
  const [eventHistory, setEventHistory] = useState([]);
  const [raceComplete, setRaceComplete] = useState(false);

  // Initial estimate in weeks
  const estimatedWeeks = Math.ceil(selectedGoal.target / weeklySaveRate);
  const remainingAmount = Math.max(0, selectedGoal.target - totalSavings);
  const progressPercent = Math.min(100, Math.round((totalSavings / selectedGoal.target) * 100));

  const handleAdvanceWeek = () => {
    if (raceComplete) return;

    const nextWeeksPassed = weeksPassed + 1;
    let nextTotalSavings = totalSavings + weeklySaveRate;
    let triggeredEvent = null;

    // 30% probability of triggering random event
    if (Math.random() < 0.30) {
      const randomEvt = RANDOM_EVENTS[Math.floor(Math.random() * RANDOM_EVENTS.length)];
      nextTotalSavings = Math.max(0, nextTotalSavings + randomEvt.delta);
      triggeredEvent = randomEvt;
    }

    setWeeksPassed(nextWeeksPassed);
    setTotalSavings(nextTotalSavings);

    if (triggeredEvent) {
      setActivePopupEvent(triggeredEvent);
      setEventHistory(prev => [...prev, { week: nextWeeksPassed, event: triggeredEvent }]);
    }

    if (nextTotalSavings >= selectedGoal.target) {
      setRaceComplete(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.55 }
      });
      if (onComplete) onComplete(nextTotalSavings);
    }
  };

  const handleRestart = (newGoal = selectedGoal) => {
    setSelectedGoal(newGoal);
    setWeeksPassed(0);
    setTotalSavings(0);
    setActivePopupEvent(null);
    setEventHistory([]);
    setRaceComplete(false);
  };

  return (
    <div className="animate-pop-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* 1. GOAL SELECTION & INCOME SETUP */}
      <div style={{
        padding: '20px',
        borderRadius: 'var(--radius-md)',
        background: 'rgba(20, 16, 45, 0.92)',
        border: '1.5px solid rgba(0, 184, 148, 0.35)',
        marginBottom: '20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '16px'
        }}>
          <div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800 }}>
              Step 1: Choose Your Savings Target
            </span>
            <h3 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.3rem', margin: '2px 0 0' }}>
              Target: {selectedGoal.name} (${selectedGoal.target}) {selectedGoal.emoji}
            </h3>
          </div>

          {/* 3 Goals Buttons */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {TARGET_GOALS.map(g => (
              <button
                key={g.id}
                onClick={() => handleRestart(g)}
                style={{
                  padding: '8px 14px',
                  borderRadius: '8px',
                  background: selectedGoal.id === g.id ? '#00B894' : 'rgba(255, 255, 255, 0.08)',
                  color: selectedGoal.id === g.id ? '#083329' : '#fff',
                  border: 'none',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {g.emoji} {g.name} (${g.target})
              </button>
            ))}
          </div>
        </div>

        {/* Weekly Income Breakdown ($20 Allowance + $10 Chores = $30/week) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px',
          padding: '12px 16px',
          borderRadius: '10px',
          background: 'rgba(0, 0, 0, 0.35)',
          marginBottom: '16px',
          fontSize: '0.85rem'
        }}>
          <div>
            <span style={{ color: 'var(--text-dim)' }}>Weekly Allowance: </span>
            <strong style={{ color: '#FDCB6E' }}>${allowance}/week</strong>
          </div>
          <div>
            <span style={{ color: 'var(--text-dim)' }}>Chores Earned: </span>
            <strong style={{ color: '#55EFC4' }}>${chores}/week</strong>
          </div>
          <div>
            <span style={{ color: 'var(--text-dim)' }}>Total Available Income: </span>
            <strong style={{ color: '#fff' }}>${totalWeeklyIncome}/week</strong>
          </div>
        </div>

        {/* Weekly Savings Slider ($5 to $25) */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '6px'
          }}>
            <label style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 700 }}>
              Amount to save each week: <span style={{ color: '#55EFC4' }}>${weeklySaveRate}</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontWeight: 400 }}>
                {' '}(Leaves ${totalWeeklyIncome - weeklySaveRate} for weekly fun spending)
              </span>
            </label>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
              Est. time: ~{estimatedWeeks} weeks
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>$5</span>
            <input
              type="range"
              min="5"
              max="25"
              step="1"
              value={weeklySaveRate}
              disabled={weeksPassed > 0}
              onChange={(e) => setWeeklySaveRate(Number(e.target.value))}
              style={{ flex: 1, accentColor: '#00B894' }}
            />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>$25</span>
          </div>
        </div>
      </div>

      {/* 2. ANIMATED RACETRACK DASHBOARD */}
      <div className="glass-card" style={{
        padding: '24px 22px',
        border: '1.5px solid rgba(255, 165, 2, 0.4)',
        background: 'linear-gradient(135deg, rgba(20, 16, 45, 0.95) 0%, rgba(28, 22, 58, 0.95) 100%)',
        marginBottom: '20px'
      }}>
        {/* Trackers: Weeks Passed, Total Savings, Remaining Amount */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          marginBottom: '18px'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '10px 14px',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800 }}>Weeks Passed</span>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#FFA502' }}>
              Week {weeksPassed}
            </div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '10px 14px',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800 }}>Total Savings</span>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#55EFC4' }}>
              ${totalSavings}
            </div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '10px 14px',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800 }}>Remaining Amount</span>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#FD79A8' }}>
              ${remainingAmount}
            </div>
          </div>
        </div>

        {/* Animated Racetrack with Player Avatar advancing towards goal */}
        <div style={{
          position: 'relative',
          height: '56px',
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: 'var(--radius-full)',
          border: '2px solid rgba(255, 255, 255, 0.16)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          padding: '0 10px',
          marginBottom: '18px'
        }}>
          {/* Progress Bar Track Fill */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: `${progressPercent}%`,
            background: 'linear-gradient(90deg, #6C5CE7 0%, #00B894 60%, #FFA502 100%)',
            transition: 'width 0.4s ease',
            opacity: 0.65
          }} />

          {/* Player Avatar */}
          <div style={{
            position: 'absolute',
            left: `calc(${progressPercent}% - 22px)`,
            transition: 'left 0.4s ease',
            fontSize: '2rem',
            filter: 'drop-shadow(0 4px 10px rgba(255,165,2,0.6))',
            zIndex: 2
          }}>
            🏃‍♂️💨
          </div>

          {/* Goal Trophy at finish line */}
          <div style={{
            position: 'absolute',
            right: '12px',
            fontSize: '1.8rem',
            zIndex: 1
          }}>
            {selectedGoal.emoji} 🏁
          </div>
        </div>

        {/* Action Button: Advance 1 Week ⏩ */}
        {!raceComplete ? (
          <button
            onClick={handleAdvanceWeek}
            className="btn-funky btn-yellow-funky"
            style={{ width: '100%', padding: '14px', fontSize: '1.1rem' }}
          >
            <FastForward size={20} />
            <span>Advance 1 Week ⏩ (+${weeklySaveRate} Saved)</span>
          </button>
        ) : (
          /* CELEBRATION SCREEN: Total weeks taken vs original estimated weeks */
          <div className="animate-pop-in" style={{
            padding: '24px',
            borderRadius: 'var(--radius-md)',
            background: 'linear-gradient(135deg, rgba(0, 184, 148, 0.2) 0%, rgba(20, 16, 45, 0.95) 100%)',
            border: '2px solid #00B894',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '8px' }}>🎉🏆</div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.8rem',
              color: '#55EFC4',
              margin: '0 0 8px'
            }}>
              Goal Reached: {selectedGoal.name}!
            </h3>

            <p style={{ color: '#fff', fontSize: '1rem', maxWidth: '520px', margin: '0 auto 16px', lineHeight: 1.5 }}>
              You crossed the finish line in <strong>{weeksPassed} weeks</strong> (original estimate was ~{estimatedWeeks} weeks)!
              {weeksPassed <= estimatedWeeks ? " Outstanding financial pacing!" : " Great persistence overcoming life hurdles!"}
            </p>

            <button
              onClick={() => handleRestart()}
              className="btn-funky btn-yellow-funky"
              style={{ padding: '12px 28px' }}
            >
              <RotateCcw size={18} />
              <span>Race Again with New Goal</span>
            </button>
          </div>
        )}
      </div>

      {/* 3. RANDOM EVENT POPUP CARD (30% probability) */}
      {activePopupEvent && !raceComplete && (
        <div className="glass-card animate-pop-in" style={{
          padding: '16px 20px',
          borderRadius: 'var(--radius-md)',
          background: activePopupEvent.type === 'bonus'
            ? 'linear-gradient(135deg, rgba(0, 184, 148, 0.2) 0%, rgba(20, 16, 45, 0.9) 100%)'
            : 'linear-gradient(135deg, rgba(255, 118, 117, 0.2) 0%, rgba(20, 16, 45, 0.9) 100%)',
          border: `1.5px solid ${activePopupEvent.type === 'bonus' ? '#00B894' : '#FF7675'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>
            <span style={{
              fontSize: '0.72rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: activePopupEvent.type === 'bonus' ? '#55EFC4' : '#FF7675'
            }}>
              🎲 Random Weekly Life Event
            </span>
            <h4 style={{ color: '#fff', margin: '2px 0 4px', fontSize: '1.05rem' }}>
              {activePopupEvent.title}
            </h4>
            <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              {activePopupEvent.desc}
            </p>
          </div>

          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.3rem',
            fontWeight: 800,
            color: activePopupEvent.type === 'bonus' ? '#55EFC4' : '#FF7675'
          }}>
            {activePopupEvent.delta > 0 ? `+$${activePopupEvent.delta}` : `-$${Math.abs(activePopupEvent.delta)}`}
          </div>
        </div>
      )}
    </div>
  );
};
