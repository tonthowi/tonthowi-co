import { motion } from "framer-motion"
import BlurFade from "./lib/blur-fade"
const SecondaryContent = () => {

    return (
        <motion.div className="min-h-screen font-Display text-white relative px-6 py-80 lg:px-8">
            <BlurFade delay={0.25} inView>
            <h2>Secondary Content</h2>
            <p>This is the secondary content.</p>
            </BlurFade>
        </motion.div>
    )
}

export default SecondaryContent