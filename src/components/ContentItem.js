import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import styles from '../styles/ContentItem.module.css';

function ContentItem({ todo, onTrashClick, onToggle }) {
  const onClick = () => {
    onTrashClick(todo.id);
  };

  const onToggleClick = () => {
    onToggle(todo.id);
  };

  return (
    <div className={styles.ContentItem}>
      <div className={styles.ContentItem_title} onClick={onToggleClick}>
        {todo.checked ? (
          <MdCheckBox className={styles.checked_icon} />
        ) : (
          <MdCheckBoxOutlineBlank className={styles.unChecked_icon} />
        )}
        <p
          className={
            todo.checked
              ? styles.ContentItem_text_checked
              : styles.ContentItem_text
          }
        >
          {todo.text}
        </p>
      </div>
      <BsFillTrashFill className={styles.trash_icon} onClick={onClick} />
    </div>
  );
}

export default ContentItem;
