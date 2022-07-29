import React from 'react';
import styles from './MainPage.module.css';
import Content from './components/Content/Content';
import NewsContent from './components/NewsContent/NewsContent';
import MainMenu from './components/MainMenu/MainMenu';
import WhyUs from './components/WhyUs/WhyUs';

const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <Content/>
            <NewsContent/>
            <MainMenu/>
            <WhyUs/>
        </div>
    );
}

export default MainPage;