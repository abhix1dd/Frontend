import HomeScreen from './HomeScreen/HomeScreen.js'
import './App.css';


function App() {
    // console.log(process.argv);
  return (
  <div>
    <div>
    <header>Eqaim Blog</header>
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
