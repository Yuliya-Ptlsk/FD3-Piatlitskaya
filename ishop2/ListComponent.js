var ListComponent = React.createClass({
    displayName:'ListComponent',
    propTypes: {
        name: React.PropTypes.string.isRequired,
        head: React.PropTypes.arrayOf(React.PropTypes.string.isRequired),
        articles: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                code: React.PropTypes.string.isRequired,
                type: React.PropTypes.string.isRequired,
                brand: React.PropTypes.string.isRequired,
                model: React.PropTypes.string.isRequired,
                power: React.PropTypes.number.isRequired,
                photoURL: React.PropTypes.any.isRequired,
                quantity: React.PropTypes.number.isRequired,
                price: React.PropTypes.number.isRequired
            })
        )
    },
    getInitialState: function(){
        return{
            selectedItem: null,
            itemsList: this.props.articles,
        }
    },
    selectedItemCode: function(code){
        this.setState({selectedItem:code});
    },
    delete: function(code,EO){
        if(confirm('Вы действительно хотите удалить этот товар?')) {
            this.setState({itemsList: this.state.itemsList.filter(item => item.code!= code)})
        } else {
            EO.preventDefault();
            EO.stopPropagation();
        }
    },
    render: function(){
        var head = this.props.head.map(title =>
            React.DOM.div({key: Math.random(),className:'Title'}, title)
    );
        var items = this.state.itemsList.map(item =>
            React.createElement(ItemComponent,{
                key:item.code,
                code:item.code,
                type:item.type,
                brand:item.brand,
                model:item.model,
                power:item.power,
                photoURL:item.photoURL,
                quantity:item.quantity,
                price:item.price,
                isSelected:(this.state.selectedItem==item.code),
                cbSelectedItemCode: this.selectedItemCode,
                cbDelete: this.delete
            })
    );
        return React.DOM.div({className:'Catalogue'},
            React.DOM.div({className:'Text'}, this.props.name),
            React.DOM.div({className:'Titles'}, head),
            React.DOM.div({className:'ListContent'}, items),
        );
    },
});