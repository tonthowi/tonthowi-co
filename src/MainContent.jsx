import ThreeCanvas from './assets//ThreeCanvas.jsx';
import Button from './components/Button.jsx';

const MainContent = () => {
  return (
    <div className='flex items-center justify-center mx-auto max-w-2xl py-32 sm:py-48 lg:py-80'>
      <ThreeCanvas />
      <div className='relative z-50 text-white flex flex-col items-center justify-center'>
        <h1 className='text-4xl mb-6 font-Display text-white font-semibold sm:text-6xl'>Hello, Universe!</h1>
        <Button
          label="Github"
          type="button"
          href="https://github.com/tonthowi"
          showIcon={true}
        />
      </div>
    </div>
  );
};

export default MainContent;