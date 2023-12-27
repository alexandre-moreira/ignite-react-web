import styles from "./App.module.css";
import "./global.css";

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts: PostType[] = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/alexandre-moreira.png',
      name: 'Alexandre Moreira',
      role: 'CTO @Jungle Code'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa!'},
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, fuga! Suscipit et sit molestiae debitis totam. Molestias eos culpa soluta?'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-12-10 20:00:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocktseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa!'},
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, fuga! Suscipit et sit molestiae debitis totam. Molestias eos culpa soluta?'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-12-17 20:00:00'),
  },
  
]
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post, PostType } from "./components/Post/Post";

export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
    
  );
}
