import {useState} from "react";
import classes from "./SignupForm.module.scss"

const LoginForm= ({ setShowLogin, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        name: name
      }),
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
          <h1>Signup</h1>
          <div className={classes.forminput}>
            <label>Name</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className={classes.forminput}>
            <label>Username</label>
            <input
                type="text"
                id="username"
                value={username}
                autoComplete="off"
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
          <div className={classes.forminput}>
            <label>Confirm Password</label>
            <input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                autoComplete="current-password"
            />
          </div>
          <button type="submit" className={classes.submitbutton}>Submit</button>
          <hr />
          <p>
            Already have an account? &nbsp;
            <button className={classes.loginbutton} onClick={() => setShowLogin(true)}>
              Login
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
