const launches = new Map();


const launch = {
    flightNumber: 100,
    mission: 'Kepler Exloration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('November 29, 2023'),
    destionation: 'Kepler-442 b',
    customer: ['KAZI', 'NASA'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
};


module.exports = {
    getAllLaunches,
};