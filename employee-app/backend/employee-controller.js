const employeeModel = require('./employee-model');

const getAllEmployees = (req, res) => {
    employeeModel.getAllEmployees((err, employees) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(employees);
    });
};

const addEmployee = (req, res) => {
    const newEmployee = req.body;

    console.log('New Employee Data:', newEmployee);

    employeeModel.addEmployee(newEmployee, (err, result) => {
        if (err) {
            console.error('Database Error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json({ message: 'Employee added successfully', result });
    });
};

module.exports = {
    getAllEmployees,
    addEmployee,
};
