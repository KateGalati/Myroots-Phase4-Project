import React, {useState, useEffect} from 'react'
import PlantList from './PlantList'
import { Switch, Route } from 'react-router-dom'
import AddNewPlantForm from './AddNewPlantForm'

const PlantPage = () => {

    const [plants, setPlants] = useState([])

    useEffect(() => {
      fetch("/plants")
        .then((r) => r.json())
        .then(setPlants)
    }, [])

    const handleAddPlant = newPlant => {
        const updatedPlantArray = [...plants, newPlant]
        setPlants(updatedPlantArray)
    }

    return (
        <div>
            <Switch>
                <Route path="/plants">
                    <PlantList plants={plants}/>
                </Route>
                <Route path="/new">
                    <AddNewPlantForm handleAddPlant={handleAddPlant}/>
                </Route>
            </Switch>
        </div>
    )

}

export default PlantPage