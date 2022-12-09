import React from 'react'
import PlantList from './PlantList'

const PlantPage = props => {
    const {plants, changeSearch} = props


    return ( 
        <div>
            <div class="search">
            Search Plants:
            <input placeholder='Plant Name...' onChange={props.changeSearch}></input>
            </div>
            <div>
                <PlantList plants={plants}/>
            </div>
        </div>
    )

}

export default PlantPage