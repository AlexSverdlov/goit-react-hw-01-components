import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => (
  <div className={styles.container}>
    <table className={styles.transactionHistory}>
      <thead>
        <tr
          style={{
            backgroundColor: 'lightseagreen',
            height: '50px',
          }}
        >
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction, index) => (
          <tr
            key={transaction.id}
            style={{
              backgroundColor: !(index % 2) ? 'ghostwhite' : 'gainsboro',
              height: '50px',
              textAlign: 'center',
            }}
          >
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionHistory;
