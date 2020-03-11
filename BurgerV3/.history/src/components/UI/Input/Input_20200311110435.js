import React from 'react'
import classes from './Input.css'


const input = (props) => {
    let inputElement=null;

    switch (props.elementType) {
        case('input'):
        inputElement = <input className={classes.InputElement}
        {...props.elementConfig}
         value={props.value}
         onChange={props.changed}></input>
        break
        case ('textarea'):
            inputElement = <textarea className={classes.inputElement}
            {...props.elementConfig}
             value={props.value}
             onChanged={props.changed}></textarea>
            break
        case ('select'):
            inputElement = ( 
            <select
                 className={classes.inputElement}
                 value={props.value}
                 onChanged={props.changed}>
                 {props.elementConfig.options.map(option => (
                     <option key={option.value} value={option.value}>
                         {option.displayValue}
                     </option>
                 ))}
                 </select>

            )
            break
        default:
            inputElement = <input className={classes.InputElement}
            {...props.elementConfig}
             value={props.value}
             onChanged={props.changed}></input>
}
    return (
<div className={classes.Input}>
    <label className={classes.Label}>{props.label}</label>
        {inputElement}
</div>
)
}

export default input