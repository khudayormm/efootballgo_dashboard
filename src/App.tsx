import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Clubs from './pages/clubs';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Logos from './pages/logos';
import Users from './pages/users';

const App: React.FC = () => {
  const [isLogin, ] = useState<boolean>(localStorage.getItem("access_token") ? true : false)
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const clientId = '3cd19b2018580d2'; // Replace with your Imgur client ID
        const response = await axios.get('https://api.imgur.com/3/gallery/hot/viral/0.json', {
          headers: {
            Authorization: `Client-ID ${clientId}`,
          },
        });

        console.log(response)

        setImages(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!isLogin ? <Login /> : <Navigate to={"/dashboard"} />} />
        <Route path="/dashboard" element={<Layout isLogin={isLogin}> <Dashboard /> </Layout>} />
        <Route path="/clubs" element={<Layout isLogin={isLogin}> <Clubs /> </Layout>} />
        <Route path="/users" element={<Layout isLogin={isLogin}> <Users /> </Layout>} />
        <Route path="/logos" element={<Layout isLogin={isLogin}> <Logos /> </Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
