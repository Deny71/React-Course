import React from 'react'
import axios from '../axios-komis'
import DodajAuto from '../DodajAuto/DodajAuto.js'
import UsunAuto from '../UsunAuto/UsunAuto'
import { Route, withRouter } from 'react-router-dom'
import Auta from './Auta.module.css'
import Szczegoly from '../Szczegoly/Szczegoly.js'

class Autko extends React.Component {
  state = {
  }

  componentDidMount = () => {
    axios.get("/cars.json")
      .then(res => {
        const tempCar = []
        for (var prop in res.data) {
          tempCar.push({ ...res.data[prop], id: prop })
        }
        this.setState({ auto: tempCar });
      })
  }

  createTable = () => {
    const cars = []
    let buf = 0
    if (this.state.auto) {

      for (const car of this.state.auto) {

        buf++
        cars.push(<tr key={car.id} onClick={() => this.szczegolyAuta(car.id)}>
            <td>{buf}</td>
            <td>{car.marka}</td>
            <td>{car.mordel}</td>
            <td>{car.rocznik}</td>
            <td>{car.cena}</td>
            <td><button className={Auta.usunAuto} onClick={(e) => this.delCar(car.id,e)}>X</button> </td>
          </tr>)


      }
    }
    return cars
  }

  szczegolyAuta = (carId) => {

    this.props.history.push("/car-details?car=" + carId)
  }

  addCar = (car) => {
    const tmp = this.state.auto.slice()
    tmp.push(car)
    this.setState({ auto: tmp })
  }

  delCar = (id,e) => {
    e.preventDefault()
    e.stopPropagation()
    axios.delete("/cars/" +id +".json")
    const tmp = this.state.auto.filter((auto) => auto.id !== id)
    this.setState({ auto: tmp })
    
  }


  render() {
    let zero = null
    if (this.state.auto) {
      try {
        zero = <UsunAuto className={Auta.Tlo} id={this.state.auto[0].id} delC={this.delCar} ></UsunAuto>
      } catch{ }
    }

    return (

      <React.Fragment>

        <Route path="/car-details" component={Szczegoly}  ></Route>
        <Route path="/" exact render={() => <DodajAuto addC={this.addCar}></DodajAuto>} />
        <Route path="/" exact render={() =>
          <table className={Auta.Table} >
            <thead>
              <tr>
                <td>LP</td>
                <td>Marka</td>
                <td>Model</td>
                <td>Rocznik</td>
                <td>Cena</td>
              </tr>
            </thead>
            <tbody>{this.createTable()}</tbody>
          </table>}
        />
        {/* <Route path="/" exact render={() => zero} /> */}
      </React.Fragment>

    )
  }
}

export default withRouter(Autko)