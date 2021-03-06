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

    render () {
        return (
            <div>
                <h4>Enter your contact data</h4>
                <form>
                    <input type="text" name="name" placeholder ="yourname"></input>
                    <input type="email" name="email" placeholder ="Your email"></input>
                    <input type="text" name="street" placeholder ="Street"></input>
                    <input type="text" name="postal" placeholder ="Postal Code"></input>
                    <Button btnType="Success">Order</Button>
                </form>
            </div>
        )
    }

}

export default ContactData