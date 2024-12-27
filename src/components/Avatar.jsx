import s from "./Avatar.module.css";

export function Avatar({ hasBorder = true, src }) {
  return (
    <img className={hasBorder ? s.avatarWithBorder : s.avatar} src={src} />
  );
}
