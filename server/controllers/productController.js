const Product = require('../models/product')
const CartItem = require('../models/cartItem')

class productController{
    static getAll(req,res,next){
        Product.find({})
        .then(products =>{
            res.status(200).json(products)
        })
        .catch(next)
    }

    static getOne(req,res,next){
        Product.findById(req.params.productId)
        .then(product =>{
            res.status(200).json(product)
        })
        .catch(next)
    }

    static create(req,res,next){
        let newProduct = new Product({
            name        : req.body.name,
            description : req.body.description,
            price       : req.body.price,
            stock       : req.body.stock,
            image       : req.file.cloudStoragePublicUrl,
            userId      : req.loggedUser.id,
            category    : req.body.category,
            created_at  : new Date(),
            updated_at  : new Date()
        })
        newProduct.save()
        .then(product =>{
            res.status(201).json(product)
        })
        .catch(next)
    }
}

module.exports = productController