import React from 'react';
import styles from './Header.module.css';
import logo from '../../media/icons/logo.svg'

const Header = () => {
    return (
        <div className={styles.header}>
            <ul>
                <li><a href="/logo"><img src={logo} alt="" /></a></li>
                <li><a href="/main">Главная</a></li>
                <li><a href="/menu">Меню</a></li>
                <li><a href="/delivery">Доставка</a></li>
                <li><a href="/contacts">Контакты</a></li>
                <li><a href="/phone">+996500405988</a></li>
            </ul>
        </div>
    );
}

export default Header;