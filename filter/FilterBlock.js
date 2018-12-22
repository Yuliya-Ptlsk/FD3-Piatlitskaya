var FilterBlock = React.createClass({
   displayName:'FilterBlock',
   propTypes:{
       words: React.PropTypes.arrayOf(React.PropTypes.string.isRequired)
   },
   getInitialState: function(){
       return{
           sortFlag: false,
           filterFld: '',
           list: this.props.words
       }
   },
   sort: function(EO){
       this.setState({sortFlag:EO.target.checked},this.sortAndFilter);
   },
   filter: function(EO){
       this.setState({filterFld:EO.target.value},this.sortAndFilter);
   },
   sortAndFilter: function(){
       var curList = this.props.words.slice();
       if(this.state.sortFlag){
          curList = curList.sort();
       }
       if(this.state.filterFld){
           curList = curList.filter(
               match => (match.indexOf(this.state.filterFld)!= -1)
           );
       }
       this.setState({list:curList});
   },
   render: function(){
       var ListContent = this.state.list.map(word =>
           React.DOM.li({key:Math.random()},word)
       );
       return React.DOM.div({className:'FilterBlock'},
           React.DOM.input({type:'checkbox',checked:this.state.sortFlag,onClick:this.sort}),
           React.DOM.input({type:'text',value:this.state.filterFld,onChange:this.filter}),
           React.DOM.ul({className:'List'},ListContent)
       );
   },
});