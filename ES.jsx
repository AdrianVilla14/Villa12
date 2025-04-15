import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/index-EN'); // Navigate to the second page route
  };

  return (
    <div>
      <button onClick={handleNavigation}>Translate to English</button>
    </div>
  );
}

export default HomePage;