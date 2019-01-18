'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import './NewCardComponent.css';

class NewCardComponent extends React.Component {
    static propTypes = {
        addBtnMode: PropTypes.number.isRequired,
        cardMode: PropTypes.number.isRequired,
        cbCancelBtnClicked: PropTypes.func.isRequired,
        itemsList:PropTypes.arrayOf(
            PropTypes.shape({
                code: PropTypes.number,
                type: PropTypes.string,
                brand: PropTypes.string,
                model: PropTypes.string,
                power: PropTypes.number,
                photoURL: PropTypes.any,
                quantity: PropTypes.number,
                price: PropTypes.number
            })
        ),
    };

    // componentDidUpdate = (oldProps, oldState) => { this.click = false;};
    //
    // click = false;

    cancelBtnClicked = () => {
        this.props.cbCancelBtnClicked(1,1);
    };

    render() {
        return (
                <div className="Card">
                    <div className="CardType">Добавить товар</div>
                    <span>ID: {this.props.itemsList.length + 1}</span><br/>
                    <label>Тип: <input type="text" /> <span className="NotValid">Поле обязательно для заполнения. Вводимое значение должно быть строкой.</span></label><br/>
                    <label>Марка: <input type="text" /> <span className="NotValid">Поле обязательно для заполнения. Вводимое значение должно быть строкой.</span></label><br/>
                    <label>Серия и модель: <input type="text" /> <span className="NotValid">Поле обязательно для заполнения. Вводимое значение должно быть строкой.</span></label><br/>
                    <label>Мощность, кВт: <input type="text" /> <span className="NotValid">Поле обязательно для заполнения. Вводимое значение должно быть числовым.</span></label><br/>
                    <label>URL изображения: <input type="text" /> <span className="NotValid">Поле обязательно для заполнения. Вводимое значение должно быть строкой.</span></label><br/>
                    <label>Количество на складе: <input type="text" /> <span className="NotValid">Поле обязательно для заполнения. Вводимое значение должно быть числовым.</span></label><br/>
                    <label>Цена, BYN: <input type="text" /> <span className="NotValid">Поле обязательно для заполнения. Вводимое значение должно быть числовым.</span></label><br/>
                    <input type="button" value="Add" disabled="true"/><input type="button" value="Cancel" onClick={this.cancelBtnClicked} />
                </div>
        )
    }
}

export default NewCardComponent;