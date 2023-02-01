const homeList = (req, res) => {
  // new controller method will be rendering another view.
  res.render('locations-list', { title: 'Home' });
};

const locationInfo = (req, res) => {
  res.render('index', { title: 'Location info' });
};

const addReview = (req, res) => {
  res.render('index', { title: 'Add review' });
};

module.exports = {
  homeList,
  locationInfo,
  addReview,
};
