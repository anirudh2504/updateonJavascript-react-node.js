const express = require('express');
const tourController=require('../controller/tourController')
const authController=require('../controller/authController')

const router = express.Router();

//aggregated routes
router.route('/tour-stats').get(tourController.getTourStats)
router.route('/monthly-plan').get(tourController.getMonthlyPlans)

//protected route
router.get('/', authController.protect,tourController.getAllTours);

router.get('/:id', tourController.getSingleTour);
router.post('/', tourController.addNewTour);

router.patch('/:id', tourController.updateTour);
router.delete('/:id',authController.protect,authController.restrictTo('admin'),tourController.deleteTour);

module.exports=router;
 