import React from 'react';

// Floating financial icons: Coins, Piggy banks, diamonds, star badges, cash notes, graphs
const FLOATING_ELEMENTS = [
  { id: 1, symbol: '🪙', label: 'Coin', top: '8%', left: '6%', size: '2.8rem', anim: 'floatSlow', duration: '6s', delay: '0s' },
  { id: 2, symbol: '🐷', label: 'Piggy Bank', top: '15%', right: '8%', size: '3.2rem', anim: 'floatReverse', duration: '7.5s', delay: '1s' },
  { id: 3, symbol: '💎', label: 'Diamond', top: '48%', left: '4%', size: '2.4rem', anim: 'floatReverse', duration: '8s', delay: '0.5s' },
  { id: 4, symbol: '💰', label: 'Money Bag', top: '75%', left: '9%', size: '3rem', anim: 'floatSlow', duration: '6.5s', delay: '1.5s' },
  { id: 5, symbol: '📈', label: 'Chart Up', top: '35%', right: '5%', size: '2.8rem', anim: 'floatSlow', duration: '7s', delay: '2s' },
  { id: 6, symbol: '⭐', label: 'Star XP', top: '78%', right: '8%', size: '2.5rem', anim: 'floatReverse', duration: '6s', delay: '0.8s' },
  { id: 7, symbol: '💳', label: 'Card', top: '90%', left: '48%', size: '2.3rem', anim: 'floatSlow', duration: '8.5s', delay: '1.2s' },
  { id: 8, symbol: '⚡', label: 'Energy Boost', top: '22%', left: '44%', size: '2.2rem', anim: 'floatReverse', duration: '5.5s', delay: '2.5s' },
  { id: 9, symbol: '🏦', label: 'Bank Vault', top: '60%', right: '22%', size: '2.6rem', anim: 'floatSlow', duration: '9s', delay: '3s' },
];

export const FloatingBackground = () => {
  return (
    <div className="floating-bg-container" aria-hidden="true">
      {/* Decorative ambient glowing blur orbs */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          left: '20%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(108, 92, 231, 0.28) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: '40%',
          right: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(253, 121, 168, 0.22) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '35%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 184, 148, 0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      />

      {/* Floating Icons */}
      {FLOATING_ELEMENTS.map((item) => (
        <div
          key={item.id}
          className="floating-icon-item"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            fontSize: item.size,
            animationName: item.anim,
            animationDuration: item.duration,
            animationDelay: item.delay,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'ease-in-out',
          }}
          title={item.label}
        >
          {item.symbol}
        </div>
      ))}
    </div>
  );
};
