import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ name, tag, avatar, location, stats }) => (
  <div className={styles.profile}>
    <div>
      <img className={styles.avatar} src={avatar} alt={name} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
    <ul className={styles.stats}>
      <li className={styles.item}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  avatar: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
