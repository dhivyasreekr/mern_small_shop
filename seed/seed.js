const {connectDB, disconnectDB} = require('../config/db');
const Category = require('../models/Category');

const { faker } = require('@faker-js/faker');

//connect to MongoDB
connectDB();

//seed function
const seedDatabase = async () => {

    try{
        //clear existing data
        await Category.deleteMany({});

        //create categories
        const categories = [];
        for(let i=0; i<20; i++) {
            const category = new Category({ name: faker.commerce.department() });
            categories.push(await category.save());
        }

        console.log('Database seeded');
        disconnectDB();
    } catch (error) {
        console.error('Error seeding database', error);
    }
}

seedDatabase();