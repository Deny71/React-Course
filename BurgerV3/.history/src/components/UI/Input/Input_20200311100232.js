import React from 'react'
import classes from './Input.css'


const input = (props) => {
    let inputElement=null;

    switch (props.inputType) {
        case('input'):
        inputElement = <input className={classes.InputElement}>{...props}</input>
        break
        case ('textarea'):
            inputElement = <textarea className={classes.inputElement}>{...props}</textarea>
            break
        default:
            inputElement = <input className={classes.InputElement}>{...props}</input>
}
    return (
<div>
    <label>{props.label}</label>
        {inputElement}
</div>
)
}

export default input