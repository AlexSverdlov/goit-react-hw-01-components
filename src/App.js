import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './db/user.json';
import statisticalData from './db/statistical-data.json';
import friends from './db/friends.json';
import transactions from './db/transactions.json';

function App() {
  return (
    <>
      {/* Задание №1 */}
      <div
        style={{
          paddingTop: '50px',
          paddingBottom: '20px',
        }}
      >
        <Profile
          name={user.name}
          tag={user.tag}
          avatar={user.avatar}
          location={user.location}
          stats={user.stats}
        />
      </div>

      {/* Задание №2 */}
      <div
        style={{
          paddingTop: '50px',
          paddingBottom: '20px',
          backgroundColor: 'bisque',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
      </div>
      {/* Задание №3 */}
      <div
        style={{
          paddingTop: '50px',
          paddingBottom: '20px',
        }}
      >
        <FriendList friends={friends} />
      </div>
      {/* Задание №4 */}
      <div
        style={{
          paddingTop: '50px',
          paddingBottom: '20px',
          backgroundColor: 'bisque',
        }}
      >
        <TransactionHistory transactions={transactions} />
      </div>
    </>
  );
}

export default App;
