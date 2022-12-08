import React, {useState, useEffect} from 'react'
import { Switch, Route } from 'react-router-dom'
import UserPlantList from './UserPlantList'

const UserHome = props => {
    const {user} = props 
    // const [userPlants, setUserPlants] = useState([])


    // useEffect(() => {
    //     fetch(`users/${user.id}`)
    //       .then((r) => r.json())
    //       .then(setUserPlants)
    //   }, [])

    return(
        <div>
            <Switch>
                <Route path="/home">
                    <UserPlantList userPlants={user.plants}/>
                </Route>
            </Switch>
        </div>
    )
}

export default UserHome