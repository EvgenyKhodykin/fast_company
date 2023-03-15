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
        const currentIndex = newUsers.findIndex(item => item._id === id)
        if(newUsers[currentIndex].bookmark) newUsers[currentIndex].bookmark = false
        else newUsers[currentIndex].bookmark = true
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
