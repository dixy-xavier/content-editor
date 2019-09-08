import React from 'react';
import MarkdownInput from '../MarkdownInput/MarkdownInput';
import MarkdownOutput from '../MarkdownOutput/MarkdownOutput';
import styles from './MarkdownContainer.css';

const getElement = (type, setData, data) => {
  switch (type) {
    case 'INPUT':
      return <MarkdownInput setData={setData} data={data} />;
    case 'PREVIEW':
      return <MarkdownOutput data={data} />;
    case 'RAW_HTML':
      return <textarea readOnly />;
  }
};

const MarkdownContainer = ({ type, setData, data }) => (
  <div className={styles.container}>
    {getElement(type, setData, data)}
  </div>
);

export default MarkdownContainer;
