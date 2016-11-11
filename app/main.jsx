var React = require('react');
var addons = require('react-addons');
var ReactDOM = require('react-dom');
var GroceryItemList = require('./components/GroceryItemList.jsx');
var groceryItemStore = require('./stores/GroceryItemStore.jsx');

console.log("Hello lamadrid");


var initial = groceryItemStore.getItems();

function render() {
    ReactDOM.render(<GroceryItemList items={initial}/>, app);
};

groceryItemStore.onChange(function(items) {
        initial = items;
        render();
});

render();
