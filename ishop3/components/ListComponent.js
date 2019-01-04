import React from 'react';
import PropTypes from 'prop-types';

import './ListComponent.css'; 

import NameComponent from './NameComponent';
import ItemComponent from './ItemComponent';

class ListComponent extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        head: PropTypes.arrayOf(PropTypes.string.isRequired),
        articles: PropTypes.arrayOf(
            PropTypes.shape({
                code: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
                brand: PropTypes.string.isRequired,
                model: PropTypes.string.isRequired,
                power: PropTypes.number.isRequired,
                photoURL: PropTypes.any.isRequired,
                quantity: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired
            })
        )
    };

    state = {
        selectedItem: null,
        itemsList: this.props.articles,
    };

    selectedItemCode = (code) => {
        this.setState({selectedItem:code});
    }

    delete = (code,EO) => {
        if(confirm('Вы действительно хотите удалить этот товар?')) {
            this.setState({itemsList: this.state.itemsList.filter(item => item.code!= code)})
        } else {
            EO.preventDefault();
            EO.stopPropagation();
        }
    }
    render(){
        var head = this.props.head.map(title =>
            <div key={Math.random()} className="Title">{title}</div>
        );
        var titles = this.state.itemsList.map(item =>
            <ItemComponent key={item.code}
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
            cbDelete={this.delete} />
        );
        return (
            <div className='Catalogue'>
                <NameComponent text={this.props.name}/>
                <div className="Titles">{head}</div>
                <div className="ListContent">{titles}</div>
            </div>
        );
    }
}

export default ListComponent;