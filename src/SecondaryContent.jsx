import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import BlurFade from "./lib/blur-fade"
const SecondaryContent = () => {
    const { scrollYProgress } = useScroll()
    const scale = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })
    const scaleTransform = useTransform(scale, [0, 1], [1, 0.9])

    return (
        <motion.div className="font-Display text-white relative px-6 py-80 lg:px-8" style={{ scale:scaleTransform }}>
            <BlurFade delay={0.25} inView>
            <h2>Secondary Content</h2>
            <p>This is the secondary content.</p>
            </BlurFade>
        </motion.div>
    )
}

export default SecondaryContent