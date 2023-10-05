import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Clubs from './pages/clubs';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Users from './pages/users';

const App: React.FC = () => {
  const [isLogin, ] = useState<boolean>(localStorage.getItem("access_token") ? true : false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!isLogin ? <Login /> : <Navigate to={"/dashboard"} />} />
        <Route path="/dashboard" element={<Layout isLogin={isLogin}> <Dashboard /> </Layout>} />
        <Route path="/clubs" element={<Layout isLogin={isLogin}> <Clubs /> </Layout>} />
        <Route path="/users" element={<Layout isLogin={isLogin}> <Users /> </Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
