import React, { useEffect, useState } from 'react';
import styles from './MarkdownInput.css';

const MarkdownInput = ({ data = '', setData }) => {
  const [originalData, setOriginalData] = useState(data);
  const [currentValue, setValue] = useState(data);
  useEffect(() => {
    if (data !== originalData) {
      console.log('inside effect');
      setOriginalData(data);
      setValue(data);
    }
  });
  return (
    <textarea className={styles.textarea} value={currentValue} onChange={event => {
      setValue(event.target.value);
      setData(event.target.value);
    }} />
  );
};

export default MarkdownInput;
