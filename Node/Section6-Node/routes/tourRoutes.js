const express = require('express');
const tourController=require('../controller/tourController')
const authController=require('../controller/authController')

const router = express.Router();

router.route('/tour-stats').get(tourController.getTourStats)
router.route('/monthly-plan').get(tourController.getMonthlyPlans)

//protected route
router.get('/', authController.protect,tourController.getAllTours);


router.post('/', tourController.addNewTour);
router.get('/:id', tourController.getSingleTour);
 

router.patch('/:id', tourController.updateTour);
router.delete('/:id', tourController.deleteTour);

module.exports=router;
 