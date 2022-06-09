import React from 'react';
import './navbar.scss'
import styled from 'styled-components'

function navbar(){
    return (
            <div className='navbar'>
                <h1>Logo</h1>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="/AddProduct">Add Products</a></li>
                    <li><a href="#">Cart</a></li>
                   

                </ul>
            </div>
    );
};

export default navbar;