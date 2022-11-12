import './App.css';
import React from 'react';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar';
import { useState } from 'react';
function App() {
  const email = "sreehari@gmail.com"
  const password = "123"

  const [authCheck, setauthCheck] = useState(false)
  return (
    <>
    {!authCheck && <Login email={email} password={password} authCheck={authCheck} setauthCheck={setauthCheck}/>}
   {authCheck && <Navbar/>}
    </>
  );
}

export default App;
