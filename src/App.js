import './App.css';
import Dictionary from "./Dictionary";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="ghost"/>
        <footer>
          This app is coded by <a href='https://www.shecodes.io/graduates/123692-blossom-armstrong'>Blossom Armstrong</a> is hosted on <a href='https://app.netlify.com/sites/stalwart-starship-237871/overview'>Netlify</a> and is open sourced on <a href='https://github.com/BLSSMA/dictionary-app'>Github</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
