const express = require('express');
const router = express.Router();
const teamController = require('../controller/team');

router.get('/', function (req, res, next) {
    res.send('respond with a team');
});
router.post('/add', teamController.addTeam);
router.get('/view', teamController.view);
router.delete('/delete/:id', teamController.delete);
module.exports = router;