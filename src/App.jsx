import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import MyBookings from './pages/MyBookings';
import RoomDetails from './pages/RoomDetails';
import HotelPage from './pages/HotelPage';
import RoomStyle from './pages/RoomStyle';
import HotelCat from './pages/HotelCat';
import ServicesTeam from './pages/ServicesTeam';
import ServicesDetails from './pages/ServicesDetails';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ManagerDashboard from './ManagerDashboard/ManagerDashboard';
import HousekeepingDashboard from './HousekeepingDashboard/HousekeepingDashboard';
import RecepitionistDashboard from './ReceptionistDashboard/ReceptionistDashboard';
import BookRoom from './pages/BookRoom';
import GuestPortal from './pages/GuestPortal';

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const { role } = user || {};

  useEffect(() => {
    // Re-fetch user from localStorage on initial load or whenever it changes
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser || null);
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    <Navigate to="/" />
    setUser(null);
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: role === "guest" || !user ? <GuestPortal /> : <Navigate to={`/${role}`} />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/About', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: 'mybookings', element: user ? <MyBookings /> : <Navigate to="/LoginPage" /> },
        { path: '/RoomDetails', element: <RoomDetails /> },
        { path: '/HotelPage', element: <HotelPage /> },
        { path: '/RoomStyle', element: <RoomStyle /> },
        { path: '/HotelCat', element: <HotelCat /> },
        { path: '/ServicesTeam', element: <ServicesTeam /> },
        { path: '/ServicesDetails', element: <ServicesDetails /> },
        { path: '/HotelCat/:id', element: user ? <BookRoom /> : <Navigate to="/LoginPage" /> },
        { path: '/Profile', element: user ? <ProfilePage /> : <Navigate to='/LoginPage' /> },
      ]
    },
    {
      path: '/LoginPage',
      element: !user ? <LoginPage onLogin={(userData) => setUser(userData)} /> : <Navigate to="/" />
    },
    {
      path: '/SignupPage',
      element: !user && <SignupPage />
    },
    {
      path: '/manager',
      element: role === "manager" ? <ManagerDashboard handleLogout={handleLogout} /> : <Navigate to="/" />
    },
    {
      path: '/housekeeping',
      element: role === "housekeeping" ? <HousekeepingDashboard handleLogout={handleLogout}/> : <Navigate to="/" />
    },
    {
      path: '/receptionist',
      element: role === "receptionist" ? <RecepitionistDashboard handleLogout={handleLogout}/> : <Navigate to="/" />
    },
  ]);


  return (
    <RouterProvider router={router} />
  );
};

export default App;
