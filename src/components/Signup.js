import React from 'react'
import useForm from '../hooks/useForm'

const Signup = () => {

    const [values, handleChanges, clearForm] = useForm('signup', {
        username: "",
        email: '',
        password: ''
    })

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        clearForm(e);
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