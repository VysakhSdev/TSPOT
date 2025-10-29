import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { MenuProvider } from './context/MenuContext';
import CustomerMenu from './components/CustomerMenu';
import AdminPanel from './components/AdminPanel';
import ViewSwitcher from './components/ViewSwitcher';

const AppRoutes: React.FC = () => {
  const location = useLocation();
  const showSwitcher = location.pathname === '/' || location.pathname === '/admin';

  return (
    <>
      <Routes>
        <Route path="/" element={<CustomerMenu />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/menu" element={<CustomerMenu />} />
      </Routes>
      {showSwitcher && <ViewSwitcher />}
    </>
  );
};

function App() {
  return (
    <MenuProvider>
      <HashRouter>
        <div className="min-h-screen bg-gray-900 text-gray-200" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-matter.png')"}}>
          <AppRoutes />
        </div>
      </HashRouter>
    </MenuProvider>
  );
}

export default App;