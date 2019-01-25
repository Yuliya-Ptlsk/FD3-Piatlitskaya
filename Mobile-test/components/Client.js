"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import {mobileEvents} from "./events"

import './Client.css';

class Client extends React.PureComponent {
    static propTypes = {
        info: PropTypes.shape({
            id: PropTypes.string.isRequired,
            secondName: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            patronymic: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
        }),
    };

    editBtnClicked = (EO) => {
        mobileEvents.emit("EEditClient",this.props.info.id,EO);
    };

    deleteBtnClicked = (EO) => {
        mobileEvents.emit("EDeleteClient",this.props.info.id,EO);
    };

    render () {
        console.log("Client id=" + this.props.info.id + " render");

        return (
            <tr className="client">
                <td><span>{this.props.info.secondName}</span></td>
                <td><span>{this.props.info.name}</span></td>
                <td><span>{this.props.info.patronymic}</span></td>
                <td><span>{this.props.info.balance}</span></td>
                <td>{(this.props.info.balance>=0)?<span className="active"  >Активен</span>:<span className="blocked" >Заблокирован</span>}</td>
                <td><input type="button" value="Редактировать" onClick={this.editBtnClicked} /></td>
                <td><input type="button" value="Удалить" onClick={this.deleteBtnClicked} /></td>
            </tr>

        );
    }
}

export default Client;
