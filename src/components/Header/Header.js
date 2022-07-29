import React from 'react';
import styles from './Header.module.css';
import logo from '../../media/icons/logo.svg';
import phone from '../../media/icons/phone.svg';
import arrow from '../../media/icons/menu-arrow.svg';
import cart from '../../media/icons/cart.svg';

const Header = () => {
	return (
		<header className={styles.header}> 
			<a href="/"><img src={logo} alt="" /></a>
			<div>
				<ul>
					<li>
						<a href="/#">Главная</a>
					</li>
					<li>
						<a href="/#">Меню </a>
						<img src={arrow} alt="" />
					</li>
					<li>
						<a href="/#">Доставка</a>
					</li>
					<li>
						<a href="/#">Контакты</a>
					</li>
					<li>
						<a href="/#"> <img src={phone} alt="" /> +996500405988</a>
					</li>
					<li>
						<a href="/#">
							<img src={cart} alt="" /><b>1</b></a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;