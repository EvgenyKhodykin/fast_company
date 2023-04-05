import React from 'react'
import PropTypes from 'prop-types'
import BookMark from './BookMark'
import QualitiesList from './QualitiesList'
import Table from './Table'

function UserTable({ users, onSort, selectedSort, onToggleBookMark, onDelete }) {
    const columns = {
        name: { path: 'name', name: 'Имя' },
        qualities: {
            name: 'Качества',
            component: user => <QualitiesList qualities={user.qualities} />
        },
        profession: { path: 'profession.name', name: 'Профессия' },
        completedMeetings: { path: 'completedMeetings', name: 'Встретился, раз' },
        rate: { path: 'rate', name: 'Оценка' },
        bookmark: {
            path: 'bookmark',
            name: 'Избранное',
            component: user => (
                <button onClick={() => onToggleBookMark(user._id)}>
                    <BookMark status={user.bookmark} />
                </button>
            )
        },
        delete: {
            component: user => (
                <button type='button' className='btn btn-danger' onClick={() => onDelete(user._id)}>
                    delete
                </button>
            )
        }
    }

    return <Table onSort={onSort} selectedSort={selectedSort} columns={columns} data={users} />
}

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default UserTable
