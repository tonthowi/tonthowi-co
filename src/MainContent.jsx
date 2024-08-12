import { motion } from "framer-motion";
import BlurFade from "./lib/blur-fade";

const MainContent = () => {

  return (
    <motion.div className='min-h-screen'>
      <BlurFade delay={0.50} inView blur="10px">
      <div className='flex flex-col lg:flex-row relative py-60 px-8 lg:px-16 z-10 justify-start'>
        <h1 className='text-6xl max-w-screen-md lg:text-7xl tracking-tight font-Display text-white font-semibold'>
          Design is expensive.
          <span>
            &nbsp;But poor design decision is expensiver.
          </span>
        </h1>
        <div className="mt-8 lg:mt-0">
          <img
            alt="Funny GIFs about bad UX"
            src="/confused-old-lady.webp"
          />
        </div>
      </div>
      </BlurFade>
    </motion.div>
  )
}

export default MainContent