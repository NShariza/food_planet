import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NotFound.module.css';
import error from '../../../../media/icons/error.png';

const NotFound = () => {
  const setActive = ({isActive}) => isActive ? styles.active : "";

    return (
    <div className={styles.notFound}>
      <div>
        <h1>Упс, ошибочка!</h1>
        <img src={error} alt="" />
      </div>
      <NavLink className={setActive} to="/"><button>Главная</button></NavLink>
    </div>
    );
}

export default NotFound;