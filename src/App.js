import "./App.css";
import Profile from "./components/Profile/Profile";
import user from "./db/user.json";

function App() {
  return (
    <Profile
      name={user.name}
      tag={user.tag}
      avatar={user.avatar}
      location={user.location}
      stats={user.stats}
    />
  );
}

export default App;
