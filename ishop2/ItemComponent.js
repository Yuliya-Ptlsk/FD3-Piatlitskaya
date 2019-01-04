var ItemComponent = React.createClass({
    displayName:'ItemComponent',
    propTypes:{
        code: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
        brand: React.PropTypes.string.isRequired,
        model: React.PropTypes.string.isRequired,
        power: React.PropTypes.number.isRequired,
        photoURL: React.PropTypes.any.isRequired,
        quantity: React.PropTypes.number.isRequired,
        price: React.PropTypes.number.isRequired,
        isSelected: React.PropTypes.bool,
        cbSelectedItemCode: React.PropTypes.func.isRequired,
        cbDelete: React.PropTypes.func.isRequired
    },
    selectedItemCode: function(){
        this.props.cbSelectedItemCode(this.props.code);
    },
    delete: function(EO){
        this.props.cbDelete(this.props.code,EO);
    },
    render: function() {
        return React.DOM.div({
                className: 'Article',
                onClick:this.selectedItemCode,
                style:this.props.isSelected?({backgroundColor:'#ff7f50'}):null
            },
            React.DOM.div({className:'Type'},this.props.type),
            React.DOM.div({className:'Brand'},this.props.brand),
            React.DOM.div({className:'Model'},this.props.model),
            React.DOM.div({className:'Power'},this.props.power),
            React.DOM.div({className:'Photo'},this.props.photoURL),
            React.DOM.div({className:'Quantity'},this.props.quantity),
            React.DOM.div({className:'Price'},this.props.price),
            React.DOM.div({className:'Delete'},
                React.DOM.input({type:'button',value:'Delete',onClick:this.delete})
            ),
        )
    },
})