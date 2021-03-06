import Product from "../models/product";


export const create = async (req, res) =>{
    try {
        const product = await new Product(req.body).save();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Khong the them san pham"
        });
    }
}

export const list = async (req, res) => {
    try {
        const products = await Product.find().exec();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Them san pham khong thanh cong"
        });
    }
}

export const read = async (req, res) => {
    try {
        const product = await Product.findOne({_id: req.params.id}).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Khong co san pham"
        });
    }
}

export const remove = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({_id: req.params.id}).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Them san pham khong thanh cong"
        });
    }
}

export const update = async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Khong them duoc san pham"
        });
    }
}