"use client";
import Link from "next/link";
import css from "./Header.module.css";
import { useContext, useState } from "react";
import { facesContext } from "@/contexts/faces";
import { AnimatePresence, motion } from "framer-motion";
// import useIsTouchScreen from "@/hooks/useIsTouchScreen";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { isMobile } from "react-device-detect";

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

  const burgerVariants = {
    disabled: { opacity: 0, x: -100 },
    enabled: { opacity: 1, x: 0 },
  };

  // const isTouchScreen = useIsTouchScreen();
  const isTouchScreen = isMobile;
  const [burgerOpen, setBurgerOpen] = useState(false);
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
                    variants={burgerVariants}
                    initial="disabled"
                    animate="enabled"
                    exit="disabled"
                    transition={{ duration: 0.2 }}
                    className={css.nav_wrapper_touch_layout}
                  >
                    {links.map((el, i) => {
                      return (
                        <>
                          <Link
                            href={el.case}
                            className={`${css.link_item} ${css.link_item_text}`}
                            key={i}
                            onClick={() => {
                              if (el.case == "faces") {
                                setCat("all");
                              } else return;
                              setBurgerOpen(false);
                            }}
                          >
                            {el.case}
                          </Link>
                          {el.sublinks.length > 0 &&
                            el.sublinks.map((el, i) => {
                              return (
                                <div
                                  className={`${css.link_item} ${css.sublink_item_touch} `}
                                  key={i}
                                  onClick={() => {
                                    setCat(el.cat);
                                    setBurgerOpen(false);
                                  }}
                                >
                                  {el.text}
                                </div>
                              );
                            })}
                        </>
                      );
                    })}
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
                      <Link
                        href={`/${el.case}`}
                        className={css.link_item_text}
                        onClick={() => {
                          if (el.case == "faces") {
                            setCat("all");
                          } else return;
                        }}
                      >
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
      // { href: "/faces", text: "Our faces", cat: "of" },
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
