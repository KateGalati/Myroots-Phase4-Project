import React from 'react'
import {Card} from 'semantic-ui-react'

const PlantCard = props => {
    const {plant} = props

    return (
        <Card ui fluid card >
            <img src={plant.image} wrapped ui={false} height={300} width={300}/>
            <Card.Content>
                <Card.Header>{plant.plant_name}</Card.Header>
            </Card.Content>
        </Card>
    )

}

export default PlantCard