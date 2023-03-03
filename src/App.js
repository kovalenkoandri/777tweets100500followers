import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [followerCounter, setFollowerCounter] = useState(localStorage.getItem('followerCounter') || (100500).toLocaleString());
  const [isMouseDown, setIsMouseDown] = useState(
    JSON.parse(localStorage.getItem('isMouseDown')) || false,
  );
  
  useEffect(() => {
    localStorage.setItem('followerCounter', (followerCounter).toLocaleString());
    localStorage.setItem('isMouseDown', isMouseDown);
  }, [followerCounter, isMouseDown]);
  
  const actFollower = () => {
    if (followerCounter === 100500) {
      setFollowerCounter(100501);
      setIsMouseDown(true);
      // save('followerCounter', followerCounter);
      // save('isMouseDown', isMouseDown);
    } else {
      // localStorage.setItem('followerCounter', followerCounter);
      // localStorage.setItem('isMouseDown', isMouseDown);
      setFollowerCounter(100500);
      setIsMouseDown(false);
      // save('followerCounter', followerCounter);
      // save('isMouseDown', isMouseDown);
    }
    
  };
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
            className={`buttonFollow ${isMouseDown ? 'active' : ''}`}
          >
            <span className="buttonFollowSpan">
              {isMouseDown ? 'Following' : 'Follow'}
            </span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
// const save = (key, value) => {
  //   try {
  //     const serializedState = JSON.stringify(value);
  //     localStorage.setItem(key, serializedState);
  //   } catch (error) {
  //     console.error('Set state error: ', error.message);
  //   }
  // };

  // const load = (key) => {
  //   try {
  //     const serializedState = localStorage.getItem(key);
  //     return serializedState === null ? undefined : JSON.parse(serializedState);
  //   } catch (error) {
  //     console.error('Get state error: ', error.message);
  //   }
  // };
  // useEffect(() => {
  //   // load('followerCounter');
  //   // load('isMouseDown');
  //   // setFollowerCounter(localStorage.getItem('followerCounter'));
  //   // setIsMouseDown(localStorage.getItem('isMouseDown'));
  //   console.log(localStorage.getItem('isMouseDown'));
  //   console.log(localStorage.getItem('followerCounter'));
  // }, []);