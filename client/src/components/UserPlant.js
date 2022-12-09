import React from 'react'
import {Card} from 'semantic-ui-react'

const UserPlant = props => {
    const {user, userPlant} = props
    console.log(userPlant)

    const showUserPlants = () => {

    }
    
    return (
        <Card ui fluid card >
            <img src={userPlant.plant.image} wrapped ui={false} height={300} width={300}/>
            <Card.Content>
                <Card.Header>{userPlant.plant.plant_name}</Card.Header>
            </Card.Content>
        </Card>
    )

}

export default UserPlant
