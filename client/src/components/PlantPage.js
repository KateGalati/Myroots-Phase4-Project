import React, {useState, useEffect} from 'react'
import PlantList from './PlantList'
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
            <PlantList plants={plants}/>
        </div>
    )

}

export default PlantPage