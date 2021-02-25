import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <div className={styles.friends}>
    <ul className={styles.items}>
      {friends.map(friend => (
        <li className={styles.item} key={friend.id}>
          <span
            className={styles.status}
            style={{
              backgroundColor: friend.isOnline ? 'green' : 'red',
            }}
          ></span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt=""
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  </div>
);

FriendList.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendList;
