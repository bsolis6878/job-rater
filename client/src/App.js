import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Profile from './components/Profile';

function App() {

  const [currentlySelected, setCurrentlySelected] = useState('Home');

  return (
    <>
      <Header setCurrentlySelected={setCurrentlySelected} />
      {currentlySelected === 'Home' && <Home />}
      {currentlySelected === 'Blogs' && <Blogs />}
      {currentlySelected === 'Profile' && <Profile />}
    </>
  );
}

export default App;
