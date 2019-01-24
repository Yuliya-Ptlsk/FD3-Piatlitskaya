"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import {mobileEvents} from "./events"

import './MobileCompany.css';

import Client from './Client';
import Form from './Form';

class MobileCompany extends React.PureComponent {
    static propTypes = {
        clients: PropTypes.shape({
            Velcom: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    secondName: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                    patronymic: PropTypes.string.isRequired,
                    balance: PropTypes.number.isRequired,
                }),
            ),
            MTS: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    secondName: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                    patronymic: PropTypes.string.isRequired,
                    balance: PropTypes.number.isRequired,
                }),
            ),
        })
    };

    state = {
        companyName:"Velcom",
        clients_Velcom: this.props.clients.Velcom,
        clients_MTS: this.props.clients.MTS,
        clients:this.props.clients.Velcom,
        elemNumber: null,
        //companyMode:0 - Velcom's clients are visible
        //companyMode:1 - MTS' clients are visible
        companyMode:0,
        //formMode:0 - client's form is hidden
        //formMode:1 - client's form is in correcting state
        //formMode:2 - client's form is in addition state
        formMode:0,
        //addBtnMode:0 - button is hidden
        //addBtnMode:1 - button is visible
        addBtnMode:1,
        //filterMode:0 - show all clients
        //filterMode:1 - show active clients
        //filterMode:2 - show blocked clients
        filterMode:0,
    };

    componentDidMount = () => {
        mobileEvents.addListener("EDeleteClient",this.deleteClient);
        mobileEvents.addListener("EEditClient",this.editClient);
        mobileEvents.addListener("ECancel",this.cancel);
        mobileEvents.addListener("ESaveEditClient",this.saveEditInfo);
        mobileEvents.addListener("ESaveNewClient",this.saveNewClient);
    };
    componentWillUnmount = () => {
        mobileEvents.removeListener("EDeleteClient",this.deleteClient);
        mobileEvents.removeListener("EEditClient",this.editClient);
        mobileEvents.removeListener("ECancel",this.cancel);
        mobileEvents.removeListener("ESaveEditClient",this.saveEditInfo);
        mobileEvents.removeListener("ESaveNewClient",this.saveNewClient);
    };

    setName_Velcom = () => {
        this.setState({
            companyName:"Velcom",
            clients: this.state.clients_Velcom,
            companyMode:0
        });
    };

    setName_MTS = () => {
        this.setState({
            companyName:"MTS",
            clients: this.state.clients_MTS,
            companyMode:1
        });
    };

    deleteClient = (id,EO) => {
        if(this.state.formMode == 0){
            if(confirm("Вы действительно хотите удалить этого клиента?")){
                let clientsArr = [];
                if (this.state.companyMode == 0){
                    clientsArr = this.state.clients_Velcom.filter(client => client.id != id);
                    this.setState({
                        clients_Velcom: clientsArr,
                        //clients:clientsArr,
                    });
                } else if (this.state.companyMode == 1){
                    clientsArr = this.state.clients_MTS.filter(client => client.id != id);
                    this.setState({
                        clients_MTS:clientsArr,
                        //clients:clientsArr,
                    });
                }
                if(this.state.filterMode == 0){
                    this.setState({clients:clientsArr});
                } else if(this.state.filterMode == 1){
                    let filterArr = this.filterActive(clientsArr);
                    this.setState({clients:filterArr});

                }else if(this.state.filterMode == 2){
                    let filterArr = this.filterBlocked(clientsArr);
                    this.setState({clients:filterArr});
                }
            } else return;
        } else {
            EO.preventDefault();
            EO.stopPropagation();
        }
    };

    editClient = (id,EO) => {
        if(this.state.formMode == 0){
            let number=null;
            this.state.clients.forEach((client,i)=>{
                if(client.id==id){
                    number=i;
                }
            });
            this.setState({
                formMode:1,
                addBtnMode:0,
                elemNumber:number,
            });
        } else {
            EO.preventDefault();
            EO.stopPropagation();

        }
    };

    addBtnClicked = () => {
        this.setState({
            addBtnMode:0,
            formMode:2,
        });
    };

    cancel = () => {
        this.setState({
            addBtnMode:1,
            formMode:0,
        });
    };

    saveEditInfo = (editClient) => {
        let changes = false;
        let clientsArr = [];
        if(this.state.filterMode == 0){
            clientsArr = [...this.state.clients]  ;
        } else if(this.state.filterMode == 1 || this.state.filterMode == 2){
            if(this.state.companyMode == 0){
                clientsArr = [...this.state.clients_Velcom];
            }else if(this.state.companyMode == 1){
                clientsArr = [...this.state.clients_MTS];
            }
        }
        clientsArr.forEach( (client,i) => {
            if(client.id == editClient.id){
                if(client.secondName != editClient.secondName || client.name != editClient.name || client.patronymic != editClient.patronymic || client.balance != editClient.balance){
                    changes = true;
                    clientsArr[i]=editClient;
                }
            }
        });
        if(changes){
            if(this.state.companyMode == 0){
                this.setState({clients_Velcom:clientsArr});
            }else if(this.state.companyMode == 1){
                this.setState({clients_MTS:clientsArr});
            }
            if(this.state.filterMode == 0){
                this.setState({clients: clientsArr});
            }else if(this.state.filterMode == 1){
                let filterArr = this.filterActive(clientsArr);
                this.setState({clients: filterArr});
            }else if(this.state.filterMode == 2){
                let filterArr = this.filterBlocked(clientsArr);
                this.setState({clients: filterArr});
            };
            this.setState({formMode:0});
        } else {
            this.setState({formMode:0});
        }
        this.setState({
            addBtnMode: 1,
        });
    };

    saveNewClient = (newClient) => {
        let clientsArr = [];
        if(this.state.filterMode == 0){
            clientsArr = [...this.state.clients];
            clientsArr.push(newClient);
            if(this.state.companyMode == 0){
                this.setState({clients_Velcom:clientsArr});
            }else if(this.state.companyMode == 1){
                this.setState({clients_MTS:clientsArr});
            }
            this.setState({clients:clientsArr});
        } else if(this.state.filterMode == 1){
            let filterArr = [];
            if(this.state.companyMode == 0){
                clientsArr = [...this.state.clients_Velcom];
                clientsArr.push(newClient);
                this.setState({clients_Velcom:clientsArr});
                filterArr = this.filterActive(clientsArr);
            } else if(this.state.companyMode == 1){
                clientsArr = [...this.state.clients_MTS];
                clientsArr.push(newClient);
                this.setState({clients_MTS:clientsArr});
                filterArr = this.filterActive(clientsArr);
            }
            this.setState({clients:filterArr});
        }   else if(this.state.filterMode == 2){
            let filterArr = [];
            if(this.state.companyMode == 0){
                clientsArr = [...this.state.clients_Velcom];
                clientsArr.push(newClient);
                this.setState({clients_Velcom:clientsArr});
                filterArr = this.filterBlocked(clientsArr);
            } else if(this.state.companyMode == 1){
                clientsArr = [...this.state.clients_MTS];
                clientsArr.push(newClient);
                this.setState({clients_MTS:clientsArr});
                filterArr = this.filterBlocked(clientsArr);
            }
            this.setState({clients:filterArr});
        }
        this.setState({
            formMode:0,
            addBtnMode:1,
        });
    };

    filterActive = (array) =>{
        return array.filter(client => client.balance >= 0);
    };

    filterBlocked = (array) => {
        return array.filter(client => client.balance < 0);
    };

    showAllClients = () => {
        if(this.state.companyMode == 0){
            this.setState({clients: this.state.clients_Velcom});
        } else if(this.state.companyMode == 1){
            this.setState({clients: this.state.clients_MTS})
        }
        this.setState({filterMode:0});
    };

    showActiveClients = () => {
        let arr = [];
        if(this.state.companyMode == 0){
            arr = [...this.state.clients_Velcom];
        } else if(this.state.companyMode == 1){
            arr = [...this.state.clients_MTS];
        }
        let activeClients = this.filterActive(arr);
        this.setState({
            clients: activeClients,
            filterMode:1,
        });
    };

    showBlockedClients = () => {
        let arr = [];
        if(this.state.companyMode == 0){
            arr = [...this.state.clients_Velcom];
        } else if(this.state.companyMode == 1){
            arr = [...this.state.clients_MTS];
        }
        let blockedClients = this.filterBlocked(arr);
        this.setState({
            clients: blockedClients,
            filterMode:2,
        });
    };

    render(){
        console.log("MobileCompany render");

        let clientsCode = this.state.clients.map(client => {
            return <Client key={client.id} info={client} />
            }
        );

        let idNumber = +(this.state.companyMode?(this.state.clients_MTS[this.state.clients_MTS.length-1].id.slice(0,-2)):(this.state.clients_Velcom[this.state.clients_Velcom.length-1].id.slice(0,-2)));

        return (
            <div className="mobile-company">
                <div className="company-name">
                    <input type="button" value="Velcom" disabled={(this.state.formMode == 1 || this.state.formMode == 2)?true:false} onClick={this.setName_Velcom} />
                    <input type="button" value="MTS" disabled={(this.state.formMode == 1 || this.state.formMode == 2)?true:false} onClick={this.setName_MTS} />
                    <div>Компания: {this.state.companyName}</div>
                </div>
                <div className="filter-buttons">
                    <input type="button" value="Все" disabled={(this.state.formMode == 1 || this.state.formMode == 2)?true:false} onClick={this.showAllClients} />
                    <input type="button" value="Активные" disabled={(this.state.formMode == 1 || this.state.formMode == 2)?true:false} onClick={this.showActiveClients} />
                    <input type="button" value="Заблокированные" disabled={(this.state.formMode == 1 || this.state.formMode == 2)?true:false} onClick={this.showBlockedClients} />
                </div>
                <table className="clients-list">
                    <tbody>
                    <tr>
                        <td><span>Фамилия</span></td>
                        <td><span>Имя</span></td>
                        <td><span>Отчество</span></td>
                        <td><span>Баланс</span></td>
                        <td><span>Статус</span></td>
                        <td><span>Редактировать</span></td>
                        <td><span>Удалить</span></td>
                    </tr>
                    {clientsCode}
                    </tbody>
                </table>
                {this.state.addBtnMode?<input type="button" value="Добавить клиента" onClick={this.addBtnClicked} />:null}
                {(this.state.formMode==1 || this.state.formMode==2)?
                    <Form
                        formMode={this.state.formMode}
                        companyMode={this.state.companyMode}
                        key={this.state.elemNumber}
                        info={this.state.clients[this.state.elemNumber]}
                        id={idNumber} />
                    :null
                }
            </div>
        );
    }
}

export default MobileCompany;