import React, {useState} from 'react';
import {Form, Header, Icon} from 'semantic-ui-react'

const AddNewPlantForm = props => {
    const {handleAddPlant} = props

    const [plantName, setPlantName] = useState('')
    const [scientificName, setScientificName] = useState('')
    const [light, setLight] = useState('')
    const [water, setWater] = useState('')
    const [humidity, setHumidity] = useState('')
    const [image, setImage] = useState('')
    const [formErrors, setFormErrors] = useState([])

    const handleSubmit = e => {
        e.preventDefault()

        fetch('/plants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({
                plantName: plantName,
                scientificName: scientificName,
                light: light,
                water: water,
                humidity: humidity,
                image: image
            }),
        })
        .then((r) => {
        if (r.ok) {
            r.json().then((newPlant) => {
                handleAddPlant(newPlant);
                setFormErrors([]);
              });
            } else {
              r.json().then((err) => setFormErrors(err.errors));
            }
    });
    }
    
    return (
        <div className="new-plant-segment">
            <Header as='h1' image>
                <Icon name='leaf'/>
                Add New Plant
            </Header>
            <Form className='new-plant-form' onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input type="text" name="name" fluid label="Plant Name" placeholder="Plant Name" value={plantName} onChange={e => setPlantName(e.target.value)}/>
                    <Form.Input type="text" name="science name" fluid label="Scientific Name" placeholder="Scientific Name" value={scientificName} onChange={e => setScientificName(e.target.value)}/>
                    <Form.Input type="text" name="light" fluid label="Light Requirements" placeholder="Light Requirements" value={light} onChange={e => setLight(e.target.value)}/>
                    <Form.Input type="text" name="water" fluid label="Water Requirements" placeholder="Water Requirements" value={water} onChange={e => setWater(e.target.value)}/>
                    <Form.Input type="text" name="humidity" fluid label="Humidity" placeholder="Humidity" value={humidity} onChange={e => setHumidity(e.target.value)}/>
                    <Form.Input type="text" name="image" fluid label="Image URL" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)}/>
                </Form.Group>
                {formErrors.length > 0 
                    ? formErrors.map((err) => (
                        <p key={err} style={{ color: "red" }}>
                            {err}
                        </p>
                    ))
                : null}
                <Form.Button className="new-plant-submit" type="submit">Add Plant</Form.Button>
            </Form>
        </div>
    )
}

export default AddNewPlantForm