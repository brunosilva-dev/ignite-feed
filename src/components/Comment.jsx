import { ThumbsUp, Trash } from "phosphor-react";
import s from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={s.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/brunosilva-dev.png"
        alt=""
      />

      <div className={s.commentBox}>
        <div className={s.commentContent}>
          <header>
            <div className={s.authorAndTime}>
              <strong>Bruno Silva</strong>
              <time dateTime="2024-24-12 16:33:00">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Bruno, parabéns!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
