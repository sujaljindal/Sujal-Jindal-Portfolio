import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800); // 1.8 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#050414]">
      {/* AnimatePresence handles component exit animations */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#050414]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-white text-4xl md:text-5xl font-bold"
            >
              <div className=" font-semibold cursor-pointer">
                <span className="text-[#8245ec]">&lt;</span>
                <span className="text-white">Sujal</span>
                <span className="text-[#8245ec]">/</span>
                <span className="text-white">Jindal</span>
                <span className="text-[#8245ec]">&gt;</span>
              </div>{" "}
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <BlurBlob
            position={{ top: "35%", left: "20%" }}
            size={{ width: "30%", height: "40%" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

          <motion.div
            className="relative pt-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Navbar />
            <About />
            <Skills />
            <Experience />
            <Work />
            <Education />
            <Contact />
            <Footer />
          </motion.div>
        </>
      )}
    </div>
  );
};

export default App;
