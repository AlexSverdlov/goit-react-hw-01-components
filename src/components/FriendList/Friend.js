import React from 'react';
import styles from './FriendList.module.css';

const Friend = ({ friend }) => (
  <li className={styles.item} key={friend.id}>
    <span
      className={styles.status}
      style={{
        backgroundColor: friend.isOnline ? 'green' : 'red',
      }}
    ></span>
    <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
    <p className={styles.name}>{friend.name}</p>
  </li>
);

export default Friend;
