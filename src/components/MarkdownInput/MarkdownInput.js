import React from 'react';
import styles from './MarkdownInput.css';

const MarkdownInput = ({ data = '', setData }) => (
  <textarea className={styles.textarea} defaultValue={data} onChange={event => setData(event.target.value)} />
);

export default MarkdownInput;
