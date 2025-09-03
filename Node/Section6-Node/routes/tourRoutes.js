const express = require('express');
const fs = require('fs');

const router = express.Router();
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
  
);

const getAllTours = (req, res) => {
  // ---------------------------->get All Tours
  res.status(200).send({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
};
const getSingleTour = (req, res) => {
  //--------------------->get single tour
  const id = req.params.id * 1; // convert string to number
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).send({
      status: '404',
      message: {
        body: 'Invalid Id',
      },
    });
  }

  res.status(200).send({
    status: 'Success',
    data: {
      tour,
    },
  });
};

const addNewTour = (req, res) => {
  //----------------------------------->add new tours
  //   console.log(req.body);
  const newId = tours[tours.length - 1].id + 1; //Add new id to the data
  const newTour = Object.assign({ id: newId }, req.body); //object.assign assign values including previous values

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};
const updateTour = (req, res) => {
  //------------------------------------Update Tour
  if (req.params.id * 1 > tours.length) {
    return res.status(404).send({
      status: '404',
      message: {
        body: 'Invalid Id',
      },
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated Tour Here>',
    },
  });
};

const deleteTour = (req, res) => {
  //---------------------------------delete tour
  if (req.params.id * 1 > tours.length) {
    return res.status(404).send({
      status: '404',
      message: {
        body: 'Invalid Id',
      },
    });
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
};

router.get('/', getAllTours);
router.get('/:id', getSingleTour);
router.post('/', addNewTour);
router.patch('/:id', updateTour);
router.delete('/:id', deleteTour);

module.exports=router;
