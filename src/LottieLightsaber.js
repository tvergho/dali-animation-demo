import React from 'react';
import Lottie from 'react-lottie';
import animationData from './lightsaber.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const LottieLightsaber = () => {
  return (
    <div className="lottie">
      <Lottie options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
  );
};

export default LottieLightsaber;