import './App.css';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from './Pages/AdminDashboard';
import User from './Pages/User';
import { Provider } from "react-redux";
import store from './redux/store';
import SignUp from './components/SignUp/Signup';
import Login from './components/Login/Login';
import UserSignup from './Pages/User/UserSignup';
import UserLogin from './Pages/User/UserLogin';
import AllUsers from './Pages/AdminDashboard/AllUsers';



function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <CssBaseline/>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<AdminDashboard/>} />
        <Route exact path='/alluser' element={<AllUsers/>} />
        {/* <Route  path='/user' element={<User/>} /> */}
        <Route  path='/signup' element={<UserSignup/>} />
        <Route  path='/login' element={<UserLogin/>} />
      </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
