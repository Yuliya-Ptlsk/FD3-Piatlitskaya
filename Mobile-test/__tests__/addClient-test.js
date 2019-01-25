"use strict";

import {addClientFunc} from '../modules/addClientFunc';

test('тестирование добавления нового клиента в список',()=>{
    let clients_Velcom = [
        {"id": "1_V","secondName": "Иванов","name": "Иван","patronymic": "Иванович","balance": 200},
        {"id": "2_V","secondName": "Сидоров","name": "Сидор","patronymic": "Сидорович","balance": 250},
        {"id": "3_V","secondName": "Петров","name": "Пётр","patronymic": "Петрович","balance": 180},
        {"id": "4_V","secondName": "Григорьев","name": "Григорий","patronymic": "Григорьевич","balance": -220}
    ];
    let newClient = {"id": "5_V","secondName": "Смирнова","name": "Александра","patronymic": "Александровна","balance": -10};

    let afterAddition =[
        {"id": "1_V","secondName": "Иванов","name": "Иван","patronymic": "Иванович","balance": 200},
        {"id": "2_V","secondName": "Сидоров","name": "Сидор","patronymic": "Сидорович","balance": 250},
        {"id": "3_V","secondName": "Петров","name": "Пётр","patronymic": "Петрович","balance": 180},
        {"id": "4_V","secondName": "Григорьев","name": "Григорий","patronymic": "Григорьевич","balance": -220},
        {"id": "5_V","secondName": "Смирнова","name": "Александра","patronymic": "Александровна","balance": -10}
    ];
    expect(addClientFunc(clients_Velcom,newClient)).not.toBe(clients_Velcom);
    expect(addClientFunc(clients_Velcom,newClient)).toEqual(afterAddition);
});