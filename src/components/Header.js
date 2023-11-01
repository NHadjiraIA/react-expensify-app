import React from 'react';
import { NavLink} from 'react-router-dom';

const Header =() =>(
    <div>
        <h1>Expensify</h1>
        <NavLink to='/' activeClassName='is-active' exact={true}> Go home </NavLink>
        <NavLink to='/create' activeClassName='is-active'> Go Create </NavLink>
        <NavLink to='/edit/:id' activeClassName='is-active'> Go Edit </NavLink>
        <NavLink to='/help' activeClassName='is-active'> Go help </NavLink>
    </div>
)

export default Header;