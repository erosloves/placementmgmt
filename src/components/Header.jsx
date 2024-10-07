import Link from "next/link";
import css from "./Header.module.css";
export default function Header() {
  return (
    <header className={css.header}>
      <Link href={"/"} className={css.pm}>
        Placement Management
      </Link>
      <div className={css.link_wrapper}>
        {/* <Link href={""}>Home</Link> */}
        <Link href={"faces"}>Our faces</Link>
        <Link href={"info"}>Info</Link>
        <Link href={"production"}>Production</Link>
        <Link href={"service"}>Service</Link>
      </div>
    </header>
  );
}
