"use client";
import { animate, AnimatePresence, motion } from "framer-motion";
import css from "./page.module.css";
import { useRef, useState } from "react";

export default function Page() {
  const [isPopUpActive, setPopUpActive] = useState(false);
  const animation = {
    init: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };
  return (
    <div className={css.home} style={{ fontSize: 0 }}>
      <section className={css.promo}>
        <AnimatePresence mode="wait">
          {!isPopUpActive && (
            <motion.div
              className={css.promo_item}
              onClick={() => setPopUpActive(true)}
              variants={animation}
              initial="init"
              animate="animate"
              exit="init"
            >
              Get scouted | Стать моделью
            </motion.div>
          )}
          {isPopUpActive && (
            <PopUp
              isPopUpActive={isPopUpActive}
              setPopUpActive={setPopUpActive}
              variants={animation}
            />
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}

const PopUp = ({ setPopUpActive, variants }) => {
  return (
    <motion.div
      className={css.popup}
      variants={variants}
      initial="init"
      animate="animate"
      exit="init"
    >
      <form>
        <div className={css.close} onClick={() => setPopUpActive(false)}>
          ✕
        </div>
        <input className={css.data} placeholder="Name" type="text"></input>
        <input className={css.data} placeholder="Age" type="number"></input>
        <input className={css.data} placeholder="Height" type="number"></input>
        <input className={css.data} placeholder="Email" type="email"></input>
        <input className={css.data} placeholder="Instagram" type="text"></input>
      </form>
      <button className={css.add}>Add files</button>
      <div className={css.popup_item}>
        <label className={css.checkbox}>
          <input type="checkbox"></input>I agree to the processing of my
          personal data in accordance with the privacy policy and terms of use
          of the website.
        </label>
        <button>Submit</button>
      </div>
      <div className={css.img_container}>
        <img src="/faces/artemii/IMG_6314.PNG" alt="" />
        <img src="/faces/eldar/IMG_6348.JPEG" alt="" />
        <img src="/faces/muza/muza.png" alt="" />
        <img src="/faces/diana_zvereva/IMG_6457.JPG" alt="" />
      </div>
    </motion.div>
  );
};
