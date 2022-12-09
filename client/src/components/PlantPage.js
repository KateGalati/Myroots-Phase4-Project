import React from 'react'
import PlantList from './PlantList'

const PlantPage = props => {
    const {plants} = props


    return (
        <div>
            <PlantList plants={plants}/>
        </div>
    )

}

export default PlantPage