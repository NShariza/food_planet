import React, {useState} from 'react';
import {toast} from 'react-hot-toast';
import s from './AddProducts.module.css';

const AddProducts = () => {
  const [name, setName] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [price, setPrice] = useState(null);
  const [desc, setDesc] = useState(null);
  const [category, setCategory] = useState(null);

  const getValue  = (e) => {
    if(e.currentTarget.id === 'name') {
      setName(e.currentTarget.value);
    } else if(e.currentTarget.id === 'img_url'){
      setImgUrl(e.currentTarget.value);
    } else if(e.currentTarget.id === 'price'){
      setPrice(e.currentTarget.value);
    } else if(e.currentTarget.id === 'desc'){
      setDesc(e.currentTarget.value);
    } else if(e.currentTarget.id === 'category'){
      setCategory(e.currentTarget.value);
    }
  }

  const saveData = () => {
    const data = {
      price,
      name,
      img: imgUrl,
      description: desc
    }
    let url = '';

    if(category === '1'){
      url = 'http://localhost:3001/burgers';
    } else if(category === '2'){
      url = 'http://localhost:3001/pizzas';
    }

    const options = {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(data),
    }

    fetch(url, options)
      .then(response => {
        if (response.ok){
          toast.success('Товар успешно добавлен');
        } else {
           toast.error('Что-то произошло. Статус: ' + response.status)
        }
      })
  }


  return(
    <div className={s.container}>
      <h1>Добавление товаров</h1>
      <form className={s.form} action="javascript:void(0)">
        <div>
          <label htmlFor="name">Название</label>
          <input type="text" id="name" onChange={getValue}/>
        </div>
        <div>
          <label htmlFor="img_url">Адрес изображения</label>
          <input type="text" id="img_url" onChange={getValue}/>
        </div>
        <div>
          <label htmlFor="price">Цена</label>
          <input type="number" id="price" onChange={getValue}/>
        </div>
        <div>
          <label htmlFor="desc">Описание</label>
          <textarea id="desc" onChange={getValue}></textarea>
        </div>
        <div>
          <label htmlFor="category">Категория</label>
          <select id="category" onChange={getValue}>
            <option value="0">Выберите</option>
            <option value="1">Pizzas</option>
            <option value="2">Burgers</option>
            <option value="3">Sushi</option>
            <option value="4">Rolls</option>
            <option value="5">Salads</option>
            <option value="6">Desserts</option>
            <option value="7">Drinks</option>

          </select>
        </div>
        <div>
          <button onClick={saveData}>Добавить</button>
        </div>
      </form>
    </div>
  );
}

export default AddProducts;