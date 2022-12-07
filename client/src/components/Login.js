import React, {useState} from 'react'

const Login = ({onLogin}) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          password
        }),
      })
        .then((r) => r.json())
        .then(userData => {
            if (userData.errors)
            console.log(userData.errors)
            else 
            onLogin(userData)
        });
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    );

}

export default Login 

//     // const [formData, setFormData] = useState({
//     //     name:'',
//     //     email:'',
//     //     password:''
//     // })

//     // const [signup, setSignUp] = useState(false)
//     // const [errors, setErrors] = useState([])
//     // const history = useHistory()

//     // const {name, password} = formData

//     // function onSubmit(e){
//     //     e.preventDefault()
//     //     const user = {
//     //         name,
//     //         password
//     //     }

//     //     let url = '/login'
//     //     if(signup) url = '/users'
//     //     // Logs in user
//     //     fetch(`/login`,{
//     //         method:'POST',
//     //         headers:{'Content-Type': 'application/json'},
//     //         body:JSON.stringify(user)
//     //     })
//     //     .then(res => {
//     //         if(res.ok){
//     //             res.json().then(user => {
//     //                 history.push(`/users/${user.id}`)
//     //             })
//     //         }else {
//     //             res.json().then(json => setErrors(json.errors))
//     //         }
//     //     })
    
//     // }

//     // const handleChange = (e) => {
//     //     const { name, value } = e.target
//     //     setFormData({ ...formData, [name]: value })
//     //     }

//     // return(
//     //     <div>

//     //     </div>
//     // )
// }