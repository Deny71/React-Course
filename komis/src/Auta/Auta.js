import React from 'react'
import axios from '../axios-komis'
import DodajAuto from '../DodajAuto/DodajAuto.js'
import UsunAuto from '../UsunAuto/UsunAuto'
import { Route, Link, withRouter } from 'react-router-dom'
import usunA from '../UsunAuto/usunA.css'
import Auta from './Auta.css'
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
        console.log(tempCar)
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
          </tr>)


      }
    }
    return cars
  }

  szczegolyAuta = (carId) => {
   // console.log("boom")
    this.props.history.push("/car-details?car=" + carId)


  }

  addCar = (car) => {
    const tmp = this.state.auto.slice()
    tmp.push(car)
    this.setState({ auto: tmp })
  }

  delCar = (id) => {
    const tmp = this.state.auto.filter((auto) => auto.id !== id)
    this.setState({ auto: tmp })
  }


  render() {
    let zero = null
    if (this.state.auto) {
      try {
        zero = <UsunAuto className="Tlo" id={this.state.auto[0].id} delC={this.delCar} ></UsunAuto>
      } catch{ }
    }

    return (

      <React.Fragment>

        <Route path="/car-details" component={Szczegoly}  ></Route>
        <Route path="/" exact render={() => <DodajAuto addC={this.addCar}></DodajAuto>} />
        <Route path="/" exact render={() =>
          <table className="Table" >
            <thead>
            <td>LP</td>
            <td>Marka</td>
            <td>Model</td>
            <td>Rocznik</td>
            <td>Cena</td>
            </thead>
            <tbody>{this.createTable()}</tbody>
          </table>}
        />
        <Route path="/" exact render={() => zero} />


      </React.Fragment>

    )
  }
}

export default withRouter(Autko)