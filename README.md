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
