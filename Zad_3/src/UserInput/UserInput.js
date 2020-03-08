import React from 'react';
const inputStyle = {
    border: '10px solid blue'
}
const userInput = (props) => {
    return <input typ="text" 
    style={inputStyle}
    onChange={props.changed}
    value={props.currentName}/>;
}
 
export default userInput;