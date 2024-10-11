const db = require('./config.db');

const getAllEmployees = (callback) => {
    const query = 'SELECT * FROM employee_table'; 
    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        const employees = results.map((employee) => {
            employee.joiningDate = new Date(employee.joining_date)
                .toISOString()
                .split('T')[0]; 
            return employee;
        });
        callback(null, results);
    });
};

const addEmployee = (employeeData, callback) => {
    const { name, role, joiningDate } = employeeData;

    console.log('Employee Data:', employeeData);

    const query =
        'INSERT INTO employee_table (name, role, joining_date) VALUES (?, ?, ?)';
    db.query(query, [name, role, joiningDate], (err, result) => {
        if (err) {
            console.error('Database Error:', err);
            return callback(err, null);
        }
        callback(null, result);
    });

};


module.exports = {
    getAllEmployees,
    addEmployee,
};
