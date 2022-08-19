import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import styles from './SushiMenu.module.css';

const SushiMenu = () => {
	const [number, setNumber] = useState(0);
  const [sushi, setSushi] = useState([]);

  const getSushi = () => {
      const url = 'http://localhost:3001/sushi';

      fetch(url)
          .then(response => {
              if (response.status === 200) {
                  return response.json();
              } else {
                  toast.error('Произошла ошибка. Статус ошибки: ' + response.status);
              }
          })
          .then(data => setSushi(data))
  }

  const getProduct = (data) => {
      const id = data.id;
      let cart = JSON.parse(localStorage.getItem('cart')) || {};
      cart[id] = {...data, count: 1}

      localStorage.setItem('cart', JSON.stringify(cart))
  }

  useEffect(() => {
      getSushi();
  }, [])

	return (
		<div className={styles.NewsContent}>
			<div className={styles.menu}>
				{sushi.map((item) => (
					<div className={styles.product_block} key={item.id}>
						<img src={item.img} alt="" />
						<h2>{item.title}</h2>
						<p className={styles.description}>{item.description}</p>
						<h3>{item.price} сом</h3>
						<p className={styles.amount}>
							<b onClick={() => setNumber(number - 1)}>-</b>
							{number}
							<b onClick={() => setNumber(number + 1)}>+</b>
						</p>    
						<button onClick={() => getProduct(item)}>В корзину</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default SushiMenu;