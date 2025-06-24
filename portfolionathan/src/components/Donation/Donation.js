import React, { useState } from 'react';
import './Donation.css'; 
import { Heart, DollarSign, CreditCard } from 'lucide-react';

const Donation = () => {
  const [frequency, setFrequency] = useState('one-time');
  const [amount, setAmount] = useState(100);
  const [isCustomAmount, setIsCustomAmount] = useState(false);

  const handleAmountClick = (value) => {
    setIsCustomAmount(false);
    setAmount(value);
  };

  const handleCustomAmountChange = (e) => {
    setIsCustomAmount(true);
    setAmount(e.target.value);
  };

  return (
    <div className="donation-container">
      <div className="donation-grid">
        <div className="donation-left">
          <img
            src="https://m.media-amazon.com/images/I/61L4aoIqYOL.__AC_SX300_SY300_QL70_ML2_.jpg"
            alt="helping"
            className="donation-image"
          />
          <h2 className="donation-title">Help Me buy a 3D Printer</h2>
          <p className="donation-subtitle">Donate to help me acquire a 3D Printer</p>
          <div className="donation-heart">
            <Heart className="heart-icon" />
            <span>Help me in making a difference</span>
          </div>
        </div>

        <div className="donation-right">
          <h2 className="form-title">Place a Donation</h2>

          <div className="frequency-section">
            <p className="section-title">Frequency</p>
            <div className="frequency-buttons">
              <button
                onClick={() => setFrequency('one-time')}
                className={`frequency-button ${frequency === 'one-time' ? 'active' : ''}`}
              >
                One Time
              </button>
              <button
                onClick={() => setFrequency('monthly')}
                className={`frequency-button ${frequency === 'monthly' ? 'active' : ''}`}
              >
                Monthly
              </button>
            </div>
          </div>

          <div className="amount-section">
            <p className="section-title">Amount*</p>
            <div className="amount-buttons">
              {[10, 20, 100, 200].map((value) => (
                <button
                  key={value}
                  onClick={() => handleAmountClick(value)}
                  className={`amount-button ${amount === value && !isCustomAmount ? 'active' : ''}`}
                >
                  ${value}
                </button>
              ))}
            </div>
            <input
              type="number"
              placeholder="Other Amount"
              value={isCustomAmount ? amount : ''}
              onChange={handleCustomAmountChange}
              className="custom-amount-input"
            />
          </div>

          <div className="payment-buttons">
            <button className="paypal-button">
              <DollarSign size={20} />
              Donate with PayPal
            </button>
            <button className="card-button">
              <CreditCard size={20} />
              Donate with Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
