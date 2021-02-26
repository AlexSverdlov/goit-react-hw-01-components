import React from 'react';
import Friend from './Friend';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <div className={styles.container}>
    <div className={styles.friends}>
      <ul className={styles.items}>
        {friends.map(friend => (
          <Friend friend={friend} />
        ))}
      </ul>
    </div>
  </div>
);

FriendList.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendList;
