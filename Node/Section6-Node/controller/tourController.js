const express = require('express');
const Tour = require('../models/tourModel');

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
    //--------------Build Query---------------
    const queryObj={...req.query}
    const excludedFields=['page','limit','sort','fields'];
    excludedFields.forEach(el=>delete queryObj(el))
    const query=Tour.find()

    //------------execute query-----------------
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
      message:`Data Deleted success having id ${req.params.id}`
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      data: error,
    });
  }
};
