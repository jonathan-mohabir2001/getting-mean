/*
Following the MVC architecture, 

This is the  contoller file. 

These are ES6 arrow functions defined as their own 
constants. 

*/
const homeList = (req, res) => {
  // new controller method will be rendering another view.
  res.render('locations-list', { title: 'Home' });
};

const locationInfo = (req, res) => {
  res.render('location-info', { title: 'Location info' });
};
// controller now renders a new view location-info. 


const addReview = (req, res) => {
  res.render('location-review-form', { title: 'Add review' });
  // new pug view to be rendered. 
};

// export these arrow functions
module.exports = {
  homeList,
  locationInfo,
  addReview,
};
