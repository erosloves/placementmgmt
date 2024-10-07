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
              casting@placementmgmt.com
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
          Placement Managment ... is a pioneer in top-tier talent
          representation, specialising in the development & management of
          exceptional creative talent.
        </p>
        <p>
          Our journey began in 1987 when Sarah Doukas founded the agency in her
          home. Sarah revolutionised the traditional modelling industry by
          launching the first UK agency to represent, worldwide, new faces Sarah
          had discovered herself and this became the agency's hallmark. 1988 is
          remembered as the year Sarah changed the fashion industry when she
          spotted Kate Moss at JFK Airport in New York City. Since then we've
          been a touchstone for scouting and launching a diverse array of models
          and talent into the spotlight.
        </p>
        <p>
          Sarah & her brother, Simon Chambers, run the agency together to offer
          360-degree management based on the fundamental principles of strategy,
          opportunity, and ownership. Over time they diversified the business
          into areas such as social media representation & brand development to
          enable the talent to maximise their career potential. Matching client
          brands
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
