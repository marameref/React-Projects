const start = performance.now();
const nearbyStops = await client.geoSearch(
    'stops_geo',
    { longitude: -73.9856, latitude: 40.7485 },
    { radius: 500, unit: 'm' }
);
const end = performance.now();
console.log(`Query took ${end - start}ms`);
