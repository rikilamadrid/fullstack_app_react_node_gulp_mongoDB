var React = require('react');
var addons = require('react-addons');
var GroceryItems = require('./GroceryItems.jsx');
var GroceryListAddItem = require('./GroceryListAddItem.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Lamadrid React Express app</h1>
                <div>
                    {this.props.items.map(function(item, index) {
                        return (
                            <GroceryItems item={item} key={'item' + index}/>
                        );
                    })
                    }
                </div>
                <GroceryListAddItem />
            </div>
        );
    }
});
