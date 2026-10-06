import React, { useState } from 'react';
import { RotateCcw, Play, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const WEATHERS = [
  { type: 'sunny', label: 'Sunny ☀️', multiplier: 1.5, desc: 'Hot & sunny! High demand for refreshing stand items.' },
  { type: 'cloudy', label: 'Cloudy ⛅', multiplier: 1.0, desc: 'Mild & pleasant. Normal steady customer foot traffic.' },
  { type: 'rainy', label: 'Rainy 🌧️', multiplier: 0.5, desc: 'Drizzly rain. Low foot traffic, fewer shoppers outside.' }
];

export const LemonadeStandSimulator = ({ onComplete }) => {
  const initialCapital = 100.00;

  const [capital, setCapital] = useState(initialCapital);
  const [currentDay, setCurrentDay] = useState(1); // Day 1 to 5
  const [weather, setWeather] = useState(WEATHERS[0]); // Starts Sunny

  // Daily Inputs
  const [sellingPrice, setSellingPrice] = useState(2.50); // Slider: $1.00 to $5.00
  const [inventoryQty, setInventoryQty] = useState(30);   // Cost: $0.50 per unit
  const [adBudget, setAdBudget] = useState(5);           // $0, $5, or $10

  // Simulation Running State
  const [dailyStatement, setDailyStatement] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [fiveDayHistory, setFiveDayHistory] = useState([]);
  const [simulationEnded, setSimulationEnded] = useState(false);

  // Cost calculations
  const unitCost = 0.50;
  const inventoryExpenses = inventoryQty * unitCost;
  const totalExpenses = inventoryExpenses + adBudget;
  const canAfford = totalExpenses <= capital;

  const handleOpenStand = () => {
    if (!canAfford) return;

    setIsSimulating(true);

    setTimeout(() => {
      // Customer Demand Formula
      // Base potential customers
      let baseTraffic = 35;

      // Weather multiplier
      let weatherTraffic = baseTraffic * weather.multiplier;

      // Price factor: $1.00 is high volume, $5.00 is low volume
      // At $2.50 price factor is 1.0
      const priceFactor = Math.max(0.2, (5.5 - sellingPrice) / 3.0);

      // Advertising boost: $0 -> 0%, $5 -> +20%, $10 -> +50%
      const adBoost = adBudget === 10 ? 1.50 : adBudget === 5 ? 1.20 : 1.00;

      const totalDemand = Math.round(weatherTraffic * priceFactor * adBoost);
      const itemsSold = Math.min(totalDemand, inventoryQty);
      const unsoldItems = inventoryQty - itemsSold;

      const grossRevenue = Number((itemsSold * sellingPrice).toFixed(2));
      const netProfit = Number((grossRevenue - totalExpenses).toFixed(2));
      const endCapital = Number((capital + netProfit).toFixed(2));

      const statement = {
        day: currentDay,
        weather: weather.label,
        sellingPrice,
        inventoryPurchased: inventoryQty,
        itemsSold,
        unsoldItems,
        grossRevenue,
        inventoryExpenses: Number(inventoryExpenses.toFixed(2)),
        adBudget,
        totalExpenses: Number(totalExpenses.toFixed(2)),
        netProfit,
        endCapital
      };

      setCapital(endCapital);
      setDailyStatement(statement);
      setFiveDayHistory(prev => [...prev, statement]);
      setIsSimulating(false);

      if (netProfit > 20) {
        confetti({ particleCount: 30, spread: 60 });
      }
    }, 1000);
  };

  const handleNextDay = () => {
    if (currentDay < 5) {
      setCurrentDay(prev => prev + 1);
      // Randomize next day's weather
      const nextWeather = WEATHERS[Math.floor(Math.random() * WEATHERS.length)];
      setWeather(nextWeather);
      setDailyStatement(null);
    } else {
      setSimulationEnded(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.55 }
      });
      if (onComplete) onComplete(Math.round(capital));
    }
  };

  const handleRestart = () => {
    setCapital(initialCapital);
    setCurrentDay(1);
    setWeather(WEATHERS[0]);
    setSellingPrice(2.50);
    setInventoryQty(30);
    setAdBudget(5);
    setDailyStatement(null);
    setFiveDayHistory([]);
    setSimulationEnded(false);
  };

  const totalCumulativeNetProfit = fiveDayHistory.reduce((sum, s) => sum + s.netProfit, 0);

  return (
    <div className="animate-pop-in" style={{ maxWidth: '820px', margin: '0 auto' }}>
      {/* 1. DASHBOARD: Starting Capital ($100), Day Tracker (Day 1 to 5), Weather Indicator */}
      <div style={{
        padding: '18px 20px',
        borderRadius: 'var(--radius-md)',
        background: 'rgba(20, 16, 45, 0.92)',
        border: '1.5px solid rgba(253, 203, 110, 0.35)',
        marginBottom: '20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '14px'
        }}>
          {/* Starting / Current Capital */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '10px 14px',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800 }}>
              Stand Capital
            </span>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem',
              fontWeight: 800,
              color: capital >= initialCapital ? '#55EFC4' : '#FF7675'
            }}>
              ${capital.toFixed(2)}
            </div>
          </div>

          {/* Day Tracker (Day 1 to Day 5) */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '10px 14px',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800 }}>
              Business Timeline
            </span>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#FFA502' }}>
              Day {currentDay} of 5
            </div>
          </div>

          {/* Weather Indicator (Sunny, Cloudy, Rainy) */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '10px 14px',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 800 }}>
              Weather Condition
            </span>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
              {weather.label}
            </div>
          </div>
        </div>

        <p style={{ margin: '10px 0 0', fontSize: '0.8rem', color: '#FDCB6E' }}>
          💡 {weather.desc}
        </p>
      </div>

      {!simulationEnded ? (
        !dailyStatement ? (
          /* 2. DAILY INPUTS */
          <div>
            <div className="glass-card" style={{
              padding: '24px 22px',
              border: '1.5px solid rgba(255, 255, 255, 0.14)',
              background: 'linear-gradient(135deg, rgba(20, 16, 45, 0.95) 0%, rgba(28, 22, 58, 0.95) 100%)',
              marginBottom: '20px'
            }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                color: '#fff',
                marginBottom: '18px'
              }}>
                Day {currentDay} Business Strategy Inputs:
              </h3>

              {/* Selling Price per Item (Slider: $1.00 to $5.00) */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '6px'
                }}>
                  <label style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 700 }}>
                    1. Selling Price per Item: <span style={{ color: '#55EFC4' }}>${sellingPrice.toFixed(2)}</span>
                  </label>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                    Lower price = Higher volume | Higher price = High profit margin
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>$1.00</span>
                  <input
                    type="range"
                    min="1.00"
                    max="5.00"
                    step="0.25"
                    value={sellingPrice}
                    onChange={(e) => setSellingPrice(Number(e.target.value))}
                    style={{ flex: 1, accentColor: '#FFA502' }}
                  />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>$5.00</span>
                </div>
              </div>

              {/* Inventory Quantity to Purchase (Cost: $0.50 per unit) */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '6px'
                }}>
                  <label style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 700 }}>
                    2. Inventory to Purchase: <span style={{ color: '#FFA502' }}>{inventoryQty} units</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontWeight: 400 }}>
                      {' '}(@ $0.50 unit cost = ${inventoryExpenses.toFixed(2)})
                    </span>
                  </label>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                    Max 100 units
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>5</span>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="5"
                    value={inventoryQty}
                    onChange={(e) => setInventoryQty(Number(e.target.value))}
                    style={{ flex: 1, accentColor: '#00B894' }}
                  />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>100</span>
                </div>
              </div>

              {/* Advertising Budget ($0, $5, or $10) */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
                  3. Advertising Budget:
                </label>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {[
                    { amt: 0, label: "$0 (No Ads)", desc: "Word of mouth only" },
                    { amt: 5, label: "$5 (Flyers & Posters)", desc: "+20% customer boost" },
                    { amt: 10, label: "$10 (Social Media Buzz)", desc: "+50% customer boost" }
                  ].map(ad => (
                    <button
                      key={ad.amt}
                      onClick={() => setAdBudget(ad.amt)}
                      style={{
                        padding: '12px',
                        borderRadius: '10px',
                        background: adBudget === ad.amt ? 'rgba(255, 165, 2, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                        border: `1.5px solid ${adBudget === ad.amt ? '#FFA502' : 'rgba(255, 255, 255, 0.12)'}`,
                        color: '#fff',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ fontWeight: 800, fontSize: '0.9rem', color: adBudget === ad.amt ? '#FFA502' : '#fff' }}>
                        {ad.label}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {ad.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Today's Expense Check & Action Button */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '14px',
                padding: '14px 18px',
                borderRadius: '10px',
                background: 'rgba(0, 0, 0, 0.35)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                    Total Today's Expenses:
                  </span>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: canAfford ? '#FFA502' : '#FF7675'
                  }}>
                    ${totalExpenses.toFixed(2)} {canAfford ? '' : '(Exceeds Capital!)'}
                  </div>
                </div>

                {/* Action Button: Open Stand for the Day 🚀 */}
                <button
                  onClick={handleOpenStand}
                  disabled={!canAfford || isSimulating}
                  className="btn-funky btn-yellow-funky"
                  style={{
                    padding: '12px 24px',
                    opacity: !canAfford || isSimulating ? 0.5 : 1,
                    cursor: !canAfford || isSimulating ? 'not-allowed' : 'pointer'
                  }}
                >
                  <Play size={18} />
                  <span>{isSimulating ? 'Customers arriving... 🚶‍♂️' : 'Open Stand for the Day 🚀'}</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* 3. DAILY INCOME STATEMENT TABLE */
          <div className="glass-card animate-pop-in" style={{
            padding: '28px 24px',
            border: '1.5px solid rgba(0, 184, 148, 0.45)',
            background: 'linear-gradient(135deg, rgba(20, 16, 45, 0.95) 0%, rgba(20, 35, 50, 0.95) 100%)',
            marginBottom: '20px'
          }}>
            <span style={{
              background: 'rgba(0, 184, 148, 0.2)',
              color: '#55EFC4',
              padding: '4px 12px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.78rem',
              fontWeight: 800,
              textTransform: 'uppercase'
            }}>
              Day {dailyStatement.day} Accounting Ledger
            </span>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.7rem',
              color: '#fff',
              margin: '10px 0 16px'
            }}>
              Net Daily Result: {dailyStatement.netProfit >= 0 ? `+$${dailyStatement.netProfit.toFixed(2)} Profit 📈` : `-$${Math.abs(dailyStatement.netProfit).toFixed(2)} Loss 📉`}
            </h3>

            {/* Income Statement Table */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.4)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              marginBottom: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ background: 'rgba(255, 255, 255, 0.08)', color: 'var(--text-dim)', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                    <th style={{ padding: '10px 16px' }}>Category</th>
                    <th style={{ padding: '10px 16px' }}>Detail</th>
                    <th style={{ padding: '10px 16px', textAlign: 'right' }}>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <td style={{ padding: '12px 16px', color: '#55EFC4', fontWeight: 700 }}>Gross Revenue</td>
                    <td style={{ padding: '12px 16px', color: 'var(--text-muted)' }}>
                      Sold {dailyStatement.itemsSold} of {dailyStatement.inventoryPurchased} items @ ${dailyStatement.sellingPrice.toFixed(2)}
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'right', color: '#55EFC4', fontWeight: 800 }}>
                      +${dailyStatement.grossRevenue.toFixed(2)}
                    </td>
                  </tr>

                  <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <td style={{ padding: '12px 16px', color: '#FF7675' }}>Inventory Cost</td>
                    <td style={{ padding: '12px 16px', color: 'var(--text-muted)' }}>
                      {dailyStatement.inventoryPurchased} units @ $0.50 unit cost
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'right', color: '#FF7675' }}>
                      -${dailyStatement.inventoryExpenses.toFixed(2)}
                    </td>
                  </tr>

                  <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <td style={{ padding: '12px 16px', color: '#FF7675' }}>Advertising Budget</td>
                    <td style={{ padding: '12px 16px', color: 'var(--text-muted)' }}>
                      Marketing promotion spend
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'right', color: '#FF7675' }}>
                      -${dailyStatement.adBudget.toFixed(2)}
                    </td>
                  </tr>

                  <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)', background: 'rgba(255, 255, 255, 0.04)' }}>
                    <td style={{ padding: '12px 16px', color: '#fff', fontWeight: 700 }}>Total Expenses</td>
                    <td style={{ padding: '12px 16px', color: 'var(--text-muted)' }}>
                      Inventory + Advertising
                    </td>
                    <td style={{ padding: '12px 16px', textAlign: 'right', color: '#FF7675', fontWeight: 800 }}>
                      -${dailyStatement.totalExpenses.toFixed(2)}
                    </td>
                  </tr>

                  <tr style={{ background: 'rgba(255, 165, 2, 0.1)' }}>
                    <td style={{ padding: '14px 16px', color: '#FFA502', fontWeight: 800, fontSize: '0.95rem' }}>Net Profit / Loss</td>
                    <td style={{ padding: '14px 16px', color: '#fff' }}>
                      Revenue minus Total Expenses
                    </td>
                    <td style={{
                      padding: '14px 16px',
                      textAlign: 'right',
                      fontWeight: 800,
                      fontSize: '1.05rem',
                      color: dailyStatement.netProfit >= 0 ? '#55EFC4' : '#FF7675'
                    }}>
                      {dailyStatement.netProfit >= 0 ? `+$${dailyStatement.netProfit.toFixed(2)}` : `-$${Math.abs(dailyStatement.netProfit).toFixed(2)}`}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button
              onClick={handleNextDay}
              className="btn-funky btn-yellow-funky"
              style={{ width: '100%', padding: '14px' }}
            >
              <span>{currentDay < 5 ? `Advance to Day ${currentDay + 1} ➡️` : 'View 5-Day Business Profit Summary 🏆'}</span>
              <ChevronRight size={18} />
            </button>
          </div>
        )
      ) : (
        /* 4. END OF DAY 5: 5-DAY PROFIT SUMMARY BREAKDOWN */
        <div className="glass-card animate-pop-in" style={{
          padding: '36px 26px',
          textAlign: 'center',
          border: '2px solid rgba(255, 165, 2, 0.5)',
          background: 'linear-gradient(135deg, rgba(20, 16, 45, 0.95) 0%, rgba(35, 25, 70, 0.95) 100%)'
        }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '10px' }}>👑🍋</div>

          <span style={{
            background: 'rgba(255, 165, 2, 0.2)',
            color: '#FFA502',
            padding: '4px 14px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.8rem',
            fontWeight: 800,
            textTransform: 'uppercase'
          }}>
            5-Day Venture Complete
          </span>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2.1rem',
            color: '#fff',
            margin: '12px 0 8px'
          }}>
            {capital > initialCapital ? 'Stand Tycoon Champion! 🏆' : 'Business Learning Milestone 🌱'}
          </h2>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: '0.98rem',
            maxWidth: '540px',
            margin: '0 auto 24px',
            lineHeight: 1.5
          }}>
            You started with <strong>${initialCapital.toFixed(2)}</strong> and completed Day 5 with a treasury balance of{' '}
            <strong style={{ color: '#55EFC4' }}>${capital.toFixed(2)}</strong> (Total Net Profit:{' '}
            <strong style={{ color: totalCumulativeNetProfit >= 0 ? '#55EFC4' : '#FF7675' }}>
              {totalCumulativeNetProfit >= 0 ? `+$${totalCumulativeNetProfit.toFixed(2)}` : `-$${Math.abs(totalCumulativeNetProfit).toFixed(2)}`}
            </strong>)!
          </p>

          {/* 5-Day Breakdown Table */}
          <div style={{
            textAlign: 'left',
            background: 'rgba(0, 0, 0, 0.35)',
            borderRadius: 'var(--radius-md)',
            padding: '14px 16px',
            marginBottom: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <h4 style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '10px' }}>
              Daily Ledger Breakdown:
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {fiveDayHistory.map((s, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  fontSize: '0.85rem'
                }}>
                  <div>
                    <strong style={{ color: '#FDCB6E' }}>Day {s.day} ({s.weather}): </strong>
                    <span style={{ color: 'var(--text-muted)' }}>Sold {s.itemsSold} items</span>
                  </div>
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-dim)', fontSize: '0.78rem' }}>Exp: ${s.totalExpenses.toFixed(2)}</span>
                    <strong style={{ color: s.netProfit >= 0 ? '#55EFC4' : '#FF7675' }}>
                      {s.netProfit >= 0 ? `+$${s.netProfit.toFixed(2)}` : `-$${Math.abs(s.netProfit).toFixed(2)}`}
                    </strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleRestart}
            className="btn-funky btn-yellow-funky"
            style={{ width: '100%', padding: '14px' }}
          >
            <RotateCcw size={18} />
            <span>Launch Another 5-Day Stand 🚀</span>
          </button>
        </div>
      )}
    </div>
  );
};
