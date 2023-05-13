import './App.css';
import { useSelector } from 'react-redux';
import LoginForm from "./components/LoginForm"
import Profile from "./components/Profile"
import Navbar from "./components/Navbar"
import Protected from "./components/Protected"
import Unprotected from "./components/Unprotected"
import Pagenotfound from "./components/Pagenotfound"
const { Routes, Route, BrowserRouter } = require("react-router-dom");

function App() {
  const access_info = useSelector( (state) => state.auth )
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/login' element={
            <Unprotected isLoggedIn={access_info.authState}>
              <LoginForm />
            </Unprotected>  
          }/>
          <Route path='/' element={
            <Protected isLoggedIn={access_info.authState}>
                    <Profile />
            </Protected> 
          } />
          <Route path='/*' element={ <Pagenotfound /> } />
        </Routes> 
      </BrowserRouter>  
    </div>
  );
}

export default App;
