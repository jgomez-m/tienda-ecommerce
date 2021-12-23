import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Propiedad Greeting" />
    </div>
  );
}

export default App;
