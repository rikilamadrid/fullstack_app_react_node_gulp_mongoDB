var mongoose = require('mongoose');
var GroceryItem = require('./models/GroceryItems.js');

mongoose.connect('mongodb://localhost/grocery', function() {

    console.log("connected.");
    
    mongoose.Promise = global.Promise;
    mongoose.connection.once('connected', () => {
    mongoose.connection.db.dropDatabase();
    });

    var items = [{
        name: "apples",
        value: 2,
        purchased: false
    },{
        name: "bananas",
        purchased: true
    },{
        name: "tomatoes"
    },{
        name: "omelette"
    },{
        name: "eggs",
        purchased: true
    }];

    items.forEach(function(item) {
        new GroceryItem(item).save();
    });

});
