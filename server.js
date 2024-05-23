const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import the routers
const userRoutes = require('./routes/userRoutes');
// const productRoutes = require('./routes/productRoutes');

// Use the routers
app.use('/api/users', userRoutes);
// app.use('/api/products', productRoutes);

app.get('/health', (req, res) => {
    res.json({ message: 'Its okayyy' });
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
