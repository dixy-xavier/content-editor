import React, { useState } from 'react';
import List from '../List/List';
import styles from './Dropdown.css';

const Dropdown = () => {
  const [showList, toggleList] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header} onClick={() => toggleList(!showList)}>
        <div className={styles.title}>Select template</div>
      </div>
      {showList && <List
        data={[
          {
            label: 'Template 1',
            onClick: f => f,
          },
          {
            label: 'Template 2',
            onClick: f => f,
          },
          {
            label: 'Template 3',
            onClick: f => f,
          },
        ]}
        classes={{
          list: styles.list,
          listItem: styles.listItem,
        }}
      />}
    </div>
  );
};

export default Dropdown;
