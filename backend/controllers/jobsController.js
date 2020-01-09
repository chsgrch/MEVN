// Import jobs model
Jobs = require("../models/jobsModel");

// Handle index actions
exports.index = function (req, res) {
  Jobs.get(function (err, jobs) {
    //GET (all)
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Jobs retrieved successfully",
      data: jobs
    });
  });
};

// Handle create jobs
exports.new = function (req, res) {
  //POST
  var jobs = new Jobs();
  jobs.post = req.body.post; //Должность
  jobs.salary = req.body.salary; //Зарпата
  jobs.duties = req.body.duties; //Обязанности
  jobs.requirements = req.body.requirements; //Требования
  jobs.conditions = req.body.conditions; //Условия

  // save the job and check for errors
  jobs.save(function (err) {
    // Check for validation error
    if (err) res.json(err);
    else {
      console.log(`Job add successfully`);
      Jobs.get(function (err, jobs) {
        //GET (all vacancies)
        if (err) {
          res.json({
            status: "error",
            message: err
          });
        }
        res.json({
          status: "success",
          message: "Job add and all jobs retrieved successfully",
          data: jobs
        });
      });
    }
  });
};

// Handle view jobs info
exports.view = function (req, res) {
  console.log(`--- GET ONE ---`);
  let id = req.params.job_id.slice(7, req.params.job_id.length);
  Jobs.findById(id, function (err, jobs) {
    if (err) res.send(err);
    res.json({
      message: "Jobs details loading..",
      data: jobs
    });
  });
};

// Handle update jobs info
exports.update = function (req, res) {
  //PUT
  console.log(`--- UPDATE ---`);
  let id = req.params.job_id.slice(7, req.params.job_id.length);
  Jobs.findById(id, function (err, jobs) {
    if (err) res.send(err);
    jobs.post = req.body.post;
    jobs.salary = req.body.salary;
    jobs.duties = req.body.duties;
    jobs.requirements = req.body.requirements;
    jobs.conditions = req.body.conditions;
    // save the job and check for errors
    jobs.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: "job Info updated",
        data: jobs
      });
    });
  });
};

// Handle delete job
exports.delete = function (req, res) { 
  //DELETE
  console.log(`--- DELETE VACANCY---`);
  let id = req.params.job_id.slice(7, req.params.job_id.length);
  Jobs.remove(
    {
      _id: id
    },
    function (err, jobs) {
      if (err) res.send(err);
      else {
        console.log(`Job with id: ${id} deleted`);
        console.log(`Send request for get all vacancies`);
        Jobs.get(function (err, jobs) {
          //GET (all vacancies)
          if (err) {
            res.json({
              status: "error",
              message: err
            });
          }
          res.json({
            status: "success",
            message: "Job delete and all jobs retrieved successfully",
            data: jobs
          });
        });
      }
    }
  );
};
