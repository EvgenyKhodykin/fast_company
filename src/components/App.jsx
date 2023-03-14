import { React,useState } from 'react'
import Users from './users'
import SearchStatus from './searchStatus'
import API from '../api'

function App() {
    const [users,setUsers] = useState(API.users.fetchAll())
   
    const handleDelete = userId => {
        setUsers(users.filter(user => user._id !== userId))
    }

    const handleToggleBookmark = id => {
        
    }

    return (
        <div>
            <SearchStatus length={users.length}/>
            {users.length > 0 && 
                <table className='table  m-2'>
                    <thead className='border-dark'>
                        <tr>
                            <th scope='col'>Имя</th>
                            <th scope='col'>Качества</th>
                            <th scope='col'>Профессия</th>
                            <th scope='col'>Встретился,раз</th>
                            <th scope='col'>Оценка</th>
                            <th scope='col'>Избранное</th>
                        </tr>
                    </thead>
                    {users.map(user => <Users key={user._id} onDelete={handleDelete} onToggle={handleToggleBookmark} {...user}/>)}
                </table>
            }
        </div>
    )
}

export default App
