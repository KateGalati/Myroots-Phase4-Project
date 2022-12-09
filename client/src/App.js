import React, {useEffect, useState} from "react";
import PlantPage from './components/PlantPage'
import NavBar from './components/NavBar'
import Login from "./components/Login";
import UserHome from "./components/UserHome";
import { Switch, Route } from 'react-router-dom'

import './App.css';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser}/>

    return  (
      <div className="App">
        
        <NavBar setUser={setUser}/>
        <main>
          <Switch>
            <Route path="/home">
                <UserHome user={user}/>
            </Route>
            <Route path="/plants">
                <PlantPage />
            </Route>
          </Switch> 
        </main>   
      </div>
  )

// Make a function that displays errors in a li 
// const userConditional = !currentUser ? <Login error={'please login'} updateUser={updateUser} /> 

}

export default App
