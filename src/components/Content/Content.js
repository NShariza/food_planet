import React from 'react';
import styles from './Content.module.css';
import burgerOne from '../../media/images/burger.svg';
import next from '../../media/icons/arrow.svg';

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
        <p>
          Доставим заказ вовремя и можете рассчитывать, что еда будет доставлена
          всегда горячим и ароматным.
        </p>
        <button>Перейти в меню<img src={next} alt=""/></button>
      </div>
      <img className={styles.burger} src={burgerOne} alt="" />
    </div>
  );
}
  
  export default Content;