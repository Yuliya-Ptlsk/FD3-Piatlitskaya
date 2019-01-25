"use strict";

import {deleteItemFunc} from "../modules/deleteItemFunc";

test('тестирование удаления клиента из общего списка',()=>{
    let clients_Velcom = [
        {"id": "1_V","secondName": "Иванов","name": "Иван","patronymic": "Иванович","balance": 200},
        {"id": "2_V","secondName": "Сидоров","name": "Сидор","patronymic": "Сидорович","balance": 250},
        {"id": "3_V","secondName": "Петров","name": "Пётр","patronymic": "Петрович","balance": 180},
        {"id": "4_V","secondName": "Григорьев","name": "Григорий","patronymic": "Григорьевич","balance": -220}
    ];
    let afterDelete = [
        {"id": "1_V","secondName": "Иванов","name": "Иван","patronymic": "Иванович","balance": 200},
        {"id": "2_V","secondName": "Сидоров","name": "Сидор","patronymic": "Сидорович","balance": 250},
        {"id": "3_V","secondName": "Петров","name": "Пётр","patronymic": "Петрович","balance": 180},
    ];
    expect(deleteItemFunc(clients_Velcom,"4_V")).not.toBe(clients_Velcom);
    expect(deleteItemFunc(clients_Velcom,"4_V")).toEqual(afterDelete);
});