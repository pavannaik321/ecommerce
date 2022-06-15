const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    discreption: {
        type: String,
        required: true,
    },
    richDescription: {
        type: String,
        default: '',
    },
    image: {
        type: String,
        default: '',
    },
    images: {
        type:String,
    },
    brand: {
        type:String,
        default:'',
    },
    price: {
        type:Number,
        default:0,
    },
    category :{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    countInStock: { //it says a require statment.
        type: Number,
        required: true,
        min:0,
        max:255,
    },
    rating: {
        type:Number,
        default:0,
    },
    numReviews: {
        type:Number,
        default:0,
    },
    isFeatured: {
        type:Boolean,
        default:false
    },
    dateCreated: {
        type:Date,
        default:Date.now,
    },
})


exports.Product = mongoose.model('Product', productSchema);