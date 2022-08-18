import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import styles from './NewsContent.module.css';
import plus from '../../../../media/icons/plus.svg';
import minus from '../../../../media/icons/minus.svg';

const NewsContent = () => {
	const [number, setNumber] = useState(0);
  const [burgers, setBurgers] = useState([]);

  const getBurgers = () => {
      const url = 'http://localhost:3001/burgers';

      fetch(url)
          .then(response => {
              if (response.status === 200) {
                  return response.json();
              } else {
                  toast.error('Произошла ошибка. Статус ошибки: ' + response.status);
              }
          })
          .then(data => setBurgers(data))
  }

  const getProduct = (data) => {
      const id = data.id;
      let cart = JSON.parse(localStorage.getItem('cart')) || {};
      cart[id] = {...data, count: 1}

      localStorage.setItem('cart', JSON.stringify(cart))
  }

  useEffect(() => {
      getBurgers();
  }, [])

	return (
		<div className={styles.NewsContent}>
			<div className={styles.menu}>
				{burgers.map((item) => (
					<div className={styles.product_block} key={item.id}>
						<img src={item.img} alt="" />
						<h2>{item.title}</h2>
						<p className={styles.description}>{item.description}</p>
						<h3>{item.price} сом</h3>
						<p className={styles.amount}>
							<b onClick={() => setNumber(number - 1)}><img src={minus} alt="" /></b>
							{number}
							<b onClick={() => setNumber(number + 1)}><img src={plus} alt="" /></b>
						</p>    
						<button onClick={() => getProduct(item)}>В корзину</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default NewsContent;