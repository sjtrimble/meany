console.log("order model loading");

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new mongoose.Schema({
    _product: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
    _customer: {type: Schema.Types.ObjectId, ref: 'Customer', required: true},
    quantity: {type: Number, required: true}
}, {timestamps: true});

var Order = mongoose.model('Order', OrderSchema);