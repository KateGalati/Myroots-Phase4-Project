import React from 'react'
import {Card, Button} from 'semantic-ui-react'

const UserPlant = props => {
    const {user, userPlant, handleDelete} = props

    return (
        user.id === userPlant.user.id ?
        <div class='plantcard'>
        <Card ui fluid card color='olive'>
            <img src={userPlant.plant.image} wrapped ui={false} height={300} width={300} alt="plant"/>
            <Card.Content>
                <Card.Header>{userPlant.plant.plant_name}</Card.Header>
                <p class="scientific">{userPlant.plant.scientific_name}</p>
                <div class='plantinfo'>
                    Water: {userPlant.plant.water_requirement}
                    </div>
                    <div class='plantinfo'>
                    Humidity: {userPlant.plant.humidity}
                    </div>
                <div class='plantinfo'>
                    Light: {userPlant.plant.light_requirement}
                </div>
                <Button onClick={() => handleDelete(userPlant.plant.id)}>Delete Plant</Button>
            </Card.Content>
        </Card>
        </div>
        : null
    )

}

export default UserPlant
