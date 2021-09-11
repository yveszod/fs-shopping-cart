require('dotenv').config();

const productsData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(productsData);

        console.log( "Data import successfull" );

        process.exit();
    } catch (error) {
        console.error( "Data import is not successfull" );

        process.exit(1);
    }
}

importData();