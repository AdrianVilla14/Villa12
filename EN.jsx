import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/index-ES'); // Navigate to the second page route
  };

  return (
    <div>
      <button onClick={handleNavigation}>Traducir al Español</button>
    </div>
  );
}

export default HomePage;