 import React from 'react'
 import Qualitie from './qualitie'
 import BookMark from './bookmark'

 function User(props) {
    const {name,qualities,profession,completedMeetings,rate,onDelete,_id,onToggle} = props

    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{qualities.map(item => <Qualitie key={item._id} color={item.color} name={item.name} id={item._id}/>)}</td>
                <td>{profession.name}</td>
                <td>{completedMeetings}</td>
                <td>{rate} / 5</td>
                <td><BookMark onClick={() => onToggle(_id)}/></td>
                <td><button type='button' className='btn btn-danger' onClick={() => onDelete(_id)}>delete</button></td>
            </tr>
        </tbody>
    )
 }

 export default User