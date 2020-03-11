import React from 'react';
import { NavLink} from 'react-router-dom'
import classes from './NavigationItem.css';

const navigationItem = ( props ) => (
    <li className={classes.NavigationItem}>
        <NavLink 
            href={props.link}>{props.children}</a>
    </li>
);

export default navigationItem;