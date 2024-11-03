"use client";
import css from "./page.module.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
export default function Home() {
  const [isCopyBtn, setCopyBtn] = useState(false);
  const [toCopy, setToCopy] = useState(null);
  // const copyHandler = (el) => {
  //   console.log(el.target);
  // };
  return (
    <div className={css.page}>
      <section className={`${css.section} ${css.contacts}`}>
        <h2>Contacts</h2>
        <ul className={css.socials}>
          <li>
            <Link
              href="mailto:casting@placementmgmt.com"
              onMouseOver={(e) => copyHandler(e)}
            >
              egor@placementmgmt.com
            </Link>
            <CopyBtn text={"casting@placementmgmt.com"} isVisible={isCopyBtn} />
          </li>
          <li>
            <Link href="#" onMouseOver={(e) => copyHandler(e)}>
              casting bot
            </Link>
            <CopyBtn text={"castingbot"} isVisible={isCopyBtn} />
          </li>
          <li>
            <Link
              href="https://www.instagram.com/placement_management/#"
              onMouseOver={(e) => copyHandler(e)}
            >
              placement_management
            </Link>
            <CopyBtn text={"placement_management"} isVisible={isCopyBtn} />
          </li>
        </ul>
      </section>
      <section className={`${css.section} ${css.about}`}>
        <h2>About</h2>
        <p>
          We are a scouting agency specializing in discovering and placement
          unique faces for modeling agencies and worldwide brands. our
          management include: scouting to ma, casting direction and
          international booking.
        </p>
        <p>
          We've scouted 50+ model faces. These faces are working now in
          countries of Asia and Europe. Our faces work with various agencies and
          MA from different countries
        </p>
      </section>
    </div>
  );
}

const CopyBtn = ({ text, isVisible }) => {
  const [isAlert, setAlert] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 700);

    return () => clearTimeout(timer);
  });
  const copyContact = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setAlert(true);
    });
  };
  if (!isVisible) return null;
  return (
    <div
      className={css.copy}
      onClick={() => copyContact(text)}
      onMouseOver={(e) => copyHandler(e)}
    >
      <AnimatePresence>
        {isAlert && (
          <motion.div
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            className={css.alert}
          >
            Copied!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// "casting@placementmgmt.com"
const copyHandler = (el) => {
  console.log(el.target.parentNode);
};
