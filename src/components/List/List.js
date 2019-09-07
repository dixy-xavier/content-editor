import classNames from 'classnames';
import React from 'react';
import styles from './List.css';

const List = ({ data, classes = {} }) => (
  <ul className={classNames(styles.list, classes.list)}>
    {data.map(item => (
      <li
        key={item.label}
        className={classNames(styles.listItem, classes.listItem, { [styles.active]: item.active })}
        onClick={item.onClick}
      >
        {item.label}
      </li>
    ))}
  </ul>
);

export default List;
