const express = require('express');
const tourController=require('../controller/tourController')


const router = express.Router();


router.get('/', tourController.getAllTours);
router.post('/', tourController.addNewTour);
router.get('/:id', tourController.getSingleTour);

router.patch('/:id', tourController.updateTour);
router.delete('/:id', tourController.deleteTour);

module.exports=router;
