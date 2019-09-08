import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './MainContainer.css';

const MainContainer = ({ template = '' }) => {
  const [originalTemplate, setOriginalData] = useState(template);
  const [data, setData] = useState(template);
  useEffect(() => {
    if (template !== originalTemplate) {
      console.log('inside effect');
      setOriginalData(template);
      setData(template);
    }
  });
  return (
    <div className={styles.container}>
      <Card type="INPUT" setData={setData} data={data} />
      <Card type="OUTPUT" data={data} />
    </div>
  );
};

export default MainContainer;
