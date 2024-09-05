const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => res.send('Route did not work'));

module.exports = router;

//makes routes start with /api and shows a message if routes don't work