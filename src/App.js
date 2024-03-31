import Navbar from './common -components/Navbar/Navbar';
import Footer from './common -components/Footer/Footer';
import SignupPage from './components/SignupPage/SignupPage';
import LoginPage from './components/LoginPage/LoginPage';
import ProductPage from './components/ProductPage/ProductPage';
import AddProductPage from './components/AddProductPage/AddProductPage';
import UpdateProductPage from './components/UpdateProductPage/UpdateProductPage';
import PrivateRoute from './Routes/PrivateRoute';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route element={<PrivateRoute/>}>
              <Route path="/" element={<ProductPage/>} />
              <Route path="/add-product" element={<AddProductPage/>} />
              <Route path="/update/:id" element={<UpdateProductPage />} />
              <Route path="/logout" element={<h1>Logout</h1>} /> 
              <Route path="/profile" element={<h1>Show Profile</h1>} />
            </Route> 
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
