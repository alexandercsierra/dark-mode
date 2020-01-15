import React, {useState} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import useForm from '../hooks/useForm'

const Login = () => {
    const signupInfo = useLocalStorage('signup');
    const [user, setUser] = useState(signupInfo);
    console.log('user is ', user);

    // const [values, handleChanges, clearForm] = useForm('signup');

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

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
        } else {
            console.log("they don't match :(")
        }
    }


    return(
        <div>
            <form onSubmit={onSubmit}>
                <input name="email" type="email" placeholder="email" onChange={handleChange} value={login.email}/>
                <input name="password" type="password" placeholder="password" onChange={handleChange} value={login.password}/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login