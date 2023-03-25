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
import MyItems from './Components/MyItems/MyItems';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route
          path='/'
          element={<Home />}
        ></Route>

        <Route
          path='/home'
          element={<Home />}
        ></Route>

        <Route
          path='/updateItem/:updateId'
          element={
            <PrivateRoute>
              <UpdateItem />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path='/add-new-bikes'
          element={
            <PrivateRoute>
              <AddBikes />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path='/manage-stock'
          element={
            <PrivateRoute>
              <ManageStock />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path='/my-items'
          element={
            <PrivateRoute>
              <MyItems />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path='/login'
          element={<Login />}
        ></Route>

        <Route
          path='/register'
          element={<Registration />}
        ></Route>
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;