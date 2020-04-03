import React from 'react'
import axios from '../axios-komis'
import usunA from './usunA.module.css'

const UsunAuto = props => {

    const usunAuto =(id) => {
         axios.delete("/cars/" +id +".json")
         .then(() => props.delC(id))
    }

return (
    <button className={usunA.Button} onClick={() => usunAuto(props.id)}>Usun samochod</button>
)
}

export default UsunAuto