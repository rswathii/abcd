
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Product from './Components/Product';
import Recipe from './Components/Recipe';
import Countries from './Components/Countries';
import Home from './Components/Home';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/recipe" element={<Recipe/>}/>
          <Route path="/countries" element={<Countries/>}/>
        </Routes>
    </div>
  );
}

export default App;
