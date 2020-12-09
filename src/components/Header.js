import React from 'react';
import HeaderDate from './HeaderDate';
import HeaderTitle from './HeaderTitle';
// import "./Header.css";
import styles from '../styles/Header.module.css';

function Header({ todos }) {
  return (
    <div className={styles.Header}>
      <HeaderTitle todos={todos} />
      <HeaderDate />
    </div>
  );
}

export default Header;
