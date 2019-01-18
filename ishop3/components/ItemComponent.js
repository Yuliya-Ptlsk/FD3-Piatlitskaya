'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import './ItemComponent.css';

class ItemComponent extends React.Component {
    static propTypes = {
        code: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        power: PropTypes.number.isRequired,
        photoURL: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        isSelected: PropTypes.bool,
        cbSelectedItemCode: PropTypes.func.isRequired,
        cbDelete: PropTypes.func.isRequired,
        cbEditItem: PropTypes.func.isRequired,
        cardMode: PropTypes.number.isRequired,
    };

    selectedItemCode = (EO) => {
        if(this.props.cardMode==2||this.props.cardMode==3){
            EO.preventDefault();
            EO.stopPropagation();
        } else {
            this.props.cbSelectedItemCode(this.props.code,this.props.i);
        };
    };

    delete = (EO) => {
        if(this.props.cardMode==2||this.props.cardMode==3){
            EO.preventDefault();
            EO.stopPropagation();
        } else {
            this.props.cbDelete(this.props.code,EO);
        };
    };

    editItem = (EO) => {
        if(this.props.cardMode==2||this.props.cardMode==3){
            EO.preventDefault();
            EO.stopPropagation();
        } else {
            this.props.cbEditItem(this.props.code,EO);
        };
    };

    render () {
        let color=this.props.isSelected ? "#ff7f50" : "transparent";
        return (
            <div className="Article" onClick={this.selectedItemCode} style={{backgroundColor:color}}>
                <div className="Type">{this.props.type}</div>
                <div className="Brand">{this.props.brand}</div>
                <div className="Model">{this.props.model}</div>
                <div className="Power">{this.props.power}</div>
                <div className="Photo">{this.props.photoURL}</div>
                <div className="Quantity">{this.props.quantity}</div>
                <div className="Price">{this.props.price}</div>
                <div className="Control">
                    <input type="button" value="Edit" onClick={this.editItem} />
                    <input type="button" value="Delete" onClick={this.delete}/>
                </div>
            </div>
        );
    }
}

export default ItemComponent;
