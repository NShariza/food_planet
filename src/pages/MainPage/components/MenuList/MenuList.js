import React from 'react';
import styles from './MenuList.module.css';
import {NavLink} from 'react-router-dom';

const MenuList = () => {

    const setActive = ({isActive}) => isActive ? styles.active : "";

    return (
        <div className={styles.menuList}>
            <h2>Меню</h2>
            <ul className={styles.list}>
                <li><NavLink className={setActive} to="/menu/pizza">Пицца</NavLink></li>
                <li><NavLink className={setActive} to="/menu/burger">Бургер</NavLink></li>
                <li><NavLink className={setActive} to="/menu/sushi">Суши</NavLink></li>
                <li><NavLink className={setActive} to="/menu/rolls">Роллы</NavLink></li>
                <li><NavLink className={setActive} to="/menu/salads">Салаты</NavLink></li>
                <li><NavLink className={setActive} to="/menu/desserts">Десерты</NavLink></li>
                <li><NavLink className={setActive} to="/menu/drinks">Напитки</NavLink></li>
            </ul>
        </div>
    );
};

export default MenuList;