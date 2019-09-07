import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import MainContainer from '../MainContainer/MainContainer';
import styles from './Main.css';

const Main = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.header}>Convert Markdown to HTML</h1>
    <Dropdown />
    <MainContainer />
  </div>
);

export default Main;
