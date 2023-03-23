import React from 'react'
import Qualitie from './Qualitie'
import BookMark from './Bookmark'
import PropTypes from 'prop-types'

function User (props) {
    const { name, qualities, profession, completedMeetings, rate, onDelete, _id, onToggle, bookmark } = props

    return (
        <tr>
            <td>{name}</td>
            <td>
                {qualities.map(item => (
                    <Qualitie key={item._id} color={item.color} name={item.name} />
                ))}
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate} / 5</td>
            <td>
                <button onClick={() => onToggle(_id)}>
                    <BookMark status={bookmark} />
                </button>
            </td>
            <td>
                <button type='button' className='btn btn-danger' onClick={() => onDelete(_id)}>
                    delete
                </button>
            </td>
        </tr>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array.isRequired,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    _id: PropTypes.string.isRequired,
    bookmark: PropTypes.bool.isRequired
}

export default User
