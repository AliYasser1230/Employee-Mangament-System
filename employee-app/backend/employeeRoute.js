const express = require('express');
const router = express.Router();
const employeeController = require('./employee-controller');

router.get('/employees', employeeController.getAllEmployees);

router.post('/addEmployee', employeeController.addEmployee);

module.exports = router;
