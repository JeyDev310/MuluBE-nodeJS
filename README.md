# Node-Express-MongoDB-JWT REST API 

[![Author](http://img.shields.io/badge/author-@davellanedam-blue.svg?style=flat-square)](https://www.linkedin.com/in/chungang-li-a1643b1b9)

## Description

This is a Node-Express-MongoDB-JWT REST API project for the MULU job test.

This project includes the functions such as register(agent or client), login, zipcode api and simple algorithm

## Requirements

-   Node.js **10+**
-   MongoDB **3.6+**
-   Redis **5.0+**

### Login credentials

email: `admin@admin.com`  
password: `12345`

## How to install

### Using Git (recommended)

1.  Clone the project from github. Change "mulube" to your project name.

```bash
git clone https://github.com/davellanedam/node-express-mongodb-jwt-rest-api-skeleton.git ./mulube
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd mulube
npm install
npm update
```

### Setting up environments (development or production)

1.  In the root this repository you will find a file named `.env.example`
2.  Create a new file by copying and pasting the file and then renaming it to just `.env`
3.  The file `.env` is already ignored, so you never commit your credentials.
4.  Change the values of the file to your environment (development or production)
5.  Upload the `.env` to your environment server(development or production)
6.  If you use the postman collection to try the endpoints, change value of the variable `server` on your environment to the url of your server, for development mode use <http://localhost:3000>

**IMPORTANT:** By default token expires in 3 days (4320 minutes set in .env.example). You can refresh token at endpoint GET /token. If everything it´s ok you will get a new token.

## How to run

### Database cleaning and seeding samples

There are 3 available commands for this: `fresh`, `clean` and `seed`.

```bash
npm run command
```

-   `fresh` cleans and then seeds the database with dynamic data.
-   `clean` cleans the database.
-   `seed` seeds the database with dynamic data.

### Running in development mode (lifting API server)

```bash
npm run dev
```

You will know server is running by checking the output of the command `npm run dev`

```bash
****************************
*    Starting Server
*    Port: 3000
*    NODE_ENV: development
*    Database: MongoDB
*    DB Connection: OK
****************************
```

### Running tests

It´s a good practice to do tests at your code, so a sample of how to do that in `mocha/chai` is also included in the `/test` directory

```bash
npm run test
```

### Formatting code

Format your code with prettier by typing:

```bash
npm run format
```

### Formatting markdown files

Format all your markdown files with remark by typing:

```bash
npm run remark
```

### Linting code

Lint your code with ESLint by typing:

```bash
npm run lint
```

## Usage

Once everything is set up to test API routes either use Postman or any other api testing application. Default username/password combination for login is `admin@admin.com/12345`.

## License

This project is open-sourced software licensed under the MIT License. See the LICENSE file for more information.
