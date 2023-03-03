import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [followerCounter, setFollowerCounter] = useState(100500);
   const [isMouseDown, setIsMouseDown] = useState(false);

   const handleMouseDown = () => {
     setIsMouseDown(true);
   };

   const handleMouseUp = () => {
     setIsMouseDown(false);
   };
  const actFollower = () => {
    followerCounter === 100500 ? setFollowerCounter(followerCounter + 1) : setFollowerCounter(followerCounter - 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="wrapperStatistics">
            <span className="tweetsText">777 tweets</span>
            <span className="followersText">
              {followerCounter.toLocaleString()}followers
            </span>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <button
            type="button"
            onClick={actFollower}
            className={`buttonFollow ${isMouseDown ? 'active' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            <span className="buttonFollowSpan">Follow</span>
            <span className="buttonFollowSpan">Following</span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
