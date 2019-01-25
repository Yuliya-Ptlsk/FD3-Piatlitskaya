"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let clients = require("./data.json");

ReactDOM.render(
    <MobileCompany
        clients={clients}
    />,
    document.getElementById('container')
);