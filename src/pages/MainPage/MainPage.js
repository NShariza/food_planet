import React from 'react';
import styles from './MainPage.module.css';
import Content from './components/Content/Content';
import NewsList from './components/NewsList/NewsList';
import NewsContent from './components/NewsContent/NewsContent';
import MenuList from './components/NewsList/NewsList';
import MainMenu from './components/MainMenu/MainMenu';
import WhyUs from './components/WhyUs/WhyUs';
import Feedback from './components/Feedback/Feedback';

const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <Content/>
            <NewsList/>
            <NewsContent/>
            <MenuList/>
            <MainMenu/>
            <WhyUs/>
            <Feedback/>
        </div>
    );
}

export default MainPage;