import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from '../Avatar/Avatar'
import styles from "./Comment.module.css";


interface CommentProps{
  content: string;
  onDeleteComment: (comment:string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(content);
  }

  function handleLikeComment(){
    setLikeCount(likeCount + 1);
  }
  return (
    <div className={styles.comment}>
       <Avatar hasBorder={false} src="https://github.com/diego3g.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ale Moreira</strong>
              <time
                title="14 de Dezembro à 08:13h"
                dateTime="2023-12-14 08:13:30"
              >
                cerca de 2h atrás.
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
                <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
            <button onClick={handleLikeComment}>
                <ThumbsUp />
                Aplaudir <span>{likeCount}</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
