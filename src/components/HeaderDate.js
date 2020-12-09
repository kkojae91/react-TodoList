import React, { useState, useEffect } from 'react';
import styles from '../styles/HeaderDate.module.css';

function HeaderDate() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    // console.log('마운트 되었습니다.');
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });

  let getMonth = date.getMonth() + 1;
  let getDate = date.getDate();
  let getDay = date.getDay();

  let getHours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  if (getHours > 12) {
    getHours = `0${getHours - 12}`;
  }

  let getMinutes =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

  let getSeconds =
    date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

  return (
    <div className={styles.HeaderDate}>
      <div className={styles.month}>
        {getMonth}월 {getDate}일
      </div>
      <div className={styles.day}>
        {' '}
        {getDay === 0
          ? 'Sunday'
          : getDay === 1
          ? 'Monday'
          : getDay === 2
          ? 'Tuseday'
          : getDay === 3
          ? 'Wednesday'
          : getDay === 4
          ? 'Thursday'
          : getDay === 5
          ? 'Friday'
          : 'Saturday'}
      </div>
      <div>
        {getHours} : {getMinutes} : {getSeconds}
      </div>
    </div>
  );
}

export default HeaderDate;
