import './App.css';
import Profile from './components/Profile/Profile';
import user from './db/user.json';

function App() {
  return (
    <>
      <div
        style={{
          marginTop: '100px',
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
      <div
        style={{
          marginTop: '100px',
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
    </>
  );
}

export default App;
