import s from "./Post.module.css";

export function Post() {
  return (
    <article className={s.post}>
      <header>
        <div className={s.author}>
          <img
            className={s.avatar}
            src="https://github.com/brunosilva-dev.png"
            alt="Foto github"
          />
          <div className={s.authorInfo}>
            <strong>Bruno Silva</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime="2024-24-12 16:33:00">Públicado há 1h</time>
      </header>

      <div className={s.content}>
        <p>Fala galera!</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          obcaecati a, veniam harum pariatur impedit perspiciatis laborum quia
          perferendis optio hic exercitationem ullam officiis aut! Unde odit
          quia adipisci accusantium?
        </p>
        <p>
          <a href="#" id="">
            silva.dev/design
          </a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={s.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe seu comentário" />
        
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
