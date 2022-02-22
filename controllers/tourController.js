const fs = require("fs");

const fileName = `${__dirname}/../dev-data/data/tours-simple.json`;

const tours = JSON.parse(fs.readFileSync(fileName));

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours,
    },
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((item) => item.id === id);
  if (tour) {
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } else {
    res.status(300).json({
      status: "fail",
      message: "Not found",
    });
  }
};

exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = { id: newId, ...req.body };
  tours.push(newTour);
  fs.writeFile(fileName, JSON.stringify(tours), (err) => {
    res.status(201).send({
      stats: "success",
      data: {
        tour: newTour,
      },
    });
  });
};

exports.updateTour = (req, res) => {
  console.log("update");
};

exports.deleteTour = (req, res) => {
  console.log("delete");
};
