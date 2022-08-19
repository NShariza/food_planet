import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../media/icons/logo.svg';
import phone from '../../media/icons/phone.svg';
// import arrow from '../../media/icons/menu-arrow.svg';
import cart from '../../media/icons/cart.svg';

const Header = () => {

	const setActive = ({isActive}) => isActive ? styles.active : "";

    return (
      <>
        <header>
          <ul>
            <NavLink className={setActive} to="/"><img src={logo} alt=""/></NavLink>
            <li><NavLink className={setActive} to="/">Главная</NavLink></li>
            <li><NavLink className={setActive} to="/menu">Меню</NavLink></li>
            <li><NavLink className={setActive} to="/delivery">Доставка</NavLink></li>
            <li><NavLink className={setActive} to="/contacts">Контакты</NavLink></li>
            <li><a href="tel:+996500405988"><img src={phone} alt=""/>+996500405988</a></li>
            <li className={styles.bundle}>
              <NavLink className={setActive} to="/cart"><img src={cart} alt=""/>
                <span className={styles.count}>0</span>
              </NavLink>
            </li>
          </ul>
        </header>
        <Outlet/>
      </>
    );
};

export default Header;

// 	const setActive = ({isActive}) => isActive ? styles.active : "";
// 	return (
// 		<header className={styles.header}> 
// 			<a href="/"><img src={logo} alt="" /></a>
// 			<div>
// 				<ul>
// 					<li>
// 						<a href="/">Главная</a>
// 					</li>
// 					<li>
// 						<a href="/menu">Меню </a>
// 						<img src={arrow} alt="" />
// 					</li>
// 					<li>
// 						<a href="/delivery">Доставка</a>
// 					</li>
// 					<li>
// 						<a href="/contacts">Контакты</a>
// 					</li>
// 					<li>
// 						<a href="/phone"> <img src={phone} alt="" /> +996500405988</a>
// 					</li>
// 					<li><NavLink className={setActive} to="/cart"><a href="/#"><img src={cart} alt="" /><b></b></a></NavLink></li>
// 				</ul>
// 			</div>
// 		</header>
// 	);
// };

// export default Header;

