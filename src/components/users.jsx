import React, { useState } from 'react'
import Pagination from './Pagination'
import User from './User'
import paginate from '../utils/paginate'
import PropTypes from 'prop-types'

function Users ({ users, ...rest }) {
    const count = users.length
    const pageSize = 4
    const [currentPage, setCurrentPage] = useState(1)
    const userCrop = paginate(users, currentPage, pageSize)

    const handlePageChange = pageIndex => {
        setCurrentPage(pageIndex)
    }

    return (
        <>
            {users.length > 0 && (
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
                        {userCrop.map(user => (
                            <User key={user._id} {...rest} {...user} />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                currentPage={currentPage}
                itemsCount={count}
                pageSize={pageSize}
                onPageChange={handlePageChange}
            />
        </>
    )
}

Users.propTypes = {
    users: PropTypes.array.isRequired
}

export default Users
