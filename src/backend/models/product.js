import mongoose, { Schema } from "mongoose";
import category from '../models/category';

const ProductSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    cateId: {
        type: Schema.Types.ObjectId,
        ref: category
    }

}, { timestamps: true })

export default mongoose.model('Product', ProductSchema)