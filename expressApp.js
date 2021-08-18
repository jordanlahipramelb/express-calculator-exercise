const express = require('express');
const {
  getMean,
  getMedian,
  getMode,
  convertAndValidate,
} = require('./functions');
const ExpressError = require('./expressError');
const app = express();

// Example in route
//     /mean?nums=1,3,5,7.

// Mean Route
app.get('/mean', (req, res, next) => {
  //if query key is empty
  if (!req.query.nums) {
    throw new ExpressError('Query key of nums are required!', 400);
  }

  // splits the comma seperated nums query into an array
  // at this point, the nums are a string
  let numsToStr = req.query.nums.split(',');

  //converts the string to nums
  let nums = convertAndValidate(numsToStr);

  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: 'mean',
    value: getMean(nums),
  };

  return res.send(result);
});

// Median Route
app.get('/median', (req, res, next) => {
  //if query key is empty
  if (!req.query.nums) {
    throw new ExpressError('Query key of nums are required!', 400);
  }
  let numsToStr = req.query.nums.split(',');
  let nums = convertAndValidate(numsToStr);

  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: 'median',
    value: getMedian(nums),
  };

  return res.send(result);
});

// Mode Route
app.get('/mode', (req, res, next) => {
  //if query key is empty
  if (!req.query.nums) {
    throw new ExpressError('Query key of nums are required!', 400);
  }
  let numsToStr = req.query.nums.split(',');
  let nums = convertAndValidate(numsToStr);

  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: 'mode',
    value: getMode(nums),
  };

  return res.send(result);
});

//////////////////////////////////////////////
// Error Handler

// If no other route matches, respond with a 404
app.use((req, res, next) => {
  const e = new ExpressError('Page Not Found', 404);
  next(e);
});

// General Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    Error: err.msg,
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
