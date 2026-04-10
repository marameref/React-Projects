const mongoose = require('mongoose');
const fs = require('fs');
const csv = require('csv-parser');
const Stop = require('../models/Stop');
require('dotenv').config({ path: './.env' });

async function importData() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB...");

    // Read the stops.txt file from your data folder
    fs.createReadStream('./data/stops.txt')
        .pipe(csv())
        .on('data', async (row) => {
            try {
                await Stop.create({
                    stop_id: row.stop_id,
                    stop_name: row.stop_name,
                    location: {
                        coordinates: [parseFloat(row.stop_lon), parseFloat(row.stop_lat)]
                    }
                });
            } catch (err) {
                // Ignore duplicates if re-running
            }
        })
        .on('end', () => {
            console.log('MongoDB Ingestion Finished');
        });
}

importData();
