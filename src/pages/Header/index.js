// Importações
import React from 'react';
import './style.css';

export default function Header(props){
    return(
        <header id="main-header">
            <h1>{props.title}</h1>
        </header>
    );
}