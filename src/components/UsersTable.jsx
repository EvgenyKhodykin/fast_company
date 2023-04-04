import React from 'react'
import PropTypes from 'prop-types'
import User from './User'

function UserTable({ users, onSort, ...rest }) {
    return (
        <table className='table  m-2'>
            <thead className='border-dark'>
                <tr>
                    <th onClick={() => onSort('name')} scope='col'>
                        Имя
                    </th>
                    <th scope='col'>Качества</th>
                    <th onClick={() => onSort('profession.name')} scope='col'>
                        Профессия
                    </th>
                    <th onClick={() => onSort('completedMeetings')} scope='col'>
                        Встретился,раз
                    </th>
                    <th onClick={() => onSort('rate')} scope='col'>
                        Оценка
                    </th>
                    <th onClick={() => onSort('bookmark')} scope='col'>
                        Избранное
                    </th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <User key={user._id} {...rest} {...user} />
                ))}
            </tbody>
        </table>
    )
}

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired
}

export default UserTable