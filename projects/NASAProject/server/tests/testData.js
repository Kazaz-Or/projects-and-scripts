const testLaunch = {
    mission: 'USS Enterprise',
    rocket: 'NCC 1701-D',
    target: 'Kepler-62 f',
    launchDate: 'January 4, 2025'
};

const validResponse = {
    "customers": ["Kazi.io", "NASA"], 
    "launchDate": "2025-01-03T22:00:00.000Z", 
    "mission": "USS Enterprise", 
    "rocket": "NCC 1701-D", 
    "success": true,
    "target": "Kepler-62 f",
    "upcoming": true
};


module.exports = {
    testLaunch,
    validResponse,
};