import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import UpdateItem from './Components/UpdateItem/UpdateItem';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/updateItem/:updateId' element={<UpdateItem />}></Route>
      </Routes>
    </div>
  );
}

export default App;