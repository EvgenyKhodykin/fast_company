import React from 'react'
import PropTypes from 'prop-types'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

function UserTable({ users, onSort, selectedSort, ...rest }) {
    const columns = {
        name: { path: 'name', name: 'Имя' },
        qualities: { name: 'Качества' },
        profession: { path: 'profession.name', name: 'Профессия' },
        completedMeetings: { path: 'completedMeetings', name: 'Встретился, раз' },
        rate: { path: 'rate', name: 'Оценка' },
        bookmark: { path: 'bookmark', name: 'Избранное', component: 'bookmark' },
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
    selectedSort: PropTypes.object.isRequired
}

export default UserTable
