import React, { useState } from 'react';
import List from '../List/List';
import styles from './Dropdown.css';

const Dropdown = ({ list, label }) => {
  const [showList, toggleList] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header} onClick={() => toggleList(!showList)}>
        <div className={styles.title}>{label || 'Select template'}</div>
      </div>
      {showList && <List
        data={list}
        classes={{
          list: styles.list,
          listItem: styles.listItem,
        }}
        onClick={() => toggleList(false)}
      />}
    </div>
  );
};

export default Dropdown;
