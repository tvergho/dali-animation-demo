import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from './animations/new_saber.json';

const defaultOptions = {
  loop: true,
  autoplay: true, // Programatically control using the isPaused and isStopped props.
  animationData,
  rendererSettings: { // https://github.com/airbnb/lottie-web/wiki/Renderer-Settings
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const LottieLightsaber = () => {
  const [isStopped, setIsStopped] = useState(false);

  /*
  useEffect(() => {
    setTimeout(() => { setIsStopped(false); }, 1000);
  }, []);
  */

  return (
    <div className="lottie">
      <Lottie options={defaultOptions}
        width={400}
        height={400}
        isStopped={isStopped}
      />
    </div>
  );
};

export default LottieLightsaber;
