import React from 'react';
import styles from '../styles/HeaderTitle.module.css';

function HeaderTitle({ todos }) {
  let todoLength = todos.filter((todo) => todo.checked === false).length;
  return (
    <div className={styles.HeaderTitle}>
      <div>Today's to-do {todoLength}</div>
    </div>
  );
}

export default HeaderTitle;
