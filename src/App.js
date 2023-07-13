import './App.css';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Bienvenida from './Components/ItemListContainer';
import NavBar from './Components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Bienvenida/>} />
          <Route path='/category/:categoryId' element={<Bienvenida/>} />
          <Route path='/item/:productId' element={<ItemDetailContainer/>} />

        </Routes>
      </BrowserRouter>
    </div>
    
    
     
      
    
  );
}

export default App;
