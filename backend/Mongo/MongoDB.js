const mongoose = require("mongoose");
require("dotenv").config();
const databaseUrl = process.env.DATABASE_URL;
// Cleaned up old seeder imports
const connectDB = async () => {
   try {
      const connect = await mongoose.connect(databaseUrl);
      console.log("Mongo Connected");
   } catch (err) {
      console.log(err);
      process.exit(1);
   }
};
module.exports = connectDB;
