// Импорт компонентов
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
// Импорт данных
import user from './db/user.json';
import statisticalData from './db/statistical-data.json';
import friends from './db/friends.json';
import transactions from './db/transactions.json';
// Импорт css
import './App.css';

function App() {
  return (
    <>
      {/* Задание №1 */}
      <Profile
        name={user.name}
        tag={user.tag}
        avatar={user.avatar}
        location={user.location}
        stats={user.stats}
      />

      {/* Задание №2 */}
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      {/* Задание №3 */}
      <FriendList friends={friends} />

      {/* Задание №4 */}
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
