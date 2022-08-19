import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Content.module.css';
import burgerOne from '../../../../media/images/burger.svg';
import next from '../../../../media/icons/arrow.svg';

const Content = () => {
  const setActive = ({isActive}) => isActive ? styles.active : "";

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
        <p>
          Доставим заказ вовремя и можете рассчитывать, что еда будет доставлена
          всегда горячим и ароматным.
        </p>
        <NavLink className={setActive} to="/menu"><button>Перейти в меню<img src={next} alt=""/></button></NavLink>
      </div>
      <img className={styles.burger} src={burgerOne} alt="" />
    </div>
  );
}
  
  export default Content;