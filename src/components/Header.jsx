import s from "./Header.module.css";
import igniteLogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <div>
      <header className={s.header}>
        <img src={igniteLogo} alt="Logotipo do Ignite" />
      </header>
    </div>
  );
}