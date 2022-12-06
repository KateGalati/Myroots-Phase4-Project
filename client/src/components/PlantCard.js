import React from 'react'
import {Card, Image} from 'semantic-ui-react'

const PlantCard = props => {
    const {plant} = props

    return (

        <Card>
            <Image src={plant.image} wrapped ui={false} size='medium'/>
            <Card.Content>
                <Card.Header>{plant.plant_name}</Card.Header>
            </Card.Content>
        </Card>
        
    )

}

export default PlantCard