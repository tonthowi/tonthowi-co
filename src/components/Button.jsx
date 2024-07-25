import { motion } from "framer-motion";

function Button(props) {
    return (
     <motion.a
        whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}
         type={props.type || "button"}
         href={props.href}
         target={props.target || "_blank"}
         className="flex w-auto bg-white px-5 py-3 text-sm font-Display justify-center font-semibold hover:text-purple-500 text-black"
         style={{ clipPath: "polygon(0% 0%, 90% 0%, 100% 30%, 100% 100%, 0% 100%)" }}
       >
        {props.showIcon && props.icon && <props.icon className="mr-2 h-5 w-5" />}
        {props.label}
       </motion.a>
    ) 
 }
 
 export default Button;