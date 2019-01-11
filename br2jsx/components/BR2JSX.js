"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css'

class BR2JSX extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    };

    render(){
        let regExp = /<br\s?\/?>/;
        let splitText = this.props.text.split(regExp).map( (word,i) => [word,<br key={i} />]);
        console.log(splitText);
        return (
        <div className="BrComponent">
            {splitText}
        </div>
        )
    }
}

export default BR2JSX;