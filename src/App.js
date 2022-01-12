import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CacheProvider from './context/CacheProvider';

function App() {
  return (
    <CacheProvider >
      <BrowserRouter>
          <div className="App">
            <header> <NavBar /> </header>
              <Routes>
                  <Route path="/" element={<ItemListContainer />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/category/:categoryName" element={<ItemListContainer />} />
                  <Route path="/item/:id" element={<ItemDetailContainer />} />            
              </Routes>
          </div>
      </BrowserRouter>
    </CacheProvider>
  );
}

export default App;
