import { React,useState } from 'react'
import API from '../api'

const Users = () => {
    const [users,setUsers] = useState(API.users.fetchAll())
   
    const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter(user => user._id !== userId))
    }

    const renderPhrase = (number) => {
        number = users.length
        let formsOfWord = ''
        if (number === 0) return <span className="badge bg-danger m-2">Никто с тобой не тусанет</span>
        if (number === 1) formsOfWord = 'человек'
        if (number > 4) formsOfWord = 'человек'
        else formsOfWord = 'человека'

        return <span className="badge bg-primary m-2">{number} {formsOfWord} тусанет с тобой сегодня</span>
    }
    
    const renderUsers = () => {
        
        if(users.length === 0) return
        
        return (
            <table className="table  m-2">
                <thead className='border-dark'>
                    <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился,раз</th>
                    <th scope="col">Оценка</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                      {users.map(user => 
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.qualities.map(item => <span key={item._id} className={`badge bg-${item.color}`}>{item.name}</span>)}</td>
                                <td>{user.profession.name}</td>
                                <td>{user.completedMeetings}</td>
                                <td>{user.rate} / 5</td>
                                <td><button type='button' className='btn btn-danger' onClick={() => handleDelete(user._id)}>delete</button></td>
                            </tr>)}
                </tbody>
            </table> 
        )
    }
    
    return (
        <>
            <h2>{renderPhrase()}</h2>
            {renderUsers()}
        </>
    )
}

export default Users