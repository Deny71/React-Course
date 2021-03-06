import React from 'react'
import classes from './Input.css'


const input = (props) => {
    let inputElement=null;
    const inputClasses = [classes.inputElement]
    switch (props.elementType) {
        case('input'):
        inputElement = <input className={inputClasses}
        {...props.elementConfig}
         value={props.value}
         onChange={props.changed}></input>
        break
        case ('textarea'):
            inputElement = <textarea className={inputClasses}
            {...props.elementConfig}
             value={props.value}
             onChanged={props.changed}></textarea>
            break
        case ('select'):
            inputElement = ( 
            <select
                 className={inputClasses}
                 value={props.value}
                 onChange={props.changed}>
                 {props.elementConfig.options.map(option => (
                     <option key={option.value} value={option.value}>
                         {option.displayValue}
                     </option>
                 ))}
                 </select>

            )
            break
        default:
            inputElement = <input className={inputClasses}
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