"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import {mobileEvents} from "./events"

import './Form.css';

class Form extends React.PureComponent {
    static propTypes = {
        formMode: PropTypes.number.isRequired,
        companyMode: PropTypes.number.isRequired,
        info: PropTypes.shape({
            id: PropTypes.string,
            secondName: PropTypes.string,
            name: PropTypes.string,
            patronymic: PropTypes.string,
            balance: PropTypes.number,
        }),
        id: PropTypes.number.isRequired,
    };

    cancel = (EO) =>{
        mobileEvents.emit("ECancel",EO)
    };

    newSecNameRef = null;
    newNameRef = null;
    newPatrRef = null;
    newBalanceRef = null;

    setNewSecNameRef = (ref)=>{
        this.newSecNameRef = ref;
    };

    setNewNameRef = (ref)=>{
        this.newNameRef = ref;
    };

    setNewPatrRef = (ref)=>{
        this.newPatrRef = ref;
    };

    setNewBalanceRef = (ref)=>{
        this.newBalanceRef = ref;
    };

    saveValue = () => {
        if(this.newSecNameRef && this.newNameRef && this.newPatrRef && this.newBalanceRef){
            let client = {
                secondName: this.newSecNameRef.value,
                name: this.newNameRef.value,
                patronymic: this.newPatrRef.value,
                balance: +this.newBalanceRef.value
            };
            if(this.props.formMode == 1){
                if(this.props.companyMode == 0){
                    client.id = this.props.info.id;
                } else if (this.props.companyMode == 1){
                    client.id = this.props.info.id;
                }
                mobileEvents.emit("ESaveEditClient",client);
            } else if (this.props.formMode == 2){
                if(this.props.companyMode == 0){
                    client.id = (this.props.id + 1) + "_V";
                } else if (this.props.companyMode == 1){
                    client.id = (this.props.id + 1) + "_M";
                }
                mobileEvents.emit("ESaveNewClient",client);
            }

        }

    };

    render () {
        console.log("Form render");
        if(this.props.formMode==1){
            return (
                <form>
                    <label>Фамилия: <input type="text" defaultValue={this.props.info.secondName} ref={this.setNewSecNameRef} /></label>
                    <label>Имя: <input type="text" defaultValue={this.props.info.name} ref={this.setNewNameRef} /></label>
                    <label>Отчество: <input type="text" defaultValue={this.props.info.patronymic} ref={this.setNewPatrRef} /></label>
                    <label>Баланс: <input type="text" defaultValue={this.props.info.balance} ref={this.setNewBalanceRef} /></label>
                    <input type="button" value="Сохранить" onClick={this.saveValue} />
                    <input type="button" value="Отменить" onClick={this.cancel} />
                </form>)
        } else if (this.props.formMode==2){
            return (
                <form>
                    <label>Фамилия: <input type="text" ref={this.setNewSecNameRef} /></label>
                    <label>Имя: <input type="text" ref={this.setNewNameRef} /></label>
                    <label>Отчество: <input type="text" ref={this.setNewPatrRef} /></label>
                    <label>Баланс: <input type="text" ref={this.setNewBalanceRef} /></label>
                    <input type="button" value="Сохранить" onClick={this.saveValue} />
                    <input type="button" value="Отменить" onClick={this.cancel} />
                </form>
            )
        }
    }
}

export default Form;
