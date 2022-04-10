import mongoose,{Schema} from "mongoose";

const ProductSchema = new Schema({
    image:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: true,
    }

},{timestamps:true})

export default mongoose.model('Product',ProductSchema )