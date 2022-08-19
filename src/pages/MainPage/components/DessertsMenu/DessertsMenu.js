import React, {useEffect, useState} from "react";
import toast from 'react-hot-toast';
import styles from "./DessertsMenu.module.css";


const DessertsMenu = () => {
  const [number, setNumber] = useState(0);
  const [desserts, setDesserts] = useState([]);

  const getDesserts = () => {
      const url = 'http://localhost:3001/desserts';

      fetch(url)
          .then(response => {
              if (response.status === 200) {
                  return response.json();
              } else {
                  toast.error('Произошла ошибка. Статус ошибки: ' + response.status);
              }
          })
          .then(data => setDesserts(data))
  }

  const getProduct = (data) => {
      const id = data.id;
      let cart = JSON.parse(localStorage.getItem('cart')) || {};
      cart[id] = {...data, count: 1}

      localStorage.setItem('cart', JSON.stringify(cart))
  }

  useEffect(() => {
      getDesserts();
  }, [])


	return (
		<div className={styles.MainMenu}>
			<div className={styles.Content}>
				<div className={styles.filter}>
					<p>Сортировать по:</p>
					<select name="" id="">-
						<option value="0">По умолчанию</option>
						<option value="1">pizza</option>
						<option value="2">burger</option>
					</select>
				</div>
				<div className={styles.menu}>
					{desserts.map((item) => (
						<div className={styles.product_block} key={item.id}>
							<img src={item.img} alt="" />
							<h3>{item.title}</h3>
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
		</div>
	);
};

export default DessertsMenu;