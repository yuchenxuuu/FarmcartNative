let Farmproduct = require('../model/farmproduct.model');
const HttpError = require('../model/http-error');
const { validationResult } =  require('express-validator');
// get all products
const getAllFarmproduct = (req, res) => {
    Farmproduct.find()
    .then(farmproducts => res.json(farmproducts))
    .catch(err => res.status(400).json('Error: ' + err));
}
//add a product
const addFarmproduct = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        throw new HttpError('Invalid input, please check your data again!', 422);
    }
    const name = req.body.name;
    const description = req.body.description;
    const creator = req.body.creator;
    const date = req.body.date;
    const newFarmproduct = new Farmproduct({name,description,date,creator});

    newFarmproduct.save()
     .then(() => res.json('Farm product added!'))
     .catch(err => res.status(400).json('Error: ' + err));
}

// get product by its id
const getFarmproductById = (req, res, next) =>  {
    Farmproduct.findById(req.params.id)
     .then(farmproduct => res.json(farmproduct))
     .catch(err => res.status(400).json('Error: ' + err));
     
};

//delete product by giving its id
const deleteFarmproductById = (req, res) => {
    Farmproduct.findByIdAndDelete(req.params.id)
     .then(()=> res.json('Delete the item. '))
     .catch(err => res.status(400).json('Error: ' + err));
};

const updateFarmproductById = (req, res) => {
    Farmproduct.findById(req.params.id)
    .then(farmproduct => {
        farmproduct.name = req.body.name;
        farmproduct.description = req.body.description;
        farmproduct.creator = req.body.creator;
        farmproduct.save()
         .then(() => res.json('Farmproduct updated'))
         .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
}

exports.getAllFarmproduct = getAllFarmproduct;
exports.getFarmproductById = getFarmproductById;
exports.addFarmproduct = addFarmproduct;
exports.deleteFarmproductById = deleteFarmproductById;
exports.updateFarmproductById = updateFarmproductById;