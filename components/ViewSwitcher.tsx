
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ViewSwitcher: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAdminView = location.pathname === '/admin';

  const toggleView = () => {
    if (isAdminView) {
      navigate('/');
    } else {
      navigate('/admin');
    }
  };

  return (
    <button
      onClick={toggleView}
      className="fixed bottom-4 right-4 bg-yellow-400 text-black font-bold py-3 px-5 rounded-full shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105 z-50"
    >
      {isAdminView ? 'View Menu' : 'Admin Panel'}
    </button>
  );
};

export default ViewSwitcher;
