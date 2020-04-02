import React, { Component } from 'react'
import axios from '../axios-komis'
import dodajAuto from './DodajAuto.css'

class DodajAuto extends Component{

state = {
    odswiez: null
}

         zapiszAuto = (event) => {
        event.preventDefault();
    

        const newCar = {

            marka:event.target.Marka.value,
            mordel:event.target.Model.value,
            rocznik:event.target.Rocznik.value,
            kolor:event.target.Kolor.value,
            vin:event.target.Vin.value,
            przebieg:event.target.Przebieg.value,
            cena:event.target.Cena.value
        }
        event.target.reset()
        
        axios.post("/cars.json", newCar)
        .then(() => this.props.addC(newCar) )
    }
render () {
    return (
        <form className = "dodajAuto" onSubmit={this.zapiszAuto}> 
            <label htmlFor="markaPojazdu"><p style={{color: 'white'}}>Marka pojazdu</p> </label>
            <input id="markaPojazdu" name="Marka"></input>
            <br></br>
            <label htmlFor="modelPojazdu"><p style={{color: 'white'}}>Model pojazdu</p> </label>
            <input id="modelPojazdu" name="Model"></input>
            <br></br>
            <label htmlFor="rocznikPojazdu"><p style={{color: 'white'}}>Rocznik pojazdu</p> </label>
            <input id="rocznikPojazdu" name="Rocznik"></input>
            <br></br>
            <label htmlFor="kolorPojazdu"><p style={{color: 'white'}}>Kolor pojazdu</p> </label>
            <input id="kolorPojazdu" name="Kolor"></input>
            <br></br>
            <label htmlFor="nrVin"><p style={{color: 'white'}}>Nr VIN</p> </label>
            <input id="nrVin" name="Vin"></input>
            <br></br>
            <label htmlFor="przebiegPojazdu"><p style={{color: 'white'}}>Przebieg</p> </label>
            <input id="przebiegPojazdu" name="Przebieg"></input>
            <br></br>
            <label htmlFor="cenaPojazdu"><p style={{color: 'white'}}>Cena</p> </label>
            <input id="cenaPojazdu" name="Cena"></input>
            <br></br>
            <br></br>

            <button className="przycisk"type="submit" >
                  Dodaj samochod
                </button>
                <br></br>
                <br></br>
        </form>
    
    )
}

}

export default DodajAuto