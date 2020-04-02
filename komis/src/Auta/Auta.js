import React from 'react'
import axios from '../axios-komis'
import DodajAuto from '../DodajAuto/DodajAuto.js'
import UsunAuto from '../UsunAuto/UsunAuto'
import { Route, Link } from 'react-router-dom'
import usunA from '../UsunAuto/usunA.css'
import Auta from './Auta.css'
class Autko extends React.Component {  
  state = {
  }

  componentDidMount = () => {
    axios.get("/cars.json")
    .then(res => { 
      const tempCar = []
    for (var prop in res.data){
      tempCar.push({...res.data[prop], id: prop})
    }
    console.log(tempCar)
      this.setState ({auto : tempCar});
    })
  }

    createTable = () => {
       const cars = []
       let buf = 0
       if(this.state.auto){
      
          for(const car of this.state.auto){
            if(buf === 0){
              cars.push(<td>LP</td>,<td>Marka</td>,<td>Model</td>,<td>Rocznik</td>,<td>Cena</td>,)
              buf++
            }
            let children = []
            for(let j=0;j<1;j++){
              children.push(<td>{buf}</td>,<td>{car.marka}</td>,<td>{car.mordel}</td>,<td>{car.rocznik}</td>,<td>{car.cena}</td>)
            }
            buf++
            cars.push(<tr onClick={this.szczegolyAuta()}>{children}</tr>)
            

          }      
        }
      return cars
    }

    szczegolyAuta = () => {
      console.log("boom")
    }

    addCar = (car) => {
      const tmp = this.state.auto.slice()
      tmp.push(car)
      this.setState({auto:tmp})
    }

    delCar = (id) => {
      const tmp = this.state.auto.filter((auto) => auto.id !== id)
      this.setState({auto:tmp})
    }


    render() {
     let zero = null
     if (this.state.auto){
      try {   zero = <UsunAuto className = "Tlo" id={this.state.auto[0].id} delC={this.delCar} ></UsunAuto>
     }catch{} 
    }

      return (
        
        <React.Fragment>

        {/* <header>
          <nav>
            <ul>
              <li><Link to={{
                pathname: '/car' }}>Car</Link></li>
              
              <li><Link to="/">Powrót</Link></li>
        //       {/* <li><a href="/car-details">New </a></li> */}
        {/* //     </ul> */}
        {/* //   </nav> */}
        {/* // </header> */} 

        {/* <DodajAuto addC={this.addCar}></DodajAuto>
        {zero} */}


        <Route path="/" exact render={() =>  <DodajAuto addC={this.addCar}></DodajAuto>}/>
        <Route path="/" exact render = {() =>
           <table className="Table" onClick={this.createTable}>
            {this.createTable()}
           </table>}
        />
        <Route path="/" exact render = {() => zero}/>
        
        
        </React.Fragment>
    
      )
    }
  }

export default Autko