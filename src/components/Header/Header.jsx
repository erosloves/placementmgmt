"use client";
import Link from "next/link";
import css from "./Header.module.css";
import { useContext, useState } from "react";
import { facesContext } from "@/contexts/faces";
import { AnimatePresence, motion } from "framer-motion";
import useIsTouchScreen from "@/hooks/useIsTouchScreen";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
export default function Header() {
  const [isMenuActive, setMenuActive] = useState({
    link: true,
    sublink: false,
  });
  const [sublinks, setSublinks] = useState();

  const { setCat } = useContext(facesContext);

  const hoverMenuHandler = (key) => {
    switch (key) {
      case "faces":
        setSublinks([
          {
            title: "Our faces",
            cat: "of",
          },
          {
            title: "Scouted for Agency",
            cat: "sfa",
          },
          {
            title: "New faces",
            cat: "nf",
          },
        ]);
        setMenuActive({ link: false, sublink: true });
        break;
      case "production":
        setSublinks([
          {
            href: "/production?creators=egor-digitals",
            title: "Egor Digitals",
          },
          {
            // Добавить здесь ссылку
            href: "#",
            title: "Creators",
          },
        ]);
        setMenuActive({ link: false, sublink: true });
        break;
      case "submenuoff":
        setMenuActive({ link: true, sublink: false });
        break;
      default:
        break;
    }
  };

  const variants = {
    disabled: { opacity: 0 },
    enabled: { opacity: 1 },
  };
  const isScreen = useIsTouchScreen();
  return (
    <header className={css.header}>
      <Link href={"/"} className={css.pm}>
        Placement Management
      </Link>
      <div
        className={isScreen ? css.header_container_touch : css.header_container}
      >
        <AnimatePresence>
          {isScreen && (
            <div className={css.nav_wrapper_touch}>
              <BurgerMenu />
            </div>
          )}
          {!isScreen && (
            <div className={css.nav_wrapper}>
              {isMenuActive.link && (
                <motion.div
                  className={css.link_wrapper}
                  variants={variants}
                  initial="disabled"
                  animate="enabled"
                  exit="disabled"
                >
                  <Link
                    href={"faces"}
                    onMouseOver={() => {
                      hoverMenuHandler("faces");
                    }}
                    className={css.link_item}
                  >
                    Faces
                  </Link>
                  <Link href={"info"} className={css.link_item}>
                    Info
                  </Link>
                  <Link
                    href={"production"}
                    onMouseOver={() => {
                      hoverMenuHandler("production");
                    }}
                    className={css.link_item}
                  >
                    Production
                  </Link>
                  <Link href={"service"} className={css.link_item}>
                    Service
                  </Link>
                </motion.div>
              )}
              {isMenuActive.sublink && (
                <motion.div
                  className={css.sublink_wrapper}
                  onMouseLeave={() => hoverMenuHandler("submenuoff")}
                  variants={variants}
                  initial="disabled"
                  animate="enabled"
                  exit="disabled"
                >
                  {sublinks.map((el, i) => {
                    return (
                      <Link
                        key={i}
                        onClick={() => setCat(el.cat)}
                        className={css.sublink_item}
                        href={"/faces"}
                      >
                        {el.title}
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
