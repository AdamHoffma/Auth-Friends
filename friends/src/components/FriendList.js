import React from 'react'

export default function FriendList(props) {
    return (
        <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Email: {props.email}</p>
        </div>
    )
}