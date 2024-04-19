import React from 'react'

function User(props) {
    const { name, age, group } = props.user;
    return (
        <div>
            <h3>{name} - {age} - {group}</h3>
        </div>
    )
}

export default User
