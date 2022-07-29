import React, { useState } from "react";
import styles from "./MainMenu.module.css";
import { menu_Pizza, nawBar } from "../../constants";

const MainMenu = () => {
	const [number, setNumber] = useState(0);

	return (
		<div className={styles.MainMenu}>
			<div className={styles.navBar}>
				<h3>Меню</h3>
				<ul>
					{nawBar.map((post) => (
						<li>
							<a href={post.link}>{post.title}</a>
						</li>
					))}
				</ul>
			</div>
			<div className={styles.Content}>
				<div className={styles.filter}>
					<p>Сортировать по:</p>
					<select name="" id="">
						<option value="">По умолчанию</option>
						<option value="">something</option>
						<option value="">better</option>
					</select>
				</div>
				<div className={styles.menu}>
					{menu_Pizza.map((post) => (
						<div className={styles.product_block}>
							<img src={post.img} alt="" />
							<h2>{post.title}</h2>
							<p className={styles.description}>{post.description}</p>
							<h3>{post.price} сом</h3>
							<p className={styles.amount}>
								<b onClick={() => setNumber(number - 1)}>&minus;</b>
								{number}
								<b onClick={() => setNumber(number + 1)}>+</b>
							</p>
							<button>В корзину</button>
						</div>
					))}
					<button className={styles.btn}>Показать еще</button>
				</div>
			</div>
		</div>
	);
};

export default MainMenu;