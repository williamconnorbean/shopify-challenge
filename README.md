<h1 align="center">Shopify Backend Challenge</h1>

## <h2 align="center">[Live Demo on Replit](https://shopify-challenge.connorbean.repl.co/)</h2>
## <h2 align="center">[Live Demo on Heroku](https://connor-bean-shopify-challenge.herokuapp.com/)</h2>

## Purpose
This project is intended to act as an inventory tracking web application for a logistics company. It includes features to create/edit/view/delete inventory products, as well as the ability to add product deletion comments and to undo accidental deletions.

## Prerequisites
1. To run this project locally you must have Node.js and NPM installed on your machine. The lastest Node.js LTS can be found [here](https://nodejs.org/en/).
2. This README assumes basic knowledge of how to use npm (node package manager). See [More Resources](#more-resources) below for information on how to get started with npm.
3. This README also assumes knowledge of how to use Git on the command line. See [More Resources](#more-resources) below for an interactive tutorial on learning the basics of command line Git.

## Setup
### Cloning the Repository
1. Map to your desired directory
2. Clone the repository using the following command:
```
$ git clone https://github.com/williamconnorbean/shopify-challenge.git
```

### Adding the Environment Variables
1. Copy and paste the file `.env.example` at the same directory level, renaming to `.env`
```
$ cp .env.example .env
```
2. Ensure the following environment variables are added.
```
ATLAS_URI=MongoDB Database URI
PORT=8888
NODE_ENV=development
```

### Installing Front-end Dependencies
1. Map to the `static_source` directory
```
$ cd ./static_source/
```
2. Run `npm install` to install all necessary node dependencies

### Installing Back-end Dependencies
1. At the root of the project run:
```
$ npm install
```

## Running the Application
1. Start the back-end from the root of the project
```
$ npm run start:dev
```
2. Start the front-end
```
$ cd ./static_source/
$ npm run start
```
3. In your browser, navigate to `http://localhost:3000/`

## More Resources
1. [NPM Docs](https://docs.npmjs.com/cli/v8/commands/npm)
2. [Git Tutorial](https://learngitbranching.js.org/)

## FAQs
### **What is the MongoDB Database URI and where can I find it?**
The MongoDB Database URI is the connection string used to connect our application to the MondoDB Atlas cloud-based database service that will act as the persistent storage for our application.

To find your connection URI:
1. Follow the [Getting Started](https://www.mongodb.com/docs/atlas/getting-started/) MongoDB documentation.
2. Follow the [Connect to Your Cluster](https://www.mongodb.com/docs/atlas/tutorial/connect-to-your-cluster/) documentation to get the required connection string.
3. Place the connection string in the `.env` file you created above.
