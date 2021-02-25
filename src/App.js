import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import user from './db/user.json';
import statisticalData from './db/statistical-data.json';

function App() {
  return (
    <>
      {/* Задание №1 */}
      <div
        style={{
          paddingTop: '50px',
          paddingBottom: '20px',
          backgroundColor: 'bisque',
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
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
      </div>
    </>
  );
}

export default App;
