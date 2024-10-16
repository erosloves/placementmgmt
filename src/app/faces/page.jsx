"use client";
import css from "./page.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { facesContext } from "@/contexts/faces";

export default function Page() {
  const { isCat } = useContext(facesContext);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const getPageData = async () => {
      const apiUrlEndpoint = `/api/getmodels?cat=${isCat}`;
      await fetch(apiUrlEndpoint, {
        method: "GET",
      })
        .then((response) => response.json())
        .then(setCards([]))
        .then((json) => {
          setCards(json.paths);
        });
    };
    getPageData();
  }, [isCat]);

  return (
    <div className={css.cards_wrapper}>
      <AnimatePresence>
        {cards.map((el, i) => {
          return (
            <FaceCard
              key={i}
              src={el.src}
              alt={el.alt}
              title={el.title}
              n={i}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
}

const FaceCard = ({ src, alt, title, n }) => {
  const vars = {
    // visible: (i) => ({
    //   opacity: i * 0.2
    // },
    // hidden: {opacity: 1}
    hidden: { opacity: 0, x: -10 },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
    exit: {
      opacity: 0,
    },
  };
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      exit={"exit"}
      variants={vars}
      custom={n++}
      className={css.card}
      viewport={{ amount: 0.1, once: true }}
    >
      <div className={css.img_wrapper}>
        <img src={src} alt={alt} />
      </div>
      <span className={css.title}>{title}</span>
    </motion.div>
  );
};
