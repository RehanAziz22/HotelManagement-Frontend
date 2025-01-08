import React from 'react';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Index2 from './pages/Index2';
import Index3 from './pages/Index3';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogDetails from './pages/BlogDetails';
import BlogGrid from './pages/BlogGrid';
import BlogStandard from './pages/BlogStandard';
import ComingSoon from './pages/ComingSoon';
import RoomModern from './pages/RoomModern';
import RoomStyle from './pages/RoomStyle';
import ServicesDetails from './pages/ServicesDetails';
import ServicesTeam from './pages/ServicesTeam';
import Index from './pages/Index';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HotelDetails from './pages/HotelDetails';
import HotelPage from './pages/HotelPage';
import HotelCat from './pages/HotelCat';
import Header from './components/Header';
import Footer from './components/Footer';
import ManagerDashboard from './ManagerDashboard/ManagerDashboard';
import HousekeepingDashboard from './HousekeepingDashboard/HousekeepingDashboard';
import BookRoom from './pages/BookRoom';
import ProfilePage from './pages/ProfilePage';
import GuestPortal from './pages/GuestPortal';
const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <GuestPortal />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/Index', element: <Index /> },
        { path: '/About', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: '/HotelDetails', element: <HotelDetails /> },
        { path: '/HotelPage', element: <HotelPage /> },
        { path: '/HotelDetails', element: <HotelDetails /> },
        { path: '/RoomStyle',element:<RoomStyle/>},
        { path: '/HotelCat', element: <HotelCat /> },
        { path: '/ServicesTeam', element: <ServicesTeam /> },
        { path: '/HotelCat/:id', element: <BookRoom /> },
        { path: '/Profile', element: <ProfilePage /> },
        
        
        
      ]
      
    },
    { path: '/LoginPage', element: <LoginPage /> },
    { path: '/SignupPage', element: <SignupPage /> },
    { path: '/manager', element: <ManagerDashboard /> },
    { path: '/housekeeping', element: <HousekeepingDashboard /> },

  ])
  return (

    <>
      <RouterProvider router={router} />
    </>

  );
};

export default App;

    //   <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     {/* <Route path='/Index' element={<Index />} /> */}
    //     {/* <Route path='/Index2' element={<Index2 />} /> */}
    //     {/* <Route path='/Index3' element={<Index3 />} /> */}
    //     <Route path='/About' element={<About />} />
    //     <Route path='/Contact' element={<Contact />} />
    //     {/* <Route path='/BlogDetails' element={<BlogDetails />} /> */}
    //     {/* <Route path='/BlogGrid' element={<BlogGrid />} /> */}
    //     {/* <Route path='/BlogStandard' element={<BlogStandard />} /> */}
    //     {/* <Route path='/ComingSoon' element={<ComingSoon />} /> */}
    //     <Route path='/HotelDetails' element={<HotelDetails />} />
    //     <Route path='/HotelPage' element={<HotelPage />} />
    //     {/* <Route path='/RoomModern' element={<RoomModern />} /> */}
    //     {/* <Route path='/RoomStyle' element={<RoomStyle />} /> */}
    //     {/* <Route path='/ServicesDetails' element={<ServicesDetails />} /> */}
    //     <Route path='/ServicesTeam' element={<ServicesTeam />} />
    //     <Route path='/LoginPage' element={<LoginPage />} />
    //     <Route path='/SignupPage' element={<SignupPage />} />
    //     <Route path='/HotelCat' element={<HotelCat />} />
    //     <Route path='/profile' element={<ProfilePage />} />
    //     <Route path='/HotelCat/:id' element={<BookRoom />} />
    //     {/* <Route path='/Footer' element={<Footer />} />
    //     <Route path='/Header' element={<Header />} /> */}
    //     <Route path='/Manager' element={<ManagerDashboard />} />
    //     <Route path='/Housekeeping' element={<HousekeepingDashboard />} />
    //   </Routes>
    // </BrowserRouter>