import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ManageStock from './Components/ManageStock/ManageStock';
import UpdateItem from './Components/UpdateItem/UpdateItem';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/updateItem/:updateId' element={<UpdateItem />}></Route>
        <Route path='/manage-stock' element={<ManageStock />}></Route>
      </Routes>
    </div>
  );
}

export default App;