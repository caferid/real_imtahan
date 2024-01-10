import mongoose from 'mongoose'

const proSchema = new mongoose.Schema({
    name: String,
    info:String
  });
  const Product = mongoose.model('pro006', proSchema);
  export default Product
