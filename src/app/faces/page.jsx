"use client";
import css from "./page.module.css";
import { AnimatePresence, motion } from "framer-motion";
export default function Page() {
  return (
    <div className={css.cards_wrapper}>
      <AnimatePresence>
        {cards.map((el, i) => {
          return <FaceCard src={el.src} alt={el.alt} title={el.title} n={i} />;
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
  };
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
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

const cards = [
  {
    src: "/faces/edward/IMG_6480 (2).JPG",
    alt: "Edward",
    title: "Edward",
  },
  {
    src: "/faces/diana_zvereva/IMG_6457.JPG",
    alt: "Diana Zvereva",
    title: "Diana Zvereva",
  },
  {
    src: "/faces/artemii/IMG_6314.PNG",
    alt: "Artemii",
    title: "Artemii",
  },
  {
    src: "/faces/muza/muza.png",
    alt: "Muza",
    title: "Muza",
  },
  {
    src: "/faces/eldar/IMG_6348.JPEG",
    alt: "Eldar",
    title: "Eldar",
  },
  {
    src: "/faces/lessy/photo_2024-10-04_22-19-06.jpg",
    alt: "Lessy",
    title: "Lessy",
  },
  {
    src: "/faces/vesta/photo_2_2024-10-04_22-19-43.jpg",
    alt: "Vesta",
    title: "Vesta",
  },
  {
    src: "/faces/bogdan/IMG_6308.JPG",
    alt: "Bogdan",
    title: "Bogdan",
  },
  {
    src: "/faces/sasha_rowan/IMG_6484.JPG",
    alt: "Sasha Ryabini",
    title: "Sasha Ryabini",
  },
];
