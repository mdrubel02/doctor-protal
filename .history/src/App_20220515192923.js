
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Review from './Pages/Review/Review';
import Navbar from './Pages/Shared/Navbar';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='max-w-1xl mx-auto px-10 ' >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/appointment' element={<RequireAuth>
          <Appointment/>
        </RequireAuth>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
