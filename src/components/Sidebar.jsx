import s from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={s.sidebar}>
      <img
        className={s.cover}
        src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <div className={s.profile}>
        <strong>Bruno Silva</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">Edite seu perfil</a>
      </footer>
    </aside>
  );
}
