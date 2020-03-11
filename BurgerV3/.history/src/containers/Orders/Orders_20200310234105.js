import React, { Component} from 'react'

import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount () {
        axios.get('/orders.json')
        .then(res => {
            const fetchOrders = []
            for (let key in res.data){
                fetchedOrders.push(res.data[key])
            }
            this.setState({loading: false})
        })
        .catch(err => {
            this.setState({loading: false})
        })
    }

    render () {
        return (
            <div>
                <Order></Order>
                <Order></Order>
            </div>
        )
    }
}


export default Orders