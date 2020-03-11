import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classess from './ContactData.css'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

class ContactData extends Component{
    state = {
       orderForm: {
        
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Name'
                    },
                    value: ''
                },
    
                street: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Street'
                    },
                    value: ''
                },
                zipCode: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'ZIP Code'
                    },
                    value: ''
                },
                country: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Country'
                    },
                    value: ''
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Your E-mal'
                    },
                    value: ''
                },
                deliveryMethod: {
                    elementType: 'select',
                    elementConfig: {
                        options: [
                            {value: 'fastest', displayValue: 'Fastest'},
                            {value: 'cheapest', displayValue: 'Cheapest'},
                    ]
                    },
                    value: ''
                },
    },
        loading: false
    }


    orderHandler = (event) => {
        event.preventDefault();
         this.setState( { loading: true } );
         console.log(this.props.ingredients);
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false} );
                this.props.history.push('/')
            } )
            .catch( error => {
                this.setState( { loading: false} );
            } );
        console.log(this.props.ingredients)
    }

    render () {
        let form = (
            <form>

                <Input inputtype="input" type="text" name="name" placeholder ="yourname"></Input>
                <Input  inputtype="input" type="email" name="email" placeholder ="Your email"></Input>
                <Input inputtype="input"  type="text" name="street" placeholder ="Street"></Input>
                <Input inputtype="input" type="text" name="postal" placeholder ="Postal Code"></Input>
              <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
        </form>
        );
        if(this.state.loading) {
            form = <Spinner></Spinner>
        }
        return (
            <div className = {classess.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        )
    }

}

export default ContactData