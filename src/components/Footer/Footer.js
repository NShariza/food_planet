import React from "react";
import logo from "../../media/icons/white-logo.svg";
import phone from "../../media/icons/white-phone.svg";
import styles from "./Footer.module.css";
import {NavLink} from "react-router-dom";


const Footer = () => {

	const setActive = ({isActive}) => isActive ? styles.active : "";

    return (
        <footer className={styles.footer}>
            <ul>
                <img src={logo} alt=""/>
                <li><NavLink className={setActive} to="/">Главная</NavLink></li>
                <li><NavLink className={setActive} to="/menu">Меню</NavLink></li>
                <li><NavLink className={setActive} to="/delivery">Доставка</NavLink></li>
                <li><NavLink className={setActive} to="/contacts">Контакты</NavLink></li>
                <li><a href="tel:+996500405988"><img src={phone} alt=""/>+996500405988</a></li>
            </ul>
        </footer>
    );
};

export default Footer;