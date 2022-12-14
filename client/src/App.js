import { useState } from 'react';
import Header from './components/Header'
import Home from './components/Home'

function App() {

  const [currentlySelected, setCurrentlySelected] = useState('Home');

  return (
    <>
      <Header setCurrentlySelected={setCurrentlySelected} />
      {currentlySelected === 'Home' && <Home />}
    </>
  );
}

export default App;
