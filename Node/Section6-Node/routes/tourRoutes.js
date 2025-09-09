const express = require('express');
const tourController=require('../controller/tourController')


const router = express.Router();

router.route('/tour-stats').get(tourController.getTourStats)

router.get('/', tourController.getAllTours);
router.post('/', tourController.addNewTour);
router.get('/:id', tourController.getSingleTour);
 

router.patch('/:id', tourController.updateTour);
router.delete('/:id', tourController.deleteTour);

module.exports=router;
 