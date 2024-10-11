const express = require('express');
const cors = require('cors');
const employeeRoutes = require('./employeeRoute');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); 

app.use('/api', employeeRoutes);

app.get('/', (req, res) => {
    res.send('Employee Management System Backend');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
