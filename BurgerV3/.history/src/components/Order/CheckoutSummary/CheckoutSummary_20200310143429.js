import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classess from './CheckoutSummary.css'


const checkoutSummary = (props) => {
    return (
        <div className ={classess.CheckoutSummary}>
            <h1>We hope it taste well !</h1>
            <div style={{width: '300[x', height: '300px', margin: 'auto'}}>
                <Burger ingredient={props.ingredients}></Burger>
            </div>
            <Button
                btnType="Danger"
                clicked>CANCEL</Button>
            <Button 
                btnType="Success"
                clicked>CONTIUNE</Button>
        </div>
    )

}

export default checkoutSummary