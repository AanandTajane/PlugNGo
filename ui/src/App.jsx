
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Header from './components/NavigationBar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserDashBoard from './pages/UserDashBoard';
import AdminSignUp from './pages/AdminSignUp';
import AdminDashBoard from './pages/AdminDashBoard';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
function App() {

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/aboutUs" element={<AboutUs />}></Route>
          <Route path="/contactUs" element={<ContactUs />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/adminSignUp" element={<AdminSignUp />}></Route>
          <Route path="/userDashboard" element={<UserDashBoard />}></Route>
          <Route path="/adminDashboard" element={<AdminDashBoard />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
