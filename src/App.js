import React, { useState,useEffect } from "react"
import facade from "./facades/apiFacade";
import LoggedIn from "./Loggedin";
import LogIn from "./components/Login";
import Home from './components/home';
import Header from './components/header';
import User from "./components/user";
import Admin from "./components/admin";
import Owner from "./components/Owner";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch, 
  NavLink,
  Prompt
} from "react-router-dom";
import Boat from "./components/Boat";

 

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('All is good ... so far');

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setErrorMessage('Logged out.')
  };


  return (
    <div>
  <Header facade={facade} loggedIn={loggedIn} />
  <Switch>
    <Route exact path="/">
    <Home
              logout={logout}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              facade={facade}
              setErrorMessage={setErrorMessage}
            />
    </Route>

    <Route exact path="/user">
    {facade.hasUserAccess('user', loggedIn) && 
              <User facade={facade} setErrorMessage={setErrorMessage} />}
    </Route>

    <Route exact path="/admin">
    {facade.hasUserAccess('admin', loggedIn) && 
              <Admin facade={facade} setErrorMessage={setErrorMessage} />}
    </Route>

    <Route path="/owner">
      <Owner facade={facade} setErrorMessage={setErrorMessage} />
    </Route>

    <Route path="/create">
      <Boat facade={facade} setErrorMessage={setErrorMessage} />
    </Route>
  </Switch>
    </div>
  );
 
}
export default App;

/* <div>
      {!loggedIn ? (<LogIn login={login} />) :
        (<div>
          <LoggedIn facade={facade} />
          <button onClick={logout}>Logout</button>
        </div>)}
    </div>
*/