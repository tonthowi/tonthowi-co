import ThreeCanvas from './assets//ThreeCanvas.jsx';
import Button from './components/Button.jsx';
import { motion } from "framer-motion";

const MainContent = () => {
  return (
    <div className='flex items-center justify-center mx-auto max-w-2xl py-32 sm:py-48 lg:py-80'>
      <ThreeCanvas />
      <div className='relative z-50 text-white flex flex-col items-center justify-center'>
        <h1 className='text-4xl mb-6 font-Display text-white font-semibold sm:text-6xl'>Hello, Universe!</h1>
        <Button
          label="GitHub"
          type="button"
          href="https://github.com/tonthowi"
          showIcon={true}
        />
      </div>
      <div className='text-white font-Display font-normal text-xs z-50 absolute bottom-1'>
        <p>
          Created by
          <motion.span
          animate={{
            opacity: [1, 0.5, 1],
            color: ['#ff6699', '#66ccff', '#ff6699'], // Pulsating colors
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
          >
          &nbsp;Tonthowi Al Ahyar&nbsp;
          </motion.span>
          using React
        </p>
      </div>
    </div>
  );
};

export default MainContent;