import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemCount from './components/ItemCount';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route path="/cart" element={<ItemCount stock={10} initial={1} 
                onAdd={(num) => window.alert(`Productos agregados: ${num}`)} />}  
        />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
