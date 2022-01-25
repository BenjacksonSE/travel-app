import {useState} from "react";
import classes from "./LoginForm.module.scss"

const LoginForm= ({ setShowLogin, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <>
      <div className={classes.loginform}>
        <div className={classes.loginform__wrapper}>
        <form onSubmit={handleSubmit}>
          <h1 >Login</h1>
          <div className={classes.forminput}>
            <label>Username</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
            />
          </div>
          <div className={classes.forminput}>
            <label>Password</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                autoComplete="current-password"
            />
          </div>
          <button type="submit" className={classes.submitbutton}>Submit</button>
          <hr />
          <p>
            Don't have an account? &nbsp;
            <button className={classes.signupbutton} onClick={() => setShowLogin(false)}>
              Sign up
            </button>
          </p>
          <div>
            {errors.map((err) => (
            <p key={err}>{err}</p>
        ))}
          </div>
        </form>
        
        </div>
      </div>
    </>
  );
};

export default LoginForm;
