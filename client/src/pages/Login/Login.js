import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";
import classes from "./Login.module.scss";

const Login = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(false);
  
  return (
    <>
    {showLogin ? (
        <div className={classes.login}>
          <LoginForm setShowLogin={setShowLogin} onLogin={onLogin} />
        </div>
      ) : (
        <div className={classes.login}>
          <SignupForm setShowLogin={setShowLogin} onLogin={onLogin} />
        </div>
      )}
    </>
  )
}

export default Login
