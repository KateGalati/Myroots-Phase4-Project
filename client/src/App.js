import React, {useEffect, useState} from "react";
import PlantPage from './components/PlantPage'
import NavBar from './components/NavBar'
import Login from "./components/Login";
import Home from "./components/Home";

import './App.css';

function App() {

  //set state for user
  const [currentUser, setCurrentUser] = useState(false)

  // const userConditional = !currentUser ? <Login error={'please login'} updateUser={updateUser} /> 

  return (
      <div className="App">
        <NavBar />
        <PlantPage />
      </div>
  )
}

export default App;
