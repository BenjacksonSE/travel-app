import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login"

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) return <Login onLogin={setUser} />;

  // return (

  //   <>
  //       <Login />
  //   </>
  // );
  return (
    <Header />
  )
}

export default App;
