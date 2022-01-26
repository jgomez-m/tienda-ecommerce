import './App.css';
import './styles.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CacheProvider from './context/CacheProvider';
import { BuyerForm } from './components/BuyerForm';

library.add(fas);//Fontawesome icons 


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
                  <Route path="/buyerform" element={<BuyerForm />} />          
              </Routes>
          </div>
      </BrowserRouter>
    </CacheProvider>
  );
}

export default App;
