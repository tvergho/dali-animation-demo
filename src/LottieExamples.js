import React from 'react';
import Lottie from 'react-lottie';
import jumping from './animations/jumping-people.json';
import heart from './animations/heart.json';
import success from './animations/success.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: { // https://github.com/airbnb/lottie-web/wiki/Renderer-Settings
    preserveAspectRatio: 'xMidYMid meet',
  },
};

const LottieExamples = () => {
  return (
    <div className="lottie-examples">
      <Lottie options={{ ...defaultOptions, animationData: jumping }}
        width="30%"
        height="auto"
      />
      <Lottie options={{ ...defaultOptions, animationData: heart }}
        width="30%"
      />
      <Lottie options={{ ...defaultOptions, animationData: success }}
        width="30%"
      />
    </div>
  );
};

export default LottieExamples;
