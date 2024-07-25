import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const Section = ({Children}) => {
  const { scrollYProgress } = useScroll()
  const scale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  const scaleTransform = useTransform(scale, [0, 1], [1, 0])

  return (
    <motion.div
      style={{ scale:scaleTransform }}
      className='mx-auto max-w-7xl px-6 py-80 lg:px-8'
    >
      {Children}
    </motion.div>
  )
}

export default Section