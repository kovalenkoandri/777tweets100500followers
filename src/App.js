import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [followerCounter, setFollowerCounter] = useState(Number(localStorage.getItem('followerCounter')) || 100500);
  
  useEffect(() => {
    localStorage.setItem('followerCounter', followerCounter);
  }, [followerCounter]);
  
  const actFollower = () => {
    setFollowerCounter((prevCounter) =>
      prevCounter === 100500 ? 100501 : 100500,
    );
    
  };
  console.log(followerCounter);
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="wrapperStatistics">
            <span className="tweetsFollowersText">777 tweets</span>
            <span className="tweetsFollowersText">
              {followerCounter.toLocaleString()} followers
            </span>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <button
            type="button"
            onClick={actFollower}
            className={`buttonFollow ${
              followerCounter === 100501 ? 'active' : ''
            }`}
          >
            <span className="buttonFollowSpan">
              {followerCounter === 100501 ? 'Following' : 'Follow'}
            </span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;

