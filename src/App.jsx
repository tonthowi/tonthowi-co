import { motion } from "framer-motion";
import BlurFade from "./lib/blur-fade.tsx";
import MainContent from "./main-content.jsx";
import ProjectsContent from "./projects-content.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <div className="overflow-hidden mx-auto font-Display text-white relative">

      <motion.div className="relative z-10">
        <BlurFade delay={0.50} inView blur="10px">
          <MainContent />
        </BlurFade>
      </motion.div>

      <motion.div>
        <BlurFade delay={0.50} inView blur="10px">
          <ProjectsContent />
        </BlurFade>
      </motion.div>

      <Footer
        className="justify-center items-center"
        staticText="Designed and developed by"
        pulsedText="Tonthowi Al Ahyar"
      />
    </div>
  );
}

export default App;