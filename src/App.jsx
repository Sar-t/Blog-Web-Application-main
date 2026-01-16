import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useDispatch} from 'react-redux'
import './App.css'
import { Footer, Header } from './components/Index.js'
import { login, logout } from './store/authSlice.js'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true) //this helps to wait for the authService to check if the user is logged in or not before rendering the app
  const dispatch = useDispatch();
  
  //whenever the app loads, we want to check if the user is logged in or not
  useEffect(() => {
  const fetchCurrentUser = async () => {
    try {
      const profile = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/users/me`, {
        method: "GET",
        credentials: "include",
      });

      if (!profile.ok) {
        // 🚫 Do NOT parse JSON here
        dispatch(logout());
        return;
      }

      // ✅ Only parse JSON if authorized
      const profileData = await profile.json();

      dispatch(login({ userData: profileData.data.user }));
    } catch (error) {
      dispatch(logout());
    } finally {
      setLoading(false);
    }
  };

  fetchCurrentUser();
}, []);

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between 	bg-slate-100 text-slate-900 '>
      <div className='w-full h-screen block'>
        <Header/>
        <main className='mt-[65px]'>
          <Outlet /> {/* This is where the child routes will be rendered */}
        </main>
        <Footer />
      </div>  
    </div>
  ) : null;
}

export default App
