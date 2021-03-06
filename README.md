# hackerbay
A simple stateless microservice in Nodejs, with three major functionalities - Authentication, JSON patching and Image Thumbnail Generation


[![Build Status](https://travis-ci.org/jiokeokwuosa/hackerbay.svg?branch=develop)](https://travis-ci.org/jiokeokwuosa/hackerbay)
[![Coverage Status](https://coveralls.io/repos/github/jiokeokwuosa/hackerbay/badge.svg?branch=develop)](https://coveralls.io/github/jiokeokwuosa/hackerbay?branch=develop)

## Required Features

- Users can login
- Users can perform jsonpatch
- Users can create image thumbnail.


## Technologies

- Node JS
- Express
- Mocha & Chai
- ESLint
- ESM
- Travis CI
- Coveralls
- Docker

## Requirements and Installation

To install and run this project you would need to have installed:
- Node Js
- Git

To run:
```
$ git clone https://github.com/jiokeokwuosa/hackerbay.git
$ cd hackerbay
$ npm install
$ npm run dev
```

## Testing
```
$ npm test
```

## Pivotal Tracker stories

None

## Template UI

None

## API

The API is currently in version 1 (v1) and can be accessed locally via [http://localhost:5000/api/v1](http://localhost:5000/api/vi)

## API Documentation Link

The API documentation is at [http://localhost:5000/api/v1/api-docs/](http://localhost:5000/api/v1/api-docs/)

## API Endpoints

| Endpoint                                         | Functionality                            |
| ------------------------------------------------ | -----------------------------------------|
| POST /auth/login                                | Login a user                             |
| POST /jsonpatch                                  | Performs json patch.                    |

## Author

Okwuosa Chijioke (Okwuosachijioke@gmail.com)

## License

This is licensed for your use, modification and distribution under the [MIT license.](https://opensource.org/licenses/MIT)

## My Env Variables
PORT
SECRET
