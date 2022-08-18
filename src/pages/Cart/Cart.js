import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import styles from './Cart.module.css';
import cross from '../../media/icons/cross.png';
import {toast} from "react-hot-toast";

const Cart = () => {

  const [goods, setGoods] = useState([]);
  const setActive = ({isActive}) => isActive ? styles.active : "";

  const getProducts = () => {
    const goods = JSON.parse(localStorage.getItem('cart'));
    setGoods(Object.values(goods));
  }
  const changeCount = (e, data) => {
    const goods = JSON.parse(localStorage.getItem('cart'));
    goods[data.id].count = +e.currentTarget.value;
    console.log(goods);
    localStorage.setItem('cart', JSON.stringify(goods));
    getProducts();
  }
  const getTotalSum = () => {
    return goods.reduce((sum, item) => {
      return sum + (item.count * item.price);
    }, 0);
  }

  const deleteGoods = (id) => {
    const options = {
      method: 'DELETE'
    }
    fetch(options)
      .then(response => {
        if (response.ok) {
          toast.success('Успешно удалено');
        } else {
          toast.error('Ошибка. Статус ошибки: ' + response.status);
        }
      })
  }

useEffect(getProducts, []);

  return (
    <div className={styles.cart_page}>
      <div className={styles.cart_title}>
        {/* <h3>Корзина</h3> */}
        <h3>Товары в вашей корзине</h3>
      </div>
      <table>
      <thead>
      <tr className={styles.products_title}>
        <th colSpan={2}>Продукт</th>
        <th>Количество</th>
        <th>Цена</th>
        <th>К оплате</th>
      </tr>
      </thead>
      <tbody>
      {
        goods.map(item =>
          <tr key={item.id} className={styles.products_in_cart}>
            <td><img src={item.image} alt=""/></td>
            <td>{item.title}</td>
            <td>
              <input onChange={e => changeCount(e, item)} defaultValue={item.count}
                type="number"/>
            </td>
            <td><p><span>{item.price}</span> сом</p></td>
            <td><p><span>{item.count * item.price}</span> сом</p></td>
            <td className={styles.delete_in_cart}>
              <button onClick={() => deleteGoods(item.id)}><img src={cross} alt=""/></button>
            </td>
          </tr>
        )
      }
      </tbody>
      </table>
      <div className={styles.count_element}>
        <h3>Итого: <span>{getTotalSum()}</span><span>сом</span></h3>
      </div>
      <div className={styles.place_order}>
        <NavLink className={setActive} to="/">Продолжить покупки</NavLink>
        <NavLink to="/checkout">
          <button>Оформить заказ</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Cart;