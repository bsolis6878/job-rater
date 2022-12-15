import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  const [currentlySelected, setCurrentlySelected] = useState('Home');

  return (
    <>
      <Header
        currentlySelected={currentlySelected}
        setCurrentlySelected={setCurrentlySelected}
      />
      {currentlySelected === 'Home' && <Home />}
      {currentlySelected === 'Blogs' && <Blogs />}
      {currentlySelected === 'Profile' && <Profile />}
      {currentlySelected === 'Login' && <Login />}
      {currentlySelected === 'Signup' && <Signup />}
    </>
  );
}

export default App;
