import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import MainContainer from '../MainContainer/MainContainer';
import TEMPLATES from './Main.constants';
import styles from './Main.css';

const Main = () => {
  const [template, setTemplate] = useState(TEMPLATES.template1);
  const list = Object.entries(TEMPLATES).map(([key, value]) => ({ ...value, onClick: () => setTemplate(TEMPLATES[key]) }));
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Convert Markdown to HTML</h1>
      <Dropdown list={list} label={template.label} />
      <MainContainer template={template.template} />
    </div>
  );
};

export default Main;
