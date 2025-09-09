const express = require('express');
const Tour = require('../models/tourModel');
const { options } = require('../app');

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)

// );

// exports.getAllTours = (req, res) => {
//   //---------------------------->get All Tours
//   res.status(200).send({
//     status: 'success',
//     results: tours.length,
//     data: {
//       tours,
//     },
//   });
// };
// exports.getSingleTour = (req, res) => {
//   //--------------------->get single tour
//   const id = req.params.id * 1; // convert string to number
//   const tour = tours.find((el) => el.id === id);

//   if (!tour) {
//     return res.status(404).send({
//       status: '404',
//       message: {
//         body: 'Invalid Id',
//       },
//     });
//   }

//   res.status(200).send({
//     status: 'Success',
//     data: {
//       tour,
//     },
//   });
// };

// exports.addNewTour = (req, res) => {
//   //----------------------------------->add new tours
//     console.log(req.body);
//   const newId = tours[tours.length - 1].id + 1; //Add new id to the data
//   const newTour = Object.assign({ id: newId }, req.body); //object.assign assign values including previous values

//   tours.push(newTour);
//   fs.writeFile(
//     `${__dirname}/dev-data/data/tours-simple.json`,
//     JSON.stringify(tours),
//     (err) => {
//       res.status(201).json({
//         status: 'success',
//         data: {
//           tour: newTour,
//         },
//       });
//     }
//   );
// };
// exports.updateTour = (req, res) => {
//   //------------------------------------Update Tour
//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).send({
//       status: '404',
//       message: {
//         body: 'Invalid Id',
//       },
//     });
//   }
//   res.status(200).json({
//     status: 'success',
//     data: {
//       tour: '<Updated Tour Here>',
//     },
//   });
// };

// exports.deleteTour = (req, res) => {
//   //---------------------------------delete tour
//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).send({
//       status: '404',
//       message: {
//         body: 'Invalid Id',
//       },
//     });
//   }
//   res.status(204).json({
//     status: 'success',
//     data: null,
//   });
// };

exports.getAllTours = async (req, res) => {
  try {
    //------Chaing of methods to write query--------------
    // const tours=await Tour.find()
    // .where('difficulty')
    // .equals(5)
    // .where(rating)
    // .equals(4.5)
    //--------------Build Query---------------
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'limit', 'sort', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    //------------ADVANCE FILTERING-------
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    let query = Tour.find(JSON.parse(queryStr));

    // //--------by name----------------> /api/v1/tour?name=a    >>>>means name must include a
    // if(queryObj.name){
    //   queryObj.name={
    //     $regex: queryObj.name,
    //     options:'i'     // ----makes case insensitive
    //   }
    //   query=query.find(queryObj.name)
    // }

    //---------------Sorting-------------     /api/v1/tour?sort=price       >this will sort by price
    // api/v1/tour?sort=price,name >this will short by price and if equals than by name
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    }

    //-----------------Field Limiting      /api/v1/tours?field=name,duration  >this will only give name and duration of all fields
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    }
    //----------------------Pagination--------------
    // /api/v1/tours/page=2 & limit=5,>>>>this will give 2nd page with data of 5
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 10;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);

    if (req.query.page) {
      const numTours = await Tour.countDocuments();
      if (skip > numTours) throw new Error('This page donot have any Data');
    }
    //------------Execute Query-----------------

    const tours = await query;
    res.status(200).json({
      status: 'Success',
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      data: error,
    });
  }
};

exports.getSingleTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'Success',

      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      data: error,
    });
  }
};
exports.addNewTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      data: error,
    });
  }
};
exports.updateTour = async (req, res) => {
  try {
    const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        tour: updatedTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      data: error,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'Success',
      message: `Data Deleted success having id ${req.params.id}`,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      data: error,
    });
  }
};

exports.getTourStats = async (req, res) => {
  try {
    const stats =await Tour.aggregate([
      { $match: { ratingsAverage: { $gte: 4.7} } },
      {
        $group: {
          _id: '$difficulty',
          numTours:{$sum:1},
          avgRating: { $avg: '$ratingsAverage' },
          avgPrice: { $avg: '$price' },
          minPrice: { $min: '$price' },
          maxPrice: { $max: '$price' },
        },
      },
      {
        $sort:{avgPrice:1}
      }
    ]);
     res.status(200).json({
      status: 'success',
      data: {
        stats,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      data: error,
    });
  }
};

exports.getMonthlyPlans=async (req,res) => {
  try {

    
    // const year=req.params.year;
    const plan=await Tour.aggregate([
      {$unwind:'$startDates'}
    ])
     res.status(200).json({
      status: 'success',
      Length:plan.length,
      data: {
        plan,
        
      },
    });
    //-----------------if we want to implement 
    // if(req.query.sort){
    //   sortBy2=req.query.sort.split(',').join(' ')
    //   query=query.sort(sortBy2)
    // }
    //  const tours = await query;
    // res.status(200).json({
    //   status: 'Success',
    //   results: tours.length,
    //   data: {
    //     tours,
    //   },
    // });
    
  }catch (error) {
    res.status(400).json({
      status: 'fail',
      data: error,
    });
  }
  
}
