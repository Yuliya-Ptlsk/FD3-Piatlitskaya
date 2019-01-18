'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import './CardComponent.css';

class CardComponent extends React.Component{
    static propTypes = {
        addBtnMode: PropTypes.number.isRequired,
        cardMode: PropTypes.number.isRequired,
        cbAddBtnClicked: PropTypes.func.isRequired,
        cbSetEditedValues: PropTypes.func.isRequired,
        cbSetNewValues: PropTypes.func.isRequired,
        cbCancelBtnClicked: PropTypes.func.isRequired,
        data: PropTypes.arrayOf(
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
        code: PropTypes.number,
    };

    state = {
        itemsList:this.props.itemsList,
        code:this.props.code,
        type: true,
        brand: true,
        model: true,
        power: true,
        photoURL: true,
        quantity: true,
        price: true,
        disabledSaveBtn: false,
        typeNew: false,
        brandNew: false,
        modelNew: false,
        powerNew: false,
        photoURLNew: false,
        quantityNew: false,
        priceNew: null,
        typeNewValue: null,
        brandNewValue: null,
        modelNewValue: null,
        powerNewValue: null,
        photoURLNewValue: null,
        quantityNewValue: null,
        priceNewValue: null,
    };

    id = this.props.articlesArr.length;

    componentWillReceiveProps = (newProps) => {
        this.setState({
            itemsList:newProps.itemsList,
        });
    };

    addBtnClicked = () => {
        this.props.cbAddBtnClicked(0,3);
    };

    editedArr = this.props.itemsList.slice();

    saveEditedValues =(EO)=>{
        this.editedArr.forEach(item =>{
            if(item.code==this.props.code){
                switch(EO.target.name){
                    case "type":
                        if(EO.target.value){
                            this.setState({type:true});
                            item.type = EO.target.value;
                        } else {
                            this.setState({type:false});
                        }
                        break;
                    case "brand":
                        if(EO.target.value){
                            this.setState({brand:true});
                            item.brand = EO.target.value;
                        } else {
                            this.setState({brand:false});
                        }
                        break;
                    case "model":
                        if(EO.target.value){
                            this.setState({model:true});
                            item.model = EO.target.value;
                        } else {
                            this.setState({model:false});
                        }
                        break;
                    case "power":
                        if(EO.target.value){
                            this.setState({power:true});
                            item.power = +EO.target.value;
                        } else {
                            this.setState({power:false});
                        }
                        break;
                    case "photoURL":
                        if(EO.target.value){
                            this.setState({photoURL:true});
                            item.photoURL = EO.target.value;
                        } else {
                            this.setState({photoURL:false});
                        }
                        break;
                    case "quantity":
                        if(EO.target.value){
                            this.setState({quantity:true});
                            item.quantity = +EO.target.value;
                        } else {
                            this.setState({quantity:false});
                        }
                        break;
                    case "price":
                        if(EO.target.value){
                            this.setState({price:true});
                            item.price = +EO.target.value;
                        } else {
                            this.setState({price:false});
                        }
                        break;
                }
            }
        });
    };

    setEditedValues = ()=> {
        this.setState({itemsList:this.editedArr});
        this.props.cbSetEditedValues(this.state.itemsList);
    };

    cancelBtnClicked_1 = () => {
        this.props.cbCancelBtnClicked(1,1);
    };

    saveNewValues =(EO)=>{
        switch(EO.target.name){
            case "type":
                        if(EO.target.value){
                            this.setState({
                                typeNew:true,
                                typeNewValue:EO.target.value
                            });
                        } else {
                            this.setState({typeNew:false});
                        }
                        break;
            case "brand":
                        if(EO.target.value){
                            this.setState({
                                brandNew:true,
                                brandNewValue:EO.target.value
                            });
                        } else {
                            this.setState({brandNew:false});
                        }
                        break;
            case "model":
                        if(EO.target.value){
                            this.setState({
                                modelNew:true,
                                modelNewValue:EO.target.value
                            });
                        } else {
                            this.setState({modelNew:false});
                        }
                        break;
            case "power":
                        if(EO.target.value){
                            this.setState({
                                powerNew:true,
                                powerNewValue:EO.target.value
                            });
                        } else {
                            this.setState({powerNew:false});
                        }
                        break;
            case "photoURL":
                        if(EO.target.value){
                            this.setState({
                                photoURLNew:true,
                                photoURLNewValue:EO.target.value
                            });

                        } else {
                            this.setState({photoURLNew:false});
                        }
                        break;
            case "quantity":
                        if(EO.target.value){
                            this.setState({
                                quantityNew:true,
                                quantityNewValue:EO.target.value
                            });
                        } else {
                            this.setState({quantityNew:false});
                        }
                        break;
            case "price":
                        if(EO.target.value){
                            this.setState({
                                priceNew:true,
                                priceNewValue:EO.target.value
                            });

                        } else {
                            this.setState({price:false});
                        }
                        break;
        }
    };

    setNewValues = ()=>{
        let newItem = {
            code:this.id++,
            type:this.state.typeNewValue,
            brand:this.state.brandNewValue,
            model:this.state.modelNewValue,
            power:+this.state.powerNewValue,
            photoURL:this.state.photoURLNewValue,
            quantity:+this.state.quantityNewValue,
            price:+this.state.priceNewValue};
        this.state.itemsList.push(newItem);
        this.props.cbSetNewValues(this.state.itemsList);
    };

    cancelBtnClicked_2 = () => {
        this.props.cbCancelBtnClicked(1,0);
    };

    render(){

        if(this.props.cardMode==0 && this.props.addBtnMode==1){
            return (
                <div className="AddBtn"><input type="button" value="Add product" onClick={this.addBtnClicked} /></div>
                );
        } else if(this.props.cardMode==1 && this.props.addBtnMode==1){
            return (
                <div>
                    <div className="AddBtn"><input type="button" value="Add product" onClick={this.addBtnClicked} /></div>
                    <div className="Card">
                        <div className="CardName"><span>{this.props.data[0].type}</span> <span>{this.props.data[0].brand}</span> <span>{this.props.data[0].model}</span></div>
                        <span>Мощность: {this.props.data[0].power + "\xa0кВт"}</span><br/>
                        <span>Количество на складе: {this.props.data[0].quantity+ "\xa0шт"}</span><br/>
                        <span>Цена: {this.props.data[0].price+ "\xa0BYN"}</span>
                    </div>
                </div>
            )
        } else if(this.props.cardMode==2 && this.props.addBtnMode==0){
            return (
            <div className="Card">
                    <div className="CardType">Корректировка карточки товара:</div>
                    <div className="CardName"><span>{this.props.data[0].type}</span> <span>{this.props.data[0].brand}</span> <span>{this.props.data[0].model}</span></div>
                <label>Тип: <div className="Input"><input type="text" name="type" defaultValue={this.props.data[0].type} onChange={this.saveEditedValues} onBlur={this.saveEditedValues}/> {this.state.type?null:<span className="NotValid">Поле обязательно для заполнения. Вводимое значение должно быть строкой.</span>}</div></label><br/>
                <label>Марка: <div className="Input"><input type="text" name="brand" defaultValue={this.props.data[0].brand} onChange={this.saveEditedValues} onBlur={this.saveEditedValues} /> {this.state.brand?null:<span className="NotValid">Поле обязательно для заполнения. Вводимое значение должно быть строкой.</span>}</div></label><br/>
                <label>Серия и модель: <div className="Input"><input type="text" name="model" defaultValue={this.props.data[0].model} onChange={this.saveEditedValues} onBlur={this.saveEditedValues} /> {this.state.model?null:<span className="NotValid">Поле обязательно для заполнения. Вводимое значение должно быть строкой.</span>}</div></label><br/>
                <label>Мощность, кВт: <div className="Input"><input type="text" name="power" defaultValue={this.props.data[0].power} onChange={this.saveEditedValues} onBlur={this.saveEditedValues} /> {this.state.power?null:<span className="NotValid">Поле обязательно для заполнения. Вводимое значение должно быть числовым.</span>}</div></label><br/>
                <label>URL изображения: <div className="Input"><input type="text" name="photoURL" defaultValue={this.props.data[0].photoURL} onChange={this.saveEditedValues} onBlur={this.saveEditedValues} /> {this.state.photoURL?null:<span className="NotValid">Поле обязательно для заполнения. Вводимое значение должно быть строкой.</span>}</div></label><br/>
                <label>Количество на складе: <div className="Input"><input type="text" name="quantity" defaultValue={this.props.data[0].quantity} onChange={this.saveEditedValues} onBlur={this.saveEditedValues} /> {this.state.quantity?null:<span className="NotValid">Поле обязательно для заполнения. Вводимое значение должно быть числовым.</span>}</div></label><br/>
                <label>Цена, BYN: <div className="Input"><input type="text" name="price" defaultValue={this.props.data[0].price} onChange={this.saveEditedValues} onBlur={this.saveEditedValues} /> {this.state.price?null:<span className="NotValid">Поле обязательно для заполнения. Вводимое значение должно быть числовым.</span>}</div></label><br/>
                    <input type="button" value="Save" disabled={!(this.state.type&&this.state.brand&&this.state.model&&this.state.power&&this.state.photoURL&&this.state.quantity&&this.state.price)} onClick={this.setEditedValues} /><input type="button" value="Cancel" onClick={this.cancelBtnClicked_1} />
                </div>
            )
        } else if(this.props.cardMode==3 && this.props.addBtnMode==0){
            return(
                <div className="Card">
                    <div className="CardType">Добавить новую карточку товара:</div>
                    <span>ID: {this.props.itemsList.length}</span><br/>
                    <label>Тип: <div className="Input"><input type="text" name="type" onChange={this.saveNewValues} onBlur={this.saveNewValues} /> {this.state.typeNew?null:<span className="NotValid">Поле обязательно для заполнения. Вводимое значение должно быть строкой.</span>}</div></label><br/>
                    <label>Марка: <div className="Input"><input type="text" name="brand" onChange={this.saveNewValues} onBlur={this.saveNewValues} /> {this.state.brandNew?null:<span className="NotValid">Поле обязательно для заполнения. Вводимое значение должно быть строкой.</span>}</div></label><br/>
                    <label>Серия и модель: <div className="Input"><input type="text" name="model" onChange={this.saveNewValues} onBlur={this.saveNewValues} /> {this.state.modelNew?null:<span className="NotValid">Поле обязательно для заполнения. Вводимое значение должно быть строкой.</span>}</div></label><br/>
                    <label>Мощность, кВт: <div className="Input"><input type="text" name="power" onChange={this.saveNewValues} onBlur={this.saveNewValues} /> {this.state.powerNew?null:<span className="NotValid">Поле обязательно для заполнения. Вводимое значение должно быть числовым.</span>}</div></label><br/>
                    <label>URL изображения: <div className="Input"><input type="text" name="photoURL" onChange={this.saveNewValues} onBlur={this.saveNewValues} /> {this.state.photoURLNew?null:<span className="NotValid">Поле обязательно для заполнения. Вводимое значение должно быть строкой.</span>}</div></label><br/>
                    <label>Количество на складе: <div className="Input"><input type="text" name="quantity" onChange={this.saveNewValues} onBlur={this.saveNewValues} /> {this.state.quantityNew?null:<span className="NotValid">Поле обязательно для заполнения. Вводимое значение должно быть числовым.</span>}</div></label><br/>
                    <label>Цена, BYN: <div className="Input"><input type="text" name="price" onChange={this.saveNewValues} onBlur={this.saveNewValues} /> {this.state.priceNew?null:<span className="NotValid">Поле обязательно для заполнения. Вводимое значение должно быть числовым.</span>}</div></label><br/>
                    <input type="button" value="Add" disabled={!(this.state.typeNew&&this.state.brandNew&&this.state.modelNew&&this.state.powerNew&&this.state.photoURLNew&&this.state.quantityNew&&this.state.priceNew)} onClick={this.setNewValues} /><input type="button" value="Cancel" onClick={this.cancelBtnClicked_2} />
                </div>
            )

        }
    }
}

export default CardComponent;
