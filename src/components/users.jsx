import {React, useState} from 'react'
import API from '../api'

const Users = () => {
    const [users, setUsers] = useState(API.users.fetchAll())

    const handleDelete = userId => {
        setUsers(prevState => prevState.filter(user => user._id !== userId))
    }

    const renderPhrase = number => {
        if (number === 0) return `Никто не тусанёт`
        else if (number === 1 || number > 4) return `${number} человек тусанёт`
        return `${number} человека тусанут`
    }

    const getBageClasses = number => {
        let classes = 'badge m-2 '
        classes += number === 0 ? 'bg-danger' : 'bg-primary'
        return classes
    }

    return (
        <>
            <h2><span className={getBageClasses(users.length)}>{renderPhrase(users.length)} с тобой сегодня</span></h2>
            {users.length > 0 && 
                <table className='table  m-2'>
                    <thead className='border-dark'>
                        <tr>
                            <th scope='col'>Имя</th>
                            <th scope='col'>Качества</th>
                            <th scope='col'>Профессия</th>
                            <th scope='col'>Встретился,раз</th>
                            <th scope='col'>Оценка</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user =>
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.qualities.map(item => <span key={item._id} className={`badge m-1 bg-${item.color}`}>{item.name}</span>)}</td>
                                <td>{user.profession.name}</td>
                                <td>{user.completedMeetings}</td>
                                <td>{user.rate} / 5</td>
                                <td><button type='button' className='btn btn-danger' onClick={() => handleDelete(user._id)}>delete</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            }
        </>
    )
}

export default Users
