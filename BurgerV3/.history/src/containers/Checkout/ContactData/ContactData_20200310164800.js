import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classess from './ContactData.css'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner'


class ContactData extends Component{
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }


    orderHandler = (event) => {
        event.preventDefault();
         this.setState( { loading: true } );
        const order = {
            ingredients: this.state.ingredients,
            price: this.props.price,
            customer: {
                name: 'Max Schwarzmüller',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false} );
            } )
            .catch( error => {
                this.setState( { loading: false} );
            } );
        console.log(this.props.ingredients)
    }

    render () {
        let form = (
            <form>
            <input className={classess.Input} type="text" name="name" placeholder ="yourname"></input>
            <input className={classess.Input} type="email" name="email" placeholder ="Your email"></input>
            <input className={classess.Input} type="text" name="street" placeholder ="Street"></input>
            <input className={classess.Input} type="text" name="postal" placeholder ="Postal Code"></input>
            <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
        </form>
        );
        if(this.state.loading) {
            form = <Spinner></Spinner>
        }
        return (
            <div className = {classess.ContactData}>
                <h4>Enter your contact data</h4>
               
            </div>
        )
    }

}

export default ContactData