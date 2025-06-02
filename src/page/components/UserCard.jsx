import React from 'react'

export default function UserCard({user}) {
    return (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
            <h2>{user.name}</h2>
        </div>
    )
}