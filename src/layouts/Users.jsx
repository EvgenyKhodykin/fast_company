import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import UserPage from '../components/UserPage'
import UsersList from '../components/UsersList'

function Users() {
    const params = useParams()
    const { userId } = params
    return <>{userId ? <UserPage /> : <UsersList />}</>
}

export default Users
