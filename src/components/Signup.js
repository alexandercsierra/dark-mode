import React, {useState} from 'react'
import useForm from '../hooks/useForm'
import useLocalStorage from '../hooks/useLocalStorage';


const Signup = () => {

    const [values, handleChanges, clearForm] = useForm('signup', {
        username: "",
        email: '',
        password: ''
    })

    const [signup, setSignup] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        setSignup(values);
        clearForm(e)
        window.localStorage.setItem('signup', JSON.stringify(values));
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input name="username" placeholder="username" onChange={handleChanges} value={values.username}/>
                <input name="email" type="email" placeholder="email" onChange={handleChanges} value={values.email}/>
                <input name="password" type="password" placeholder="password" onChange={handleChanges} value={values.password}/>
                <button>Signup</button>
            </form>
        </div>
    )
}

export default Signup