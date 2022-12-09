import React from 'react'
import {Card} from 'semantic-ui-react'

const PlantCard = props => {
    const {plant} = props

    return (
        <div class='plantcard'>
        <Card ui fluid card color='olive'>
            <img src={plant.image} wrapped ui={false} height={300} width={300} alt="plant"/>
            <Card.Content>
                <Card.Header>{plant.plant_name}</Card.Header>
                <p class="scientific">{plant.scientific_name}</p>
                <div class='plantinfo'>
                    Water: {plant.water_requirement}
                    </div>
                    <div class='plantinfo'>
                    Humidity: {plant.humidity}
                    </div>
                <div class='plantinfo'>
                    Light: {plant.light_requirement}
                </div>
            </Card.Content>
        </Card>
        </div>
    )

}

export default PlantCard