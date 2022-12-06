import React, {useState, useEffect} from 'react'
import PlantList from './PlantList'
import { Switch, Route, NavLink } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'

const PlantPage = () => {

    const [plants, setPlants] = useState([])

    useEffect(() => {
      fetch("/plants")
        .then((r) => r.json())
        .then(setPlants)
    }, [])

    return (
        <div>
            <NavLink to="/plants">
                <Button icon labelPosition='left'>
                    <Icon name='search'/>
                    Search Plants
                </Button>
            </NavLink>
            <Switch>
                <Route path="/plants">
                    <PlantList plants={plants}/>
                </Route>
            </Switch>
        </div>
    )

}

export default PlantPage