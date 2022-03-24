import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'



import Login from './components/Login'
import Home from './container/Home'
import { fetchUser } from './utils/fetchUser'


const App = () => {
  const navigate = useNavigate();

  useEffect( () => {
    const user = fetchUser();

    if (!user ) navigate('/login');
  }, [])

  return (
      <Routes>
          <Route path='login' element={ <Login /> } />
          <Route path='/*' element={ <Home /> } />
      </Routes>
    // <h1 className='text-3xl font-bold underline'>
    //     App World.
    // </h1>
 
    )
}

export default App