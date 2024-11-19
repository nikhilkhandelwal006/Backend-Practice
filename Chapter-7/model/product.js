const mongoose = require('mongoose');
const { Schema } = mongoose;




const productSchema = new Schema({
    title:{type: String, required:true},  // String is shorthand for {type: String}
    description: String,
    price:{type: Number, min:[0,'wrong price'], required:true},
    discountPercentage: {type:Number, min:[0,'wrong min discount0'], max:[50, 'wrong max discount']},
    rating: {type: Number, min:[0,'wrong min rating'], max:[5,'wrong max rating']},
    brand:{type: String,required:true},
    category: String,
    thumbnail: String,
    images: [String]
  });


exports.Product= mongoose.model('Product', productSchema)