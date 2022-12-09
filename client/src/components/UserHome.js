import React, {useState, useEffect} from 'react'
import UserPlantList from './UserPlantList'

const UserHome = props => {
    const {user} = props

    const [userPlants, setUserPlants] = useState([])

    useEffect(() => {
        fetch("/user_plants")
          .then((r) => r.json())
          .then(setUserPlants)
      }, [])

    // useEffect(() => {
    //     fetch(`users/${user.id}`)
    //       .then((r) => r.json())
    //       .then(setUser)
    //   }, [])

    return(
        <div>
            <UserPlantList user={user} userPlants ={userPlants}/>
        </div>
    )
}

export default UserHome