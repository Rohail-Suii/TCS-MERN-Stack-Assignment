const express = require('express');
const router = express.Router();
const employeeController = require('../controller/employee');

router.get('/', function (req, res, next) {
    res.send('respond with a employee');
});
router.post('/add', employeeController.addEmployee);
router.get('/view', employeeController.view);
router.get('/view/:id', employeeController.viewbyid);
router.put('/update/:id', employeeController.update);

module.exports = router;