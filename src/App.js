import logo from './logo.svg';
import './App.css';
import BlankPage from './BlankPage';
import CreateUserForm from './CreateUserForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PurchaseOrder from './PurchaseOrder';
import Home from './home';
import LandingPage from './landingPage';
import ProductDetailsComponent from './Component/ProductDetailsComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/create-user" element={<CreateUserForm/>}></Route>
        <Route path="/" element={<BlankPage/>} />
        <Route path="/purchase-order" element={<PurchaseOrder/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/landing-page" element={<LandingPage/>} />
        <Route path="/product-details-page" element={<ProductDetailsComponent/>} />
      </Routes>
    </Router>
  );
};

export default App;
