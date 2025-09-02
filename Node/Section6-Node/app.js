const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.json()); //middleware  -----



//-------------------------------Custom middleware-----------------------//
// app.use((req,res,next)=>{
//   console.log("Hello from middleWare")
//   next()
// })

// app.get('/',(req,res)=>{
//     res.status(200).json({message:"Hello from server Side",app:"Natours"})

// })
// app.post('/',(req,res)=>{
//     res.send("You Can post To EndPoint")
// })
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
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
  //----------------------------->add new tours
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


const getAllUsers=(req,res)=>{
  res.status(500).json({
  status:'error',
  message:"This route is Not Yet Defined"
  })
}
const createUser=(req,res)=>{
  res.status(500).json({
  status:'error',
  message:"This route is Not Yet Defined"
  })
}
const getUser=(req,res)=>{
  res.status(500).json({
  status:'error',
  message:"This route is Not Yet Defined"
  })
}
const updateUser=(req,res)=>{
  res.status(500).json({
  status:'error',
  message:"This route is Not Yet Defined"
  })
}
const deleteUser=(req,res)=>{
  res.status(500).json({
  status:'error',
  message:"This route is Not Yet Defined"
  })
}

//-------------------------All Request------------------------------//
app.get('/api/v1/tours', getAllTours);
app.get('/api/v1/tours/:id', getSingleTour);
app.post('/api/v1/tours', addNewTour);
app.patch('/api/v1/tours/:id', updateTour);
app.delete('/api/v1/tours/:id', deleteTour);

app.get('/api/v1/users',getAllUsers)
app.post('/api/v1/users',createUser)

app.get('/api/v1/users/:id',getUser)
app.patch('/api/v1/users/:id',updateUser)
app.delete('/api/v1/users/:id',deleteUser)

const port = 4000;
app.listen(port, () => {
  console.log(`listening on Port ${port}`);
});
