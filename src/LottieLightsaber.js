import React from 'react';
import Lottie from 'react-lottie';
import animationData from './lightsaber3.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: { // https://github.com/airbnb/lottie-web/wiki/Renderer-Settings
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const LottieLightsaber = () => {
  return (
    <div className="lottie">
      <Lottie options={defaultOptions}
        width={400}
        height={400}
      />
    </div>
  );
};

export default LottieLightsaber;
