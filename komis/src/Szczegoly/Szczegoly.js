import React from 'react'
import {Component} from 'react'
import axios from '../axios-komis'
import {withRouter} from 'react-router-dom'
import Widok from './Szczegoly.css'
class Szczegoly extends Component {
    state = {
        auto: []
    }
    componentDidMount = () => {
      
       const id = this.props.location.search.split("=")[1]
       axios.get("/cars/"+id+".json")
       .then(res => {
          if(res){this.setState({ auto: res.data });}
      
    
          console.log(this.state.auto.marka)

      })
    }

    showDetails = () => {
        let Cars = null
        if(this.state.auto){
        Cars = this.state.auto.marka
    }
        else{console.log("nie dzialajet")}

        console.log(Cars)
        console.log(this.state.auto)
        return (
            <tbody>
           <td>{this.state.auto.marka}</td>
           <td>{this.state.auto.mordel}</td>
           <td>{this.state.auto.rocznik}</td>
           <td>{this.state.auto.kolor}</td>
           <td>{this.state.auto.przebieg}</td>
           <td>{this.state.auto.vin}</td>
           <td>{this.state.auto.cena}</td>
           </tbody>
        )
    }

    render(){
        return(
            <React.Fragment className = "divek">
                <h1 className="naglowek">Dane szczegolowe pojazdu</h1>
              <table className="widok">
                { <thead>
                 <td>Marka</td>
                 <td>Model</td>
                 <td>Rocznik</td>
                 <td>Kolor</td>
                 <td>przebieg</td>
                 <td>VIN</td>
                 <td>Cena</td>
                 </thead> }
                 <br></br>
                 {this.showDetails()}
            
            </table>
            </React.Fragment>
        )
    }
}


export default withRouter(Szczegoly)