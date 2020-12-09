import React from 'react';
import ContentItem from './ContentItem';
import styles from '../styles/Content.module.css';
import { BiWinkSmile } from 'react-icons/bi';

function Content({ todos, onTrashClick, onToggle }) {
  return (
    <div className={todos.length === 0 ? styles.Content_empty : styles.Content}>
      {todos.length === 0 ? (
        <div className={styles.empty_box}>
          <BiWinkSmile className={styles.smile_icon} />
          <div className={styles.Content_desc_empty}>할 일을 추가해 주세요</div>
        </div>
      ) : (
        todos.map((todo) => {
          return (
            <ContentItem
              key={todo.id}
              todo={todo}
              onTrashClick={onTrashClick}
              onToggle={onToggle}
            />
          );
        })
      )}
    </div>
  );
}

export default Content;
