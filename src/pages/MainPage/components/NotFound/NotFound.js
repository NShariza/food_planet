import React from 'react';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>This page could not be found.</p>
    </div>
    );
}

export default NotFound;