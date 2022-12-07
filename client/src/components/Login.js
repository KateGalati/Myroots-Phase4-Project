import React, {useState} from "react";
import {useHistory} from 'react-router-dom';

function Login () {

    // const [formData, setFormData] = useState({
    //     name:'',
    //     email:'',
    //     password:''
    // })

    // const [signup, setSignUp] = useState(false)
    // const [errors, setErrors] = useState([])
    // const history = useHistory()

    // const {name, password} = formData

    // function onSubmit(e){
    //     e.preventDefault()
    //     const user = {
    //         name,
    //         password
    //     }

    //     let url = '/login'
    //     if(signup) url = '/users'
    //     // Logs in user
    //     fetch(`/login`,{
    //         method:'POST',
    //         headers:{'Content-Type': 'application/json'},
    //         body:JSON.stringify(user)
    //     })
    //     .then(res => {
    //         if(res.ok){
    //             res.json().then(user => {
    //                 history.push(`/users/${user.id}`)
    //             })
    //         }else {
    //             res.json().then(json => setErrors(json.errors))
    //         }
    //     })
    
    // }

    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setFormData({ ...formData, [name]: value })
    //     }

    return(
        <div>

        </div>
    )
}

export default Login