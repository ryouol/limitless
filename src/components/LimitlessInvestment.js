import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { Plus, ArrowRightLeft, BarChart2 } from 'lucide-react';

const LimitlessInvestment = () => {
  const performanceData = [
    { value: 100 }, { value: 105 }, { value: 103 }, 
    { value: 110 }, { value: 108 }, { value: 112 }
  ];

  const portfolioFunds = [
    {
      name: 'Sequoia Capital',
      fund: 'Fund XXIV',
      amount: '$42.5K',
      logo: '/api/placeholder/32/32'
    },
    {
      name: 'Andreessen Horowitz',
      fund: 'Growth Fund III',
      amount: '$38.2K',
      logo: '/api/placeholder/32/32'
    },
    {
      name: 'Benchmark',
      fund: 'Fund X',
      amount: '$31.6K',
      logo: '/api/placeholder/32/32'
    }
  ];

  return (
    <div className="investment-dashboard">
      <div className="dashboard-container">
        {/* Header */}
        <div className="dashboard-header">
          <img src="/api/placeholder/32/32" alt="LimitLess Logo" className="dashboard-logo" />
        </div>

        {/* Total Capital */}
        <div className="capital-section">
          <div className="capital-label">TOTAL CAPITAL INVESTED</div>
          <div className="capital-amount">
            <span className="amount">$108.4K</span>
            <span className="percentage">+2.4%</span>
          </div>
        </div>

        {/* Chart */}
        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#22C55E"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="action-button">
            <Plus className="action-icon" />
            <span>Invest</span>
          </button>
          <button className="action-button">
            <ArrowRightLeft className="action-icon" />
            <span>Transfer</span>
          </button>
          <button className="action-button">
            <BarChart2 className="action-icon" />
            <span>Analytics</span>
          </button>
        </div>

        {/* Portfolio Funds */}
        <div className="portfolio-funds">
          <h2 className="fund-label">PORTFOLIO FUNDS</h2>
          <div className="fund-list">
            {portfolioFunds.map((fund, index) => (
              <div key={index} className="fund-item">
                <div className="fund-logo">
                  <img src={fund.logo} alt={fund.name} />
                </div>
                <div className="fund-details">
                  <div className="fund-name">{fund.name}</div>
                  <div className="fund-fund">{fund.fund}</div>
                </div>
                <div className="fund-amount">
                  <div>{fund.amount}</div>
                  <button className="fund-view">
                    View recent activities and investments
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Fund Access */}
        <div className="upcoming-fund">
          <h2 className="fund-label">UPCOMING FUND ACCESS</h2>
          <div className="fund-item">
            <div className="fund-details">
              <div className="fund-name">Accel Partners</div>
              <div className="fund-fund">Growth Fund VII</div>
              <div className="fund-min-investment">Minimum Investment: $25K</div>
            </div>
            <div className="fund-status">Opening Soon</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitlessInvestment;