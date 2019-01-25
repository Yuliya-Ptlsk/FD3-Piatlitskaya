"use strict";

//для тестирования функция saveEditInfo преобразована(опущены различные условия состояний элементов) в функцию editClientFunc
/*
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
};*/

function editClientFunc(list,editItem){
    let clientsArr = [...list];
    clientsArr.forEach( (client,i) => {
        if(client.id == editItem.id){
            clientsArr[i]=editItem;
        }
    });
    return clientsArr;
}

export {editClientFunc};


