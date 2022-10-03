import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/products' element={<Product></Product>}></Route>
      </Routes>
    </div>
  );
}

export default App;
