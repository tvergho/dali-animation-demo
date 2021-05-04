import React, { useState, useEffect } from 'react';
import { motion, useAnimation, transform } from 'framer-motion';

// Influenced by https://www.framer.com/api/motion/examples/ and
// https://codesandbox.io/s/framer-motion-spring-powered-characters-remaining-count-i1wgk

const mapRemainingToColor = transform([10, 2], ['#ff008c', '#ccc']);
const mapRemainingToSpringVelocity = transform([10, 0], [50, 0]);

const Framer = () => {
  const [value, setValue] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    setTimeout(() => { setValue((val) => val + 1); }, 1000);

    controls.start({
      scale: 1,
      transition: {
        type: 'spring',
        velocity: mapRemainingToSpringVelocity(value),
        stiffness: 700,
        damping: 80,
      },
    });
  }, [value]);

  return (
    <div className="framer">
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1, 1],
          rotate: [0, 0, 270, 270, 0, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%', '20%'],
        }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="object"
      />
      <motion.div
        animate={controls}
        style={{ color: mapRemainingToColor(value) }}
        className="object-3"
      >
        {value}
      </motion.div>
      <motion.div
        animate={{
          y: [0, -50, 0],
          backgroundColor: ['rgb(74, 156, 250)', 'rgb(84, 180, 88)', 'rgb(74, 156, 250)'],
        }}
        transition={{ repeat: Infinity }}
        className="object-2"
      />
    </div>
  );
};

export default Framer;
