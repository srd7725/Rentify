const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to DB");
        await initDB();
    } catch (err) {
        console.log(err);
    } finally {
        await mongoose.connection.close();
    }
}

const initDB = async () => {
    await Listing.deleteMany({});          // 🔥 old data delete
    await Listing.insertMany(initData.data); // 🔥 new data insert
    console.log("Old data deleted & new data inserted ✅");
};

main();