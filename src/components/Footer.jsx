import { motion } from 'framer-motion'

const Footer = ({ className, staticText, pulsedText }) => {

    return(
        <div className={`flex px-8 lg:px-16 text-white font-Display font-normal text-xs z-50 relative bottom-1 ${className}`}>
            <p>
                {staticText}
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
                    &nbsp;{pulsedText}&nbsp;
                </motion.span>
            </p>
        </div>
    )
}
export default Footer
