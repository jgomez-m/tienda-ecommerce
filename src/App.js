import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <h1>Esta es la Navbar de Bootstrap</h1>
      <NavBar />
      <ItemListContainer greeting="Propiedad Greeting" />
    </div>
  );
}

export default App;
