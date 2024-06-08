import './App.css';
import Card from './Components/Card';
import Cards from './Components/Cards';
import Description from './Components/Description';

function App() {
  return (
    <div className="App">
      <div className='AppContainer'>
        <Description />
        <Cards />
      </div>
    </div>
  );
}

export default App;
