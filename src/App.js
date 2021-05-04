import React, { useState } from 'react';
import LottieLightsaber from './LottieLightsaber';
import SkeletonDisplay from './Skeleton';
import Framer from './Framer';

const buttonEnum = {
  lightsaber: 'Lightsaber',
  lottie: 'Lottie',
  skeleton: 'Skeleton',
  framer: 'Framer',
};

const Buttons = ({ active, setActive }) => {
  return (
    <div className="buttons">
      <button type="button" className={`select-button ${active === buttonEnum.lightsaber ? 'selected' : ''}`} onClick={() => { setActive(buttonEnum.lightsaber); }}>Lightsaber</button>
      <button type="button" className={`select-button ${active === buttonEnum.lottie ? 'selected' : ''}`} onClick={() => { setActive(buttonEnum.lottie); }}>Lottie Examples</button>
      <button type="button" className={`select-button ${active === buttonEnum.skeleton ? 'selected' : ''}`} onClick={() => { setActive(buttonEnum.skeleton); }}>Skeleton</button>
      <button type="button" className={`select-button ${active === buttonEnum.framer ? 'selected' : ''}`} onClick={() => { setActive(buttonEnum.framer); }}>Framer Motion</button>
    </div>
  );
};

const App = () => {
  const [active, setActive] = useState(buttonEnum.lightsaber);

  return (
    <>
      <div className="App">
        {active === buttonEnum.lightsaber && <LottieLightsaber />}
        {active === buttonEnum.skeleton && <SkeletonDisplay />}
        {active === buttonEnum.framer && <Framer />}
      </div>
      <Buttons active={active} setActive={setActive} />
    </>
  );
};

export default App;
