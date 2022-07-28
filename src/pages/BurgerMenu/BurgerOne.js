import React from 'react';
import styles from './BurgerOne.module.css';
import burgerOne from '../../media/images/burger-1.svg';

const BurgerOne = () => {
  return (
    <div className={styles.burgerOne}>
      <img src={burgerOne} alt="" />
        <div>
          <h2>Чизбургер</h2>
          <p>Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль,      кетчуп, майонез</p> 
          <h2>200 сом</h2>
          <button type="button">В корзину</button>
        </div>
    </div>
  );
}

export default BurgerOne;