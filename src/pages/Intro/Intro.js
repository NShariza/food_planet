import React from 'react';
import styles from './Intro.module.css';
import burger from '../../media/images/burger.svg';
import arrow from '../../media/icons/arrow.svg';

const Intro = () => {
    return (
        <div className={styles.intro}>
            <div><h1>Доставка вкусной еды <br />
                до 30 минут + напиток <br></br>
                в подарок!
            </h1>
            <p>Доставим заказ вовремя и можете рассчитывать, что <br/>
                еда будет доставлена всегда горячим и ароматным.
            </p>
            <button type="button">Перейти в меню <img src={arrow} alt="" /></button></div>
            <img src={burger} alt="" />
        </div>
    );
}

export default Intro;