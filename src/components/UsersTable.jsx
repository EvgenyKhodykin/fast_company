import React from 'react'
import PropTypes from 'prop-types'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import BookMark from './BookMark'

function UserTable({ users, onSort, selectedSort, onToggleBookMark, ...rest }) {
    const columns = {
        name: { path: 'name', name: 'Имя' },
        qualities: { name: 'Качества' },
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
        delete: { component: 'delete' }
    }

    return (
        <table className='table  m-2'>
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody {...{ columns, data: users }} />
        </table>
    )
}

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onToggleBookMark: PropTypes.func.isRequired
}

export default UserTable
