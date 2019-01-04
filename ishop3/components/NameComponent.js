import React from 'react';
import PropTypes from 'prop-types';

import './NameComponent.css';

class NameComponent extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    };
    render (){
        return <div className="Text">{this.props.text}</div>;
    }
}

export default NameComponent;