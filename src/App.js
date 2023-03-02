import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="wrapperStatistics">
            <span className="tweetsText">777 tweets</span>
            <span className="followersText">100,500 followers</span>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <button type="button" className="ButtonFollow">
            <span className="ButtonFollowSpan">Following</span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
