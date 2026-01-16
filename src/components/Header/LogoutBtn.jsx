import React from 'react'
import {logout} from '../../store/authSlice'
import { useDispatch } from 'react-redux'
function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = async () => {
      // authService.logout().then(()=>{ //once the session is deleted, we can dispatch the logout action
      //     dispatch(logout())
      // })
      const result = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v1/users/logout`,{
        method: 'POST',
        credentials: 'include',
      });
      const resultJson = await result.json();
      if(result.ok){
        dispatch(logout());
      }
    }
  return (
    <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn;