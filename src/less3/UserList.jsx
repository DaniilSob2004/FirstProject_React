import { React, useState } from 'react'
import User from './User'

function UserList() {
    const [users, setUsers] = useState(
        [
            {
                id: 1,
                name: 'Alex',
                age: 35,
                group: 'f31'
            }, 
            {
                id: 2,
                name: 'Ris',
                age: 22,
                group: 'p41'
            },
            {
                id: 3,
                name: 'Jes',
                age: 45,
                group: 'p41'
            }
        ]
    );
    let usersContent = users.map(user => <User key={user.id} user={user}/>);
    
    function addUser() {
        setUsers(users => users.concat({
            id: 4,
            name: 'Dan',
            age: 20,
            group: 'p12'
        }));
    }
    
    return (
        <>
            <div>
                <h2>Users List</h2>
                <button onClick={addUser}>Add</button>
            </div>
            {usersContent}
        </>
    )
}

export default UserList
