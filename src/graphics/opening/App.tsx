import React from 'react';
import { background } from './App.css';
import backgroundImg from './assets/background2.png';

export const App = () => {
    return (
    <>
        <img className={background} src={backgroundImg} />
        <div className={background}>
            <h1>Hello, world!</h1>
        </div>
    </>
    );
}