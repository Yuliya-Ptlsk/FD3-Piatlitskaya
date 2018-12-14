var ListComponent = React.createClass({
    displayName:'ArticlesList',
    propTypes: {
        name: React.PropTypes.string.isRequired,
        head: React.PropTypes.arrayOf(React.PropTypes.string.isRequired),
        articles: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                type: React.PropTypes.string.isRequired,
                brand: React.PropTypes.string.isRequired,
                model: React.PropTypes.string.isRequired,
                power: React.PropTypes.number.isRequired,
                photo: React.PropTypes.any.isRequired,
                quantity: React.PropTypes.number.isRequired,
                price: React.PropTypes.number.isRequired
            })
        )
    },
    render: function(){

      var head = this.props.head.map(v =>
        React.DOM.div({className:'Title'},v)
      );


      var items = this.props.articles.map(v =>
        React.DOM.div({key:v.code,className:'Article'},
            React.DOM.div({className:'Type'}, v.type),
            React.DOM.div({className:'Brand'}, v.brand),
            React.DOM.div({className:'Model'}, v.model),
            React.DOM.div({className:'Power'}, v.power),
            React.DOM.div({className:'Photo'}, v.photo),
            React.DOM.div({className:'Quantity'}, v.quantity),
            React.DOM.div({className:'Price'}, v.price)
        )
      );
      return React.DOM.div({className:'Catalogue'},
        React.DOM.div({className:'Text'}, this.props.name),
        React.DOM.div({className:'Titles'}, head),
        React.DOM.div({className:'ListContent'}, items),
      );
    },
});