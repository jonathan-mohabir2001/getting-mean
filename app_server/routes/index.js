var express = require('express');
var router = express.Router();

// require controller modules

//Updates to reflect the new contollers. locations and others

const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
// two new controllers imported 


//Routes defined below for the controllers 

router.get('/', ctrlLocations.homelist);
// access the homelist method of the ctrllocations object

router.get('/location', ctrlLocations.locationInfo);
// access the  locationInfo method of the ctrllocations object

router.get('/location/review/new', ctrlLocations.addReview);
// access the addReview method of the ctrllocations object


//About page route 
router.get('/about', ctrlOthers.about);

//Export the router object
module.exports = router;

