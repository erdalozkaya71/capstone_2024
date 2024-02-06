import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import AdminLogin from './components/admin/Shared/Login';
import AdminSignup from './components/admin/Shared/Signup';
import AdminForgotPassword from './components/admin/Shared/Forgot_password'; // parent component for forgot password section
import AdminHome from './components/admin/HomePage'; // parent component for admin home page
import AdminStaffView from './components/admin/Staff/Staff'; // parent component for staff view section
import AdminStaffAdd from './components/admin/Staff/AddNewStaff'; // parent component for staff add section
import AdminStaffDetails from './components/admin/Staff/StaffDetail'; // parent component for staff info section


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
          <Route path="/admin/staff/new" element={<AdminStaffAdd />}/>
          <Route path="/admin/staff/:id" element={<AdminStaffDetails />}/>  







        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
