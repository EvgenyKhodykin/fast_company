import { React, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import QualitiesList from './QualitiesList'
import API from '../api'

function UserPage({ id }) {
    const [user, setUser] = useState()
    useEffect(() => {
        API.users.getById(id).then(data => setUser(data))
    }, [])
    console.log(user)

    if (user) {
        return (
            <div className='m-2'>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <QualitiesList {...user} />
            </div>
        )
    }
}

UserPage.propTypes = {
    id: PropTypes.string
}

export default UserPage
