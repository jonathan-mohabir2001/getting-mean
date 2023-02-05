/*
Following the MVC architecture, 

This is the  contoller file. 

These are ES6 arrow functions defined as their own 
constants. 

*/
const homeList = (req, res) => {
  // This controller will now be updated to feed data to the home view

  res.render('locations-list', {
    // this will be an object to send to the view

    title: 'LOC8R APP - Find a place with Wifi to work near you',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places  to work with wifi near you',
    },

    // other data to be sent to view: Location info
    // keys - Name, Address, Rating,Facitilies, Distance.

    locations: [
      {
        name: 'Starcups',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 3,
        facilities: ['Hot Drinks', 'Wi-Fi included', 'Food'],
        distance: '100m',
      },
      {
        name: 'OneStopCofee',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 4,
        facilities: ['Hot Drinks', 'Wi-Fi included', 'Food'],
        distance: '200m',
      },
      {
        name: 'Burger Queen ',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 3,
        facilities: ['Wi-Fi included', 'Food'],
        distance: '300m',
      },
    ],
  });
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
