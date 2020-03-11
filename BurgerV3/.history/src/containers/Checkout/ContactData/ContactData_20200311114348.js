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
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false
                },
    
                street: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Street'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false
                },
                zipCode: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'ZIP Code'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 5,
                        maxLength: 5,
                    },
                    valid: false
                },
                country: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Country'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Your E-mal'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false
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
        const formData = {}
        for (let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
            
        }
         const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
            
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
    checkValidity(value,rules){
       let isValid = false;
        if(rules.required){
             isValid = value.trim() !== '';
        }
        if (rules.minLength){
            isValid = value.minLength >= rules.minLength
        }
        if (rules.maxLength) {
            isValid = value.length >= rules.maxLength
        }
        return isValid
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedFormElement = {
             ...updatedOrderForm[inputIdentifier]
            
        };
        updatedFormElement.value =event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        this.setState({orderForm: updatedOrderForm})
    }
    render () {
        const formElementArray = []
        for (let key in this.state.orderForm){
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                
                  {formElementArray.map(formElement => (
                    <Input 

                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}></Input>
                ))

                }
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