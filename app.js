const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const supplierRoutes = require('./routes/supplierRoutes');
const orderRoutes = require('./routes/orderRoutes');

dotenv.config();
connectDB();

const app = express();
const cors = require("cors");
app.use(cors({
    origin: "*", // or specify your frontend URL
    methods: ["GET,POST,PUT,DELETE"],
    allowedHeaders: ["Content-Type"]
}));
app.options("*", cors());
app.use(express.json());

app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api', orderRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
