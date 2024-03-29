# NASA Mission Control Project

Scope of the project was leaning mostly towards the backend part.
Frontend part was forked from another project and was added here just for the sake of adopting the MVC pattern.

## Getting Started

1. Ensure you have Node.js installed.
2. Create a free [Mongo Atlas](https://www.mongodb.com/atlas/database) database online or start a local MongoDB database.
3. Create a `server/.env` file with a `MONGO_URL` property set to your MongoDB connection string.
4. In the terminal, run: `npm install`

## Running the Project

1. In the terminal, run: `npm run deploy` or run `npm run deploy-cluster` to run it in clustering mode with maximum available logical CPUs.
2. Browse to the mission control frontend at [localhost:8000](http://localhost:8000) and schedule an interstellar launch!

## Docker

1. Ensure you have the latest version of Docker installed
2. Run `docker build -t nasa-project .`
3. Run `docker run -it -p 8000:8000 nasa-project`

## Running the Tests

To run any automated tests, run `npm test`. This will: 
* Run all the client-side tests: `npm test --prefix client`
* Run all the server-side tests: `npm test --prefix server` 


![Project+Architectural+Diagram](https://user-images.githubusercontent.com/83350680/217457604-bb50514d-4870-44be-8330-a32b7384f2b0.png)


<h3>Stack</h3>

- NodeJS
- Express
- MongoDB
- Docker
- Jest
- Supertest
