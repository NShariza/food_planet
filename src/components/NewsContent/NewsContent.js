import React, { useState } from "react";
import { nawBar, New_Content } from '../../constants';
import styles from './NewsContent.module.css';
import plus from '../../media/icons/plus.svg';
import minus from '../../media/icons/minus.svg';

const NewsContent = () => {
	const [number, setNumber] = useState(0);

	return (
		<div className={styles.NewsContent}>
			<div className={styles.navBar}>
				<h3>Новинки</h3>
				<ul>
					{nawBar.map((post) => (
						<li>
							<a href={post.link}>{post.title}</a>
						</li>
					))}
				</ul>
			</div>
			<div className={styles.menu}>
				{New_Content.map((post) => (
					<div className={styles.product_block}>
						<img src={post.img} alt="" />
						<h2>{post.title}</h2>
						<p className={styles.description}>{post.description}</p>
						<h3>{post.price} сом</h3>
						<p className={styles.amount}>
							<b onClick={() => setNumber(number - 1)}><img src={minus} alt="" /></b>
							{number}
							<b onClick={() => setNumber(number + 1)}><img src={plus} alt="" /></b>
						</p>
						<button>В корзину</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default NewsContent;