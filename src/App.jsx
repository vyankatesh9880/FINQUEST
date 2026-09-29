import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { FloatingBackground } from './components/FloatingBackground';
import { Onboarding } from './components/Onboarding';
import { JuniorDashboard } from './components/JuniorDashboard';
import { SeniorDashboard } from './components/SeniorDashboard';

function App() {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('finquest_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const handleOnboardingComplete = (userData) => {
    setCurrentUser(userData);
    try {
      localStorage.setItem('finquest_user', JSON.stringify(userData));
    } catch (e) {
      console.warn("Storage not available:", e);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('finquest_user');
    } catch (e) {
      console.warn("Storage not available:", e);
    }
  };

  return (
    <div className="app-container" data-category={currentUser?.gradeCategory || 'default'}>
      {/* Background with floating coins, piggy banks, currency symbols */}
      <FloatingBackground />

      {/* Main Header / Navigation */}
      <Navbar user={currentUser} onLogout={handleLogout} />

      {/* Dynamic View Router */}
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        {!currentUser ? (
          <Onboarding onComplete={handleOnboardingComplete} />
        ) : currentUser.gradeCategory === 'grade5-7' ? (
          <JuniorDashboard user={currentUser} />
        ) : (
          <SeniorDashboard user={currentUser} />
        )}
      </main>

      {/* Mobile-ready Bottom Navigation & Footer */}
      <footer style={{
        position: 'relative',
        zIndex: 5,
        textAlign: 'center',
        padding: '20px 16px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(15, 12, 32, 0.7)',
        backdropFilter: 'blur(12px)',
        fontSize: '0.8rem',
        color: 'var(--text-dim)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '6px' }}>
          <span>🪙 FinQuest Platform</span>
          <span>•</span>
          <span>Designed with high-energy gamified pedagogy</span>
        </div>
        <p style={{ margin: 0 }}>
          Empowering the next generation with fearless financial habits & real-world money intelligence.
        </p>
      </footer>
    </div>
  );
}

export default App;
