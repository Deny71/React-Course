import React from 'react'
import {Component} from 'react'
import axios from '../axios-komis'
import {withRouter} from 'react-router-dom'
import Widok from './Szczegoly.module.css'
class Szczegoly extends Component {
    state = {
        auto: []
    }
    componentDidMount = () => {
      
       const id = this.props.location.search.split("=")[1]
       axios.get("/cars/"+id+".json")
       .then(res => {
          if(res){this.setState({ auto: res.data });}
      })
    }

    showDetails = () => {
        return (
            <tbody>
                <tr> 
            <td>{this.state.auto.marka}</td>
           <td>{this.state.auto.mordel}</td>
           <td>{this.state.auto.rocznik}</td>
           <td>{this.state.auto.kolor}</td>
           <td>{this.state.auto.przebieg}</td>
           <td>{this.state.auto.vin}</td>
           <td>{this.state.auto.cena}</td>
           </tr>
          
           </tbody>
        )
    }

    render(){
        return(
            <React.Fragment>
                <h1 className="naglowek">Dane szczegolowe pojazdu</h1>
              <table className={Widok.widok}>
                { <thead>
                    <tr>
                        <td>Marka</td>
                        <td>Model</td>
                        <td>Rocznik</td>
                        <td>Kolor</td>
                        <td>Przebieg</td>
                        <td>VIN</td>
                        <td>Cena</td>
                   </tr>
                 </thead> }
                 {this.showDetails()}
            </table>
            <br></br>
            <button className={Widok.powrot} onClick={() => this.props.history.replace("/")} >Powrót</button>
            </React.Fragment>
        )
    }
}

export default withRouter(Szczegoly)