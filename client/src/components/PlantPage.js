import React, {useState, useEffect} from 'react'
import PlantList from './PlantList'
import { Switch, Route } from 'react-router-dom'

const PlantPage = () => {

    const [plants, setPlants] = useState([])

    useEffect(() => {
      fetch("/plants")
        .then((r) => r.json())
        .then(setPlants)
    }, [])

    return (
        <div>
            <Switch>
                <Route path="/plants">
                    <PlantList plants={plants}/>
                </Route>
            </Switch>
        </div>
    )

}

export default PlantPage