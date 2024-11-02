"use client";
import Link from "next/link";
import css from "./Header.module.css";
import { useContext, useState } from "react";
import { facesContext } from "@/contexts/faces";
import { AnimatePresence, motion } from "framer-motion";
import useIsTouchScreen from "@/hooks/useIsTouchScreen";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function Header() {
  const [sublinks, setSublinks] = useState({
    title: undefined,
    case: undefined,
  });

  const { setCat } = useContext(facesContext);

  const hoverMenuHandler = (key) => {
    switch (key) {
      case "faces":
        setSublinks({ case: "faces" });
        break;
      case "production":
        setSublinks({ case: "production" });

        break;
      case "disable":
        setSublinks({ case: null });
        break;
      default:
        break;
    }
  };

  const variants = {
    disabled: { opacity: 0 },
    enabled: { opacity: 1 },
  };

  const isTouchScreen = useIsTouchScreen();
  const [burgerOpen, setBurgerOpen] = useState(true);
  return (
    <header className={css.header}>
      <Link href={"/"} className={css.pm}>
        Placement Management
      </Link>
      <div
        className={
          isTouchScreen ? css.header_container_touch : css.header_container
        }
      >
        <AnimatePresence>
          {isTouchScreen && (
            <div className={css.nav_wrapper_touch}>
              <BurgerMenu state={{ burgerOpen, setBurgerOpen }} />
              <AnimatePresence>
                {burgerOpen && (
                  <motion.div
                    variants={variants}
                    initial="disabled"
                    animate="enabled"
                    exit="disabled"
                    className={css.nav_wrapper_touch_layout}
                  >
                    <div className={css.link_item}>
                      <Link href={"faces"}>Faces</Link>
                    </div>
                    <div className={css.link_item}>
                      <Link href={"info"}>Info</Link>
                    </div>
                    <div className={css.link_item}>
                      <Link href={"production"}>Production</Link>
                    </div>
                    <div className={css.link_item}>
                      <Link href={"service"}>Service</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!isTouchScreen && (
            <div className={css.nav_wrapper}>
              <motion.div
                className={css.link_wrapper}
                variants={variants}
                initial="disabled"
                animate="enabled"
                exit="disabled"
              >
                {links.map((el, i) => {
                  return (
                    <div
                      className={css.link_item}
                      onMouseLeave={() => {
                        hoverMenuHandler("disable");
                      }}
                      onMouseOver={() => {
                        hoverMenuHandler(el.case);
                      }}
                      key={i}
                    >
                      <Link href={el.case} className={css.link_item_text}>
                        {el.case}
                      </Link>
                      <AnimatePresence>
                        {sublinks.case === el.case && (
                          <motion.div
                            variants={variants}
                            initial="disabled"
                            animate="enabled"
                            exit="disabled"
                            onMouseLeave={() => {
                              hoverMenuHandler("disable");
                            }}
                            className={css.sublink_item}
                          >
                            {el.sublinks.map((el, i) => {
                              return (
                                <Link
                                  href={el.href}
                                  className={css}
                                  key={i}
                                  onClick={() => {
                                    setCat(el.cat);
                                  }}
                                >
                                  {el.text}
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

const links = [
  {
    case: "faces",
    sublinks: [
      { href: "/faces", text: "Our faces", cat: "of" },
      {
        href: "/faces",
        text: "Scouted for Agency",
        cat: "sfa",
      },
      { href: "/faces", text: "New faces", cat: "nf" },
    ],
  },
  {
    case: "info",
    sublinks: [],
  },
  {
    case: "production",
    sublinks: [
      { href: "/production?creators=egor-digitals", text: "Egor Digitals" },
      { href: "/production?creators=creators", text: "Creators" },
    ],
  },
  {
    case: "service",
    sublinks: [],
  },
];
