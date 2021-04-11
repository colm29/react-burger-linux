import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
             className={classes.inputElement} 
             {...props.elementConfig} value={props.value} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={classes.inputElement} 
                {...props.elementConfig} value={props.value}/>;
            break;
        default:
            inputElement = <input
                className={classes.inputElement} 
                {...props.elementConfig} value={props.value} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
};

export default input