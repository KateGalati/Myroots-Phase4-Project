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

    
    const handleDelete = id => {
        fetch(`/user_plants/${id}`, {
            method: "DELETE",
          }).then((r) => {
            if (r.ok) {
              setUserPlants((userPlants) =>
                userPlants.filter((plant) => plant.id !== id)
              );
            }
          });
    }



    return(
        <div>
            <UserPlantList user={user} userPlants ={userPlants} handleDelete={handleDelete}/>
        </div>
    )
}

export default UserHome