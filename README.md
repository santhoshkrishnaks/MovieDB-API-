# MovieDB API

This repository contains the source code for the MovieDB API, a RESTful API for managing a database of movies. The API is built using Node.js, Express.js, and MongoDB.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete movie records.
- **Search**: Search movies by name.
- **Update**: Update movie details using the movie name.
- **Delete**: Delete movie records using the movie name.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/santhoshkrishnaks/MovieDB-API-.git
   cd MovieDB-API-
2. Install the dependencies:
   ```sh
   npm install
3. Set up your MongoDB connection. Create a .env file in the root directory and add your MongoDB URI:
   ```sh
   npm start
API Endpoints
-------------

### Get Movie by Name

*   **URL**: `/movie/name/:name`
*   **Method**: `GET`
*   **Description**: Fetch a movie by its name.
*   **Response**:
    
        {
          "name": "Inception",
          "genre": "Sci-Fi",
          "releaseDate": "2010-07-16T00:00:00.000Z"
        }
    

### Update Movie by Name

*   **URL**: `/movie/name/:name`
*   **Method**: `PUT`
*   **Description**: Update movie details by its name.
*   **Request Body**:
    
        {
          "genre": "Sci-Fi",
          "releaseDate": "2010-07-16T00:00:00.000Z"
        }
    
*   **Response**:
    
        {
          "name": "Inception",
          "genre": "Sci-Fi",
          "releaseDate": "2010-07-16T00:00:00.000Z"
        }
    

### Delete Movie by Name

*   **URL**: `/movie/name/:name`
*   **Method**: `DELETE`
*   **Description**: Delete a movie by its name.
*   **Response**:
    
        {
          "message": "Movie deleted successfully"
        }
    
## Deployment
I have deployed the project in Vercel https://movie-db-api-mauve.vercel.app/


## License

This project is licensed under the CC0-1.0 License. See the LICENSE file for more details.
