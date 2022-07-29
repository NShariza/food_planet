import React from 'react';
import {whyUs, whyUsList} from '../../../../constants';
import styles from './WhyUs.module.css';



const WhyUs = () => {
    return (
		<div className={styles.whyUs}>
			<h2>Почему выбирают нас:</h2>
			<div className={styles.list}>
				{whyUsList.map((post) => (
					<div className={styles.something}>
						<img src={post.img} alt="" />
						<h3>{post.title}</h3>
						<p className={styles.text}>{post.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default WhyUs;
