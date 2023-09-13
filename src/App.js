import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Analytics from './pages/Analytics';
import Comment from './pages/Comment';
import Product from './pages/Product';
import ProductList from './pages/ProductList';

function App() {
  return (
    <BrowserRouter>
     <SideBar>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/comment" element={<Comment/>} />
        <Route path="/analitycs" element={<Analytics/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/productList" element={<ProductList/>} />
      </Routes>
     </SideBar>
     </BrowserRouter>
    
  );
}

export default App;
