import React, { useState } from 'react';
import Tabs from '../List/List';
import MarkdownContainer from '../MarkdownContainer/MarkdownContainer';
import styles from './Card.css';

const Card = ({ type = '', setData = f => f, data }) => {
  const isInput = type === 'INPUT';
  const [isRaw, toggleRaw] = useState(false);
  return (
    <div className={styles.container}>
      <Tabs
        data={isInput ? [
          {
            label: 'Enter Markdown',
            onClick: f => f,
            active: true,
          },
        ] : [
          {
            label: 'Preview',
            onClick: () => toggleRaw(false),
            active: !isRaw,
          },
          {
            label: 'Raw HTML',
            onClick: () => toggleRaw(true),
            active: isRaw,
          },
        ]}
        classes={{
          list: styles.list,
          listItem: styles.listItem,
        }}
      />
      <MarkdownContainer
        type={isInput ? type : isRaw ? 'RAW_HTML' : 'PREVIEW'}
        data={data}
        {...isInput ? { setData } : {}}
      />
    </div>
  );
};

export default Card;
