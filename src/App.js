import React, { useState } from 'react'
import MainPage from './pages/MainPage';
import './App.css';
import LoginForm from './components/loginForm/LoginForm';
import Logout from './assets/login/loginTwo.png'
import { AppLogin } from './components/loginForm/style';

function App() {

  
  const adminUser = {
    password: "Lieben_sH"
  }
  const [user, setUser] = useState({  email: "" });
  const [error, setError] = useState("")

  const Login = details => {
    console.log(details);

    if (details.password == adminUser.password) {
      console.log('Logged in');
      setUser({
      })
    } else {
      console.log("Details do not match");
      setError("Details do not match")
    }
  }
  const logout = () => {
    setUser({  email: "" })
  }

 
  return (
    <>
       {(user.email != "") ? (
        <div className="welcome">
         <MainPage/>
         <AppLogin>
            <div className='btn-log'  onClick={logout}>
            <img src={Logout} />
            <button>Password</button>
            </div>
          </AppLogin>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </>
  );
}

export default App;
