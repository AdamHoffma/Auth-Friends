import React, {useState} from 'react'
import axios from 'axios'

const Login = props => {
    const [state, setState] = useState({
        username: "",
        password: ""
    })

    const handleChange = e => {
        setState({
            ...state, [e.target.name]: e.target.value
        })
    }

    const login = e => {
        e.preventDefault()
        axios
        .post('https://auth-friends-backup.herokuapp.com/api/login', state)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            console.log(state)
            props.history.push('/protected')
        })
        .catch(err => console.log(err.response))
    }

    return (
        <div>
            <form onSubmit={login}>
                <input
                    type="text"
                    name="username"
                    value={state.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login

