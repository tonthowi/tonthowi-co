import Button from './components/Button.jsx'
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import BlurFade from "./lib/blur-fade"
import DockMenu from './MenuDock.tsx'

const MainContent = () => {
  const { scrollYProgress } = useScroll()
  const scale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  const scaleTransform = useTransform(scale, [0, 1], [1, 0.9])

  return (
    <motion.div style={{ scale:scaleTransform }}>
      <BlurFade delay={0.50} inView blur="10px">
      <div className='relative max-w-screen-md py-60 px-4 lg:px-8 z-10 justify-start'>
        <h1 className='text-6xl tracking-tight font-Display text-white font-semibold'>
          Design is expensive.
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
            &nbsp;But poor design decisions are expensiver.
          </motion.span>
        </h1>
        <DockMenu />
      </div>
      </BlurFade>
    </motion.div>
  )
}

export default MainContent