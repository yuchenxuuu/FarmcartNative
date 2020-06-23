const router = require('express').Router();
let Farmproduct = require('../model/farmproduct.model');
const farmproductController = require('../controller/farmproduct-controller');
const { check } = require('express-validator');

router.get('/',farmproductController.getAllFarmproduct);


router.post('/add',[ check('name').not().isEmpty()], farmproductController.addFarmproduct);

// find product by id
router.get('/:id',farmproductController.getFarmproductById);

// delete product by id
router.delete('/:id',farmproductController.deleteFarmproductById);

// update the product by giving id
router.post('/update/:id', [ check('name').not().isEmpty()], farmproductController.updateFarmproductById);
   


module.exports = router;