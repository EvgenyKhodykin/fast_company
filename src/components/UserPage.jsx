import { React, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import QualitiesList from './QualitiesList'
import API from '../api'

function UserPage({ id }) {
    const [user, setUser] = useState()
    const history = useHistory()

    useEffect(() => {
        API.users.getById(id).then(data => setUser(data))
    }, [])

    const handleUsers = () => {
        history.replace('/users')
    }

    if (user) {
        return (
            <div className='m-2'>
                <h1>{user.name}</h1>
                <h3>Профессия: {user.profession.name}</h3>
                <QualitiesList {...user} />
                <div>completedMeetings: {user.completedMeetings}</div>
                <h3>Rate: {user.rate}</h3>
                <button className='btn btn-outline-primary' onClick={handleUsers}>
                    Все пользователи
                </button>
            </div>
        )
    }
    return <h1>Loading...</h1>
}

UserPage.propTypes = {
    id: PropTypes.string
}

export default UserPage
