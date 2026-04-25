// backend/seed/seed.js

const mongoose = require("mongoose");
require("dotenv").config();

const { AptitudeModel, DsaModel, ResourceModel } = require("../Mongo/MongoModels");

const aptitudeData = require("./aptitudeData");
const dsaData = require("./dsaData");
const resourceData = require("./resourceData");

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.DATABASE_URL);

        console.log("MongoDB Connected");

        // Remove old records (optional)
        await AptitudeModel.deleteMany({});
        await DsaModel.deleteMany({});
        await ResourceModel.deleteMany({});

        console.log("Old Data Removed");

        // Insert new data
        await AptitudeModel.insertMany(aptitudeData);
        await DsaModel.insertMany(dsaData);
        await ResourceModel.insertMany(resourceData);

        console.log("Aptitude, Coding, and Resources Seeded Successfully");

        process.exit();
    } catch (error) {
        console.log("Seed Error:", error);
        process.exit(1);
    }
}

seedDatabase();