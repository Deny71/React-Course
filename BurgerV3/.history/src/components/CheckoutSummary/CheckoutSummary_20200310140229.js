import React from 'react'
import Burger from '../..Burger/Burger'
import Button from '../../UI/Button/Button'
const checkoutSummary = (props) => {
    return (
        <div>
            <h1>We hope it taste well !</h1>
            <div style={{width: '300[x', height: '300px', margin: 'auto'}}>
                <Burger ingrediet={props.ingredients}></Burger>
            </div>
            <Button btnType="Danger"> CANCEL</Button>
            <Button btnType="Success"> CONTIUNE</Button>
        </div>
    )

}

export default checkoutSummary