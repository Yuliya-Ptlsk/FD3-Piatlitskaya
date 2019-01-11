"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

import ColorFrame from './ColorFrame';

class RainbowFrame extends React.Component {
    static propTypes = {
        colors: PropTypes.arrayOf(PropTypes.string.isRequired)
    };

    render(){
        let innerCode = this.props.children;
        this.props.colors.forEach( v =>
            innerCode = <ColorFrame color={v}>{innerCode}</ColorFrame>
        );
        return innerCode;
    }
}

export default RainbowFrame;