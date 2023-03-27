import React, { useState, useEffect } from 'react'
import Pagination from './Pagination'
import User from './User'
import paginate from '../utils/paginate'
import PropTypes from 'prop-types'
import GroupList from './GroupList'
import API from '../api'
import SearchStatus from './SearchStatus'

function Users({ users, ...rest }) {
    const [currentPage, setCurrentPage] = useState(1)
    const [professions, setProfessions] = useState(API.professions.fetchAll())
    const [selectedProf, setSelectedProf] = useState()

    const pageSize = 2

    useEffect(() => {
        API.professions.fetchAll().then(data => setProfessions(data))
    }, [])

    useEffect(() => {
        setCurrentPage(1)
    }, [selectedProf])

    const handleProfessionSelect = item => {
        setSelectedProf(item)
    }

    const handlePageChange = pageIndex => {
        setCurrentPage(pageIndex)
    }

    const filteredUsers = selectedProf
        ? users.filter(user => user.profession === selectedProf)
        : users

    const count = filteredUsers.length

    const userCrop = paginate(filteredUsers, currentPage, pageSize)

    const clearFilter = () => {
        setSelectedProf()
    }

    return (
        <div className='d-flex'>
            {professions && (
                <div className='d-flex flex-column flex-shrink-0 p-3'>
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handleProfessionSelect}
                    />
                    <button className='btn btn-secondary m-2' onClick={clearFilter}>
                        Очистить
                    </button>
                </div>
            )}

            <div className='d-flex flex-column'>
                <SearchStatus length={count} />
                {count > 0 && (
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
                <div className='d-flex justify-content-center'>
                    <Pagination
                        currentPage={currentPage}
                        itemsCount={count}
                        pageSize={pageSize}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    )
}

Users.propTypes = {
    users: PropTypes.array.isRequired
}

export default Users
