import React from 'react';
import { MdAdd } from 'react-icons/md';
import styles from '../styles/Footer.module.css';

function Footer({ inputValue, onChange, onClick, onKeyPress }) {
  return (
    <div className={styles.Footer}>
      <input
        value={inputValue}
        onChange={onChange}
        onKeyPress={onKeyPress}
        className={styles.Footer_input}
        type="text"
        placeholder="enter your to-do"
      />
      <button className={styles.footer_button} type="button" onClick={onClick}>
        <MdAdd />
      </button>
    </div>
  );
}

export default Footer;
