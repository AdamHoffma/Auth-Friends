import React, {useState} from 'react'
import {withAuth} from '../utils/withAuth'
import axios from 'axios';
import FriendList from './FriendList'

const Friends = () => {
    const [friend, setFriend]= useState({
        
            id: '',
            name: "",
            age: "",
            email: ""
        }
    )

    const [friendarray, setFriendArray] = useState([])

    const handleChange = e => {
        setFriend({
            friends: {
                ...friend.friends, [e.target.name]: e.target.value
            }
        })
    }

    const submit = e => {
        e.preventDefault()
        withAuth()
        .post('https://auth-friends-backup.herokuapp.com/api/friends', friend.friends)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err.response))
    }

    const retrieve = e => {
        withAuth()
        .get("https://auth-friends-backup.herokuapp.com/api/friends")
        .then(res => {
            setFriendArray(res.data)
        })
        .catch(err => console.log(err.response))
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={friend.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="age"
                    placeholder="age"
                    value={friend.age}
                    onChange={handleChange}
                    />
                <input 
                    type="text"
                    name="email"
                    placeholder="email"
                    value={friend.email}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
            <button onClick={retrieve}>Retrieve</button>
            {friendarray.map(f => {
                return <div>
                    <FriendList name={f.name} age={f.age} email={f.email}/>
                </div>
            })}
            
        </div>
    )
}

export default Friends