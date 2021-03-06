import React, { Component} from 'react'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount () {
        axios.get('/orders')
        .then(res => {
            const fetchedOrders = []
            for (let key in res.data){
                fetchedOrders.push({
                    ...res.data[key],
                id: key
            })
            }
            this.setState({loading: false, orders: fetchedOrders})
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


export default withErrorHandler(Orders, axios)