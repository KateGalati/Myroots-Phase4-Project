import React from 'react'
import PlantCard from './PlantCard'
import { Link } from 'react-router-dom'
import { Card } from 'semantic-ui-react'

const PlantList = props => {
    const {plants} = props 

    const renderPlantList = plants.map(plant => <Link key={plant.id}><PlantCard key={plant.id} plant={plant}/></Link>)

    return (
        <div>
            <h3>Plant List:</h3>
                <Card.Group centered>
                    {renderPlantList}
                </Card.Group>
        </div>
    )
}

export default PlantList