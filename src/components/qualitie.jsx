import React from 'react'

function Qualitie({color,name,id}) {
    return <span className={`badge m-1 bg-${color}`}>{name}</span>
}

export default Qualitie