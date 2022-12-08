import React, {useEffect, useState} from "react";
import PlantPage from './components/PlantPage'
import NavBar from './components/NavBar'
import Login from "./components/Login";
import UserHome from "./components/UserHome";

import './App.css';

function App() {
  //set state for user
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (user) {
    return  (
      <div className="App">
        <NavBar />
        <PlantPage />
        <UserHome user={user}/>
      </div>
  )
  } else {
    return <Login onLogin={setUser} />;
  }

// Make a function that displays errors in a li 
  // const userConditional = !currentUser ? <Login error={'please login'} updateUser={updateUser} /> 

}

export default App
