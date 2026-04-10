const redis = require('redis');
const client = redis.createClient();

async function ingest() {
    await client.connect();
    // Adding a stop: Longitude, Latitude, StopID
    await client.geoAdd('stops_geo', {
        longitude: -73.9857,
        latitude: 40.7484,
        member: 'stop:empire_state'
    });
    console.log("Stop ingested into Redis");
}
