import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GifSlider = ({ alt, className }) => {
  const gifs = [
    'src/assets/confused-old-lady.webp',
    'src/assets/giphy.webp',
  ];

  const [currentGifIndex, setCurrentGifIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGifIndex((prevIndex) =>
        prevIndex === gifs.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [gifs.length]);

  return (
    <div className="relative w-full">
      {gifs.map((gif, index) => (
        <motion.img
          key={index}
          src={gifs[currentGifIndex]}
          alt={alt}
          className={className}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentGifIndex ? 1 : 0 }}
          transition={{ opacity: { duration: 0.5 }, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

export default GifSlider;