import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import AdminLogin from './components/admin/Login';
import AdminSignup from './components/admin/Signup';
import AdminForgotPassword from './components/admin/Forgot_password/Forgot_password'; // parent component for forgot password section
import AdminHome from './components/admin/HomePage'; // parent component for admin home page
import AdminStaffView from './components/admin/Staff/Staff'; // parent component for staff view section


function App() {
  return (
    <div className="App h-lvh">
      <BrowserRouter>
        <Routes>
          {/* ADMIN */}
          <Route path="/admin/login" element={<AdminLogin />}/>
          <Route path="/admin/signup" element={<AdminSignup />}/>
          <Route path="/admin/forgot-password" element={<AdminForgotPassword />}/>
          <Route path="/admin/home" element={<AdminHome />}/>
          <Route path="/admin/staff" element={<AdminStaffView />}/>







        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
