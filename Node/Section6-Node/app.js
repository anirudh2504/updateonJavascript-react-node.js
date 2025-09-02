const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.json()); //middleware  -----

// app.get('/',(req,res)=>{
//     res.status(200).json({message:"Hello from server Side",app:"Natours"})

// })
// app.post('/',(req,res)=>{
//     res.send("You Can post To EndPoint")
// })
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
app.get('/api/v1/tours', (req, res) => {
  res.status(200).send({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
});

app.get('/api/v1/tours/:id', (req, res) => {
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
});
app.post('/api/v1/tours', (req, res) => {
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
});

app.patch('/api/v1/tours/:id', (req, res) => {
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
});



app.delete('/api/v1/tours/:id', (req, res) => {
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
    data:null,
   
  });
});
const port = 4000;
app.listen(port, () => {
  console.log(`listening on Port ${port}`);
});
