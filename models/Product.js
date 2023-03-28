import mongoose, {model, models, Schema} from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    inStock: {
        type: Number,
        required: true
    },
    imgName: {
        type: String,
        required: true
    },
    brand: {
        type: String
    }
})

const Product = models?.Product || model('Product', ProductSchema)

export default Product