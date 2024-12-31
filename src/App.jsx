import { Header } from "./components/Header";
import { Post } from "./components/Post";

import s from "./App.module.css";

import { Sidebar } from "./components/Sidebar";
import "./global.css";

// criar uma API para vir essas informações
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/brunosilva-dev.png",
      name: "Bruno Silva",
      role: "Developer at Lecom Tecnologia",
    },
    content: [
      { type: "paragraph", content: "Fala galera!" },
      {
        type: "paragraph",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione obcaecati a, veniam harum pariatur impedit perspiciatis laborum quia perferendis optio hic exercitationem ullam officiis aut! Unde odit quia adipisci accusantium?",
      },
      { type: "link", content: "silva.dev/design" },
      { type: "link", content: "#novoprojeto" },
      { type: "link", content: "#nlw" },
      { type: "link", content: "#rocketseat" },
    ],
    publishedAt: new Date("2024-12-30 19:05:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galera!" },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consequuntur architecto ut doloremque non vel maiores optio hic inventore at. Sed animi explicabo excepturi perspiciatis aliquid, quaerat tempore iusto unde.",
      },
      { type: "link", content: "jane.design/doctorcare" },
      { type: "link", content: "#novoprojeto" },
      { type: "link", content: "#nlw" },
      { type: "link", content: "#rocketseat" },
    ],
    publishedAt: new Date("2024-12-30 19:08:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={s.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
