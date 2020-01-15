import React, {useState} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import useForm from '../hooks/useForm'
import {useHistory} from 'react-router-dom'

const Login = () => {
    const history = useHistory();
    const signupInfo = useLocalStorage('signup');
    const [user] = useState(signupInfo);
    console.log('user is ', user);

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    const [message, setMessage] = useState("");

    const handleChange = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        if (user[0].email === login.email && user[0].password === login.password){
            console.log("logged in!");
            setMessage("you're logged in")
            history.push('/');
        } else {
            setMessage("sorry try again");
        }
    }


    return(
        <div>
            <form onSubmit={onSubmit}>
                <input name="email" type="email" placeholder="email" onChange={handleChange} value={login.email}/>
                <input name="password" type="password" placeholder="password" onChange={handleChange} value={login.password}/>
                <button>Login</button>
            </form>
            <p>{message}</p>
        </div>
    )
}

export default Login