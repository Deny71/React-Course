import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classess from './ContactData.css'
class ContactData extends Component{
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    orderHandler = () => {
        console.log(this.props.ingredients)
    }

    render () {
        return (
            <div className = {classess.ContactData}>
                <h4>Enter your contact data</h4>
                <form>
                    <input className={classess.Input} type="text" name="name" placeholder ="yourname"></input>
                    <input className={classess.Input} type="email" name="email" placeholder ="Your email"></input>
                    <input className={classess.Input} type="text" name="street" placeholder ="Street"></input>
                    <input className={classess.Input} type="text" name="postal" placeholder ="Postal Code"></input>
                    <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
                </form>
            </div>
        )
    }

}

export default ContactData