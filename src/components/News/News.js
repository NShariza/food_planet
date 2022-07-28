import React from 'react';
import styles from './News.module.css';

const News = () => {
  return (
    <div className={styles.news}>
      <h2>Новинки</h2>
        <ul>
          <li><a href="#">Бургер</a></li>
          <li><a href="#">Пицца</a></li>
          <li><a href="#">Суши</a></li>
          <li><a href="#">Роллы</a></li>
          <li><a href="#">Салаты</a></li>
           <li><a href="#">Десерты</a></li>
          <li><a href="#">Напитки</a></li>
        </ul>
    </div>
  );
}

export default News;