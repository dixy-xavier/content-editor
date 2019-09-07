import React, { useState } from 'react';
import Card from '../Card/Card';
import styles from './MainContainer.css';

const MainContainer = () => {
  const [data, setData] = useState('');
  return (
    <div className={styles.container}>
      <Card type="INPUT" setData={setData} />
      <Card type="OUTPUT" data={data} />
    </div>
  );
};

export default MainContainer;
