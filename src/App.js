import HomeScreen from './HomeScreen/HomeScreen.js'
import './App.css';


function App() {
  return (
  <div className="maxHeight">
    <div>
    <header className="Header"><h1>Eqaim Blog</h1></header>
    </div>
      <header className="App-header">
          <div className="BlogPostPage">
            <HomeScreen  className="FullPage"></HomeScreen>
          </div>
      </header>
    </div>
  );
}

export default App;
