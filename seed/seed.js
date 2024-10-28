const {connectDB, disconnectDB} = require('../config/db');
const Category = require('../models/Category');
const Brand = require('../models/Brand');
const Product = require('../models/Product');


const { faker } = require('@faker-js/faker');

//connect to MongoDB
connectDB();

//seed function
const seedDatabase = async () => {

    try{
        //clear existing data
        await Category.deleteMany({});
        await Brand.deleteMany({});
        await Product.deleteMany({});

        //create categories
        const categories = [];
        for(let i=0; i<20; i++) {
            const category = new Category({ name: faker.commerce.department() });
            categories.push(await category.save());
        }

        //create brand
        const brands = [];
        for(let i=0; i<20; i++) {
            const brand = new Brand({ name: faker.company.name(), image_path: 'no_image_available.jpg'});
            brands.push(await brand.save());
        }

        const products = [];
        for (let i = 0; i < 20; i++) {
            const product = new Product({
                name: faker.company.name(),
                image_path: 'no_image_available.jpg',
                price: faker.commerce.price() // Adds a random price
            });
            products.push(await product.save());
        }
        

        console.log('Database seeded');
        disconnectDB();
    } catch (error) {
        console.error('Error seeding database', error);
    }
}

seedDatabase();