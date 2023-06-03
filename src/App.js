import React, { useState,useEffect} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const storedUserLoggedInInformation=localStorage.getItem('isLoggedIn')

  if(storedUserLoggedInInformation===1){
    setIsLoggedIn(true);
  }
  useEffect

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('isLoggedIn','1');
    setIsLoggedIn(false);
  

  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLo