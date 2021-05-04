import React, { useState } from 'react';
import LottieLightsaber from './LottieLightsaber';

const Buttons = ({ active, setActive }) => {
  return (
    <div className="buttons">
      <button type="button" className={`select-button ${active === 'Lightsaber' ? 'selected' : ''}`} onClick={() => { setActive('Lightsaber'); }}>Lightsaber</button>
      <button type="button" className={`select-button ${active === 'Lottie' ? 'selected' : ''}`} onClick={() => { setActive('Lottie'); }}>Lottie Examples</button>
      <button type="button" className={`select-button ${active === 'Skeleton' ? 'selected' : ''}`} onClick={() => { setActive('Skeleton'); }}>Skeleton</button>
      <button type="button" className={`select-button ${active === 'Framer' ? 'selected' : ''}`} onClick={() => { setActive('Framer'); }}>Framer Motion</button>
    </div>
  );
};

const App = () => {
  const [active, setActive] = useState('Lightsaber');

  return (
    <>
      <div className="App">
        <LottieLightsaber />
      </div>
      <Buttons active={active} setActive={setActive} />
    </>
  );
};

export default App;
