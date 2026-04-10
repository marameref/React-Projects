const mongoose = require('mongoose');

const stopSchema = new mongoose.Schema({
    stop_id: { type: String, required: true, unique: true },
    stop_name: { type: String, required: true },
    // GeoJSON point: [longitude, latitude]
    location: {
        type: { type: String, default: 'Point' },
        coordinates: { type: [Number], required: true }
    }
});

// Crucial: This index allows MongoDB to do geospatial math
stopSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Stop', stopSchema);
