"use strict";

import {editClientFunc} from '../modules/editClientFunc';

test('тестирование изменения информации о клиенте в списке',()=>{
    let clients_Velcom = [
        {"id": "1_V","secondName": "Иванов","name": "Иван","patronymic": "Иванович","balance": 200},
        {"id": "2_V","secondName": "Сидоров","name": "Сидор","patronymic": "Сидорович","balance": 250},
        {"id": "3_V","secondName": "Петров","name": "Пётр","patronymic": "Петрович","balance": 180},
        {"id": "4_V","secondName": "Григорьев","name": "Григорий","patronymic": "Григорьевич","balance": -220}
    ];
    let editClient = {"id": "4_V","secondName": "Григорьев","name": "Федор","patronymic": "Иванович","balance": 100};

    let afterEdit =[
        {"id": "1_V","secondName": "Иванов","name": "Иван","patronymic": "Иванович","balance": 200},
        {"id": "2_V","secondName": "Сидоров","name": "Сидор","patronymic": "Сидорович","balance": 250},
        {"id": "3_V","secondName": "Петров","name": "Пётр","patronymic": "Петрович","balance": 180},
        {"id": "4_V","secondName": "Григорьев","name": "Федор","patronymic": "Иванович","balance": 100}
    ];
    expect(editClientFunc(clients_Velcom,editClient)).not.toBe(clients_Velcom);
    expect(editClientFunc(clients_Velcom,editClient)).toEqual(afterEdit);
});