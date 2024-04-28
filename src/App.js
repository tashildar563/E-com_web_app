import logo from './logo.svg';
import './App.css';
import BlankPage from './BlankPage';
import CreateUserForm from './CreateUserForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PurchaseOrder from './PurchaseOrder';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/create-user" element={<CreateUserForm/>}></Route>
        <Route path="/" element={<BlankPage/>} />
        <Route path="/purchase-order" element={<PurchaseOrder/>} />
      </Routes>
    </Router>
  );
};

export default App;
