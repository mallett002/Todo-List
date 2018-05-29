import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import desert from './images/desert.jpg';
import crashing from './images/crashing.jpg';
import manhattan from './images/manhattan.jpg';
import snowmts from './images/snowmts.jpg';
import train from './images/train.jpg';
import seattle from './images/seattle.jpg';
import path from './images/path.jpg';
import germany from './images/germany.jpg';
import chicago from './images/chicago.jpg';

const container = document.querySelector('#container');

const IMAGES = [
    `${desert}`,
    `${crashing}`,
    `${manhattan}`,
    `${snowmts}`,
    `${train}`,
    `${seattle}`,
    `${path}`,
    `${germany}`,
    `${chicago}`
];



ReactDOM.render(
    <App images={IMAGES} />,
    container
);