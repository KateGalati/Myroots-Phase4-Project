import React from 'react'
import {Card} from 'semantic-ui-react'

const UserPlant = props => {
    const {userPlant} = props

    return (
        <Card ui fluid card >
            <img src={userPlant.image} wrapped ui={false} height={300} width={300}/>
            <Card.Content>
                <Card.Header>{userPlant.plant_name}</Card.Header>
            </Card.Content>
        </Card>
    )

}

export default UserPlant
