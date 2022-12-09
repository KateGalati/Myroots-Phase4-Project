import React from 'react'
import UserPlant from './UserPlant'
import { Link } from 'react-router-dom'
import { Card } from 'semantic-ui-react'

const UserPlantList = props => {
    const {user, userPlants} = props

    const renderUserPlantList = userPlants.map(userPlant => <Link key={userPlant.id}><UserPlant key={userPlant.id} userPlant={userPlant} user={user}/></Link>)

    return (
        <div>
            <h3>My Plants:</h3>
                <Card.Group centered>
                    {renderUserPlantList}
                </Card.Group>
        </div>
    )

}

export default UserPlantList