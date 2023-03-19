import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBikes from './Components/AddBikes/AddBikes';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ManageStock from './Components/ManageStock/ManageStock';
import UpdateItem from './Components/UpdateItem/UpdateItem';
import Login from './Components/LoginRegistration/Login';
import Registration from './Components/LoginRegistration/Registration';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/updateItem/:updateId' element={<UpdateItem />}></Route>
        <Route path='/manage-stock' element={<ManageStock />}></Route>
        <Route path='/add-new-bikes' element={<AddBikes />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Registration />}></Route>
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;