import Pokemon from './components/Pokemon';
import PokemonAxios from './components/PokemonAxios';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Whos that Pokemon!</h1>
      <PokemonAxios  />
    </div>
  );
}

export default App;
