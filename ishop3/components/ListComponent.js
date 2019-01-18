'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import './ListComponent.css'; 

import NameComponent from './NameComponent';
import ItemComponent from './ItemComponent';
import CardComponent from './CardComponent';

class ListComponent extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        head: PropTypes.arrayOf(PropTypes.string.isRequired),
        articles: PropTypes.arrayOf(
            PropTypes.shape({
                code: PropTypes.number.isRequired,
                type: PropTypes.string.isRequired,
                brand: PropTypes.string.isRequired,
                model: PropTypes.string.isRequired,
                power: PropTypes.number.isRequired,
                photoURL: PropTypes.any.isRequired,
                quantity: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired
            })
        ),
        startCardMode:PropTypes.number.isRequired,
        startAddBtnMode:PropTypes.number.isRequired,
    };

    state = {
        selectedItem: null,
        code_1:null,
        itemsList: this.props.articles,
        cardMode: this.props.startCardMode,
        addBtnMode: this.props.startAddBtnMode,

    };

    selectedItemCode = (code,i) => {
        this.setState({
            selectedItem:code,
            code_1:i,
            cardMode: 1,
            addBtnMode: 1,
        });
    };

    editItem = (code,EO) => {
        this.setState({
            selectedItem:code,
            cardMode: 2,
            addBtnMode: 0});
        EO.preventDefault();
        EO.stopPropagation();
    };

    addBtnClicked = (btnModeValue,cardModeValue) => {
        this.setState({
            addBtnMode: btnModeValue,
            cardMode: cardModeValue,
            selectedItem:null,
        });
    };

    delete = (code,EO) => {
        (confirm("Вы действительно хотите удалить этот товар?"))?
        (this.setState({
            itemsList: this.state.itemsList.filter(item => item.code != code),
            cardMode:(this.state.selectedItem==code)? 0 : this.state.cardMode,
            addBtnMode:(this.state.selectedItem==code)? 1 : this.state.addBtnMode,
        })): null;
        EO.preventDefault();
        EO.stopPropagation();
    };

    setEditedValues = (editedArr) => {
        this.setState({
            itemsList:editedArr,
            addBtnMode: 1,
            cardMode: 0,
            selectedItem:null,
        });
    };

    setNewValues = (newArr) => {
        this.setState({
            itemsList:newArr,
            addBtnMode: 1,
            cardMode:0,
        });
    };

    cancelBtnClicked = (btnModeValue,cardModeValue)=> {
        this.setState({
            addBtnMode: btnModeValue,
            cardMode: cardModeValue,
        });
    };

    render(){

        let head = this.props.head.map(title =>
            <div key={Math.random()} className="Title">{title}</div>
        );
        let titles = this.state.itemsList.map((item,i) =>
            <ItemComponent key={item.code}
            code_1={i}
            code={item.code}
            type={item.type}
            brand={item.brand}
            model={item.model}
            power={item.power}
            photoURL={item.photoURL}
            quantity={item.quantity}
            price={item.price}
            isSelected={this.state.selectedItem==item.code}
            cbSelectedItemCode={this.selectedItemCode}
            cbDelete={this.delete}
            cbEditItem={this.editItem}
            cardMode={this.state.cardMode} />
        );

        let itemArr = this.state.itemsList.filter( item => {
            return item.code == this.state.selectedItem
        });

        return (
            <div className='Catalogue'>
                <NameComponent text={this.props.name}/>
                <div className="Titles">{head}</div>
                <div className="ListContent">{titles}</div>
                <CardComponent
                    addBtnMode={this.state.addBtnMode}
                    cardMode={this.state.cardMode}
                    cbAddBtnClicked={this.addBtnClicked}
                    cbSetEditedValues={this.setEditedValues}
                    cbSetNewValues={this.setNewValues}
                    cbCancelBtnClicked={this.cancelBtnClicked}
                    itemsList={this.state.itemsList}
                    articlesArr={this.props.articles}
                    data={itemArr}
                    code={this.state.selectedItem}
                    key={this.state.selectedItem} />
            </div>
        );
    }
}

export default ListComponent;