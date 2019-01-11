"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/RainbowFrame';
let colors = require("./colors.json");

ReactDOM.render(
    <RainbowFrame colors={colors}>Hello, I'm React!</RainbowFrame>,
    document.getElementById('container')
);
