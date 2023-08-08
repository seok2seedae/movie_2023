import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) {
      navigate('/');
    }
  }, [location.state, navigate]);

  if (!location.state) {
    return null;
  }

  const { title } = location.state;

  return (
    <div className="detail-container">
      <span>{title}</span>

    </div>
  );
}

export default Detail;
