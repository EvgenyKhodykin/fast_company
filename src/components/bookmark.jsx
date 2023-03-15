import React from 'react'

function BookMark({status}) {
    
    const handleClassName = (status) => {
        return status ? 'bi bi-bookmark-check-fill' : 'bi bi-bookmark'
    }

    return <i className={handleClassName(status)}></i>
}

export default BookMark