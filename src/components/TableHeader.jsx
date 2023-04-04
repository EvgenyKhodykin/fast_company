import React from 'react'
import PropTypes from 'prop-types'

function TableHeader({ onSort, selectedSort, columns }) {
    const handleSort = item => {
        if (selectedSort.iter === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === 'asc' ? 'desc' : 'asc'
            })
        } else onSort({ iter: item, order: 'asc' })
    }

    return (
        <thead className='border-dark'>
            <tr>
                {Object.keys(columns).map(column => (
                    <th key={column} onClick={() => handleSort(columns[column].iter)} scope='col'>
                        {columns[column].name}
                    </th>
                ))}
            </tr>
        </thead>
    )
}

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
}

export default TableHeader
