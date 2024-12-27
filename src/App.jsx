import { Header } from "./components/Header";
import { Post } from "./components/Post";

import s from "./App.module.css";

import { Sidebar } from "./components/Sidebar";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={s.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Bruno Silva"
            content="Teste de passagem das propriedades dentro do elemento!"
          />
          <Post
            author="Felipe Sanches"
            content="Teste de passagem das propriedades dentro do elemento!"
          />
        </main>
      </div>
    </div>
  );
}
