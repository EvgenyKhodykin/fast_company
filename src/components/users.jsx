import React from 'react'
import User from './User'

function Users(props) {
    const {users, onToggle, onDelete} = props
    
    return (
        <>
            {users.length > 0 && 
                <table className='table  m-2'>
                    <thead className='border-dark'>
                        <tr>
                            <th scope='col'>Имя</th>
                            <th scope='col'>Качества</th>
                            <th scope='col'>Профессия</th>
                            <th scope='col'>Встретился,раз</th>
                            <th scope='col'>Оценка</th>
                            <th scope='col'>Избранное</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => <User key={user._id} onDelete={onDelete} onToggle={onToggle} {...user}/>)}
                    </tbody>
                </table>
            }
        </>
    )    
}

export default Users
