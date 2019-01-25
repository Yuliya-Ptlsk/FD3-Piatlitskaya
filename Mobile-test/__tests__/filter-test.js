"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import '../components/MobileCompany.css';
import MobileCompany from '../components/MobileCompany';

test('Тестирование фильтрации "активные клиенты" и "заблокированные клиенты"', () => {
    //тестовая версия компонента MobileCompany
    const component = renderer.create(
        <MobileCompany/>
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

