"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header/Header";
import { FacesContextProvider, chooseCategory } from "@/contexts/faces";
export default function Transition({ children }) {
  const [isCat, setCat] = useState("sfa");

  const templateVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <FacesContextProvider value={{ isCat, setCat }}>
      <Header />
      <div className="container">
        <AnimatePresence mode="wait">
          <motion.main
            key={`template`}
            initial="initial"
            animate="animate"
            exit="initial"
            variants={templateVariants}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </div>
    </FacesContextProvider>
  );
}
