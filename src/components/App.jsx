import { React,useState } from 'react'
import Users from './Users'
import SearchStatus from './SearchStatus'
import API from '../api'

function App() {
    const [users,setUsers] = useState(API.users.fetchAll())
   
    const handleDelete = userId => {
        setUsers(users.filter(user => user._id !== userId))
    }

    const handleToggleBookmark = id => {
        const newUsers = [...users]
        newUsers.forEach(user => {
            if(user._id === id) user.bookmark = !user.bookmark
        })
        setUsers(newUsers)
    }

    return (
        <div>
            <SearchStatus length={users.length}/>
            <Users onDelete={handleDelete} onToggle={handleToggleBookmark} users={users}/>
        </div>
    )
}

export default App
