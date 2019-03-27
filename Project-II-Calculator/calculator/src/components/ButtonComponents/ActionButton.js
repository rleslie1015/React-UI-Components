import React from 'react';
import './Button.css';

function ActionButton (props) {
    return (
        <div className={props.buttonStyle}><button>
            {props.text}
            </button></div>
    )
}
export default ActionButton;