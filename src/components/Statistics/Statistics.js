import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <div className={styles.statistics}>
    {!!title && <h2 className={styles.title}>{title.toUpperCase()}</h2>}
    <ul className={styles.statList}>
      {stats.map(stat => (
        <li
          className={styles.item}
          key={stat.id}
          style={{
            backgroundColor: randColor(),
          }}
        >
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </div>
);

function randColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
