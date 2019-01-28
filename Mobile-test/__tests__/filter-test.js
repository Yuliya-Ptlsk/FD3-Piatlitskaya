"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import '../components/MobileCompany.css';
import MobileCompany from '../components/MobileCompany';

let clients = {
    "Velcom": [
    {
        "id": "1_V",
        "secondName": "Иванов",
        "name": "Иван",
        "patronymic": "Иванович",
        "balance": 200
    },
    {
        "id": "2_V",
        "secondName": "Сидоров",
        "name": "Сидор",
        "patronymic": "Сидорович",
        "balance": 250
    },
    {
        "id": "3_V",
        "secondName": "Петров",
        "name": "Пётр",
        "patronymic": "Петрович",
        "balance": 180
    },
    {
        "id": "4_V",
        "secondName": "Григорьев",
        "name": "Григорий",
        "patronymic": "Григорьевич",
        "balance": -220
    }
],
    "MTS": [
        {
            "id": "1_M",
            "secondName": "Сергеев",
            "name": "Сергей",
            "patronymic": "Сергеевич",
            "balance": 50
        },
        {
            "id": "2_M",
            "secondName": "Смирнов",
            "name": "Станислав",
            "patronymic": "Станиславович",
            "balance": 190
        },
        {
            "id": "3_M",
            "secondName": "Фёдоров",
            "name": "Фёдор",
            "patronymic": "Фёдорович",
            "balance": -100
        },
        {
            "id": "4_M",
            "secondName": "Максимов",
            "name": "Максим",
            "patronymic": "Максимович",
            "balance": -20
        }
    ]
};

test('Тестирование фильтрации "активные клиенты" и "заблокированные клиенты"', () => {
    //тестовая версия компонента MobileCompany
    const component = renderer.create(
        <MobileCompany clients={clients} />
    );

    //получаем снэпшот (HTML-снимок) компонента для сверки, что верстка не изменилась
    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

//находим в верстке кнопки "все","активные","заблокированные" клиенты
    const buttonActive = component.root.find(elem => elem.props.value == 'Активные');
    const buttonBlocked = component.root.find(elem => elem.props.value == 'Заблокированные');
    const buttonAll = component.root.find(elem => elem.props.value == 'Все');

//отфильтруем активных клиентов (нажмем на кнопку)
    buttonActive.props.onClick();
//получаем измененный снэпшот
    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();
//нажмем на кнопку еще раз
    buttonActive.props.onClick();
//получим окончательный снэпшот
    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

//отфильтруем заблокированных клиентов (нажмем на кнопку)
    buttonBlocked.props.onClick();
//получаем измененный снэпшот
    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();
//нажмем на кнопку еще раз
    buttonBlocked.props.onClick();
//получим окончательный снэпшот
    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

//отобразим всех клиентов (нажмем на кнопку)
    buttonAll.props.onClick();
//получаем измененный снэпшот
    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();
//нажмем на кнопку еще раз
    buttonAll.props.onClick();
//получим окончательный снэпшот
    componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();
});

