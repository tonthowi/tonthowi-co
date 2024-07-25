import { motion } from 'framer-motion'

const Footer = () => {

    return(
        <div className='px-8 lg:px-16 text-white font-Display font-normal text-xs z-50 fixed bottom-1'>
            <p>
                Designed and developed by
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
            </p>
        </div>
    )
}
export default Footer
