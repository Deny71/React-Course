import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
     return (
        <div className="UserOutput">
            <p> Przekazane imie: {props.userName}</p>
            <p>Bla bla</p>
        </div>
    )
}

export  default userOutput