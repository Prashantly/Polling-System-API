
# Polling-System-API

This is a polling system API developed using Node.js and MongoDB It allows users to create questions and options to questions, add votes to options, and perform other related operations.


## Features

- Create a question : Users can create new questions by sending a POST request to the `/questions/create` endpoint.
- Add options to a question: Users can add options to a specific question by sending a POST request to the `/questions/:id/options/`create endpoint.

- Add a vote to an option: Users can increment the vote count for a specific option by sending a POST request to the `/options/:id/add_vote` endpoint.

- Delete a question: Users can delete a question by sending a DELETE request to the `/questions/:id/delete` endpoint. (Optional: A question can't be deleted if one of its options has votes)

- Delete an option: Users can delete an option by sending a DELETE request to the `/options/:id/delete` endpoint. (Optional: An option can't be deleted if it has even one vote given to it)

- View a question with its options and votes: Users can retrieve a question along with its options and vote details by sending a GET request to the `/questions/:id` endpoint.

## Installation

* Clone the repository to your local machine
    - https://github.com/Prashantly/Polling-System-API.git

* Navigate to the project directory:
    - cd polling-system-api

* Install the dependencies:
    - npm install

* Set up the MongoDB and configure the connection in the .env file.

* Start the server:
    - npm start
## Folder Structure

The project follows a scalable folder structure, with separate directories for models, controllers, and routes. Here's an overview of the main directories:

Models : Contains the data models for questions and options.

Controllers : Handles the business logic for various API endpoints.

Routes : Defines the routes and maps them to the corresponding controllers.
## API Usage

The API provides the following routes for managing questions, options, and votes:

- `POST /questions/create`: Creates a new question.
- `POST /questions/:id/options/create`: Adds options to a specific question.
- `DELETE /questions/:id`: Deletes a question. (Optional: Can't delete if options have votes)
- `DELETE /options/:id`: Deletes an option. (Optional: Can't delete if it has votes)
- `POST /options/:id/add_vote`: Increments the vote count for an option.
- `GET /questions/:id`: Retrieves a question with its options and vote details.
## Use

Used Postman appication to send HTTP request to Api end points listed above.
## Response Format

```{
  "id": 1,
  "title": "Who is your Best friend from your class?",
  "options": [
    {
      "id": 1,
      "text": "Kumar suraj",
      "votes": 39,
      "link_to_vote": "http://localhost:8000/options/1/add_vote"
    },
    {
      "id": 2,
      "text": "Parikshit jain",
      "votes": 50,
      "link_to_vote": "http://localhost:8000/options/2/add_vote"
    },
    {
      "id": 3,
      "text": "Akash Gupta",
      "votes": 10,
      "link_to_vote": "http://localhost:8000/options/2/add_vote"
    },
    {
      "id": 4,
      "text": "Ayuash Badoni",
      "votes": 12,
      "link_to_vote": "http://localhost:8000/options/2/add_vote"
    },
  ]
}
```

 
## Tools

* Libraries:
   - body-parser,
   - dotenv,
   - express
   - mongoose
   - nodemon

* Framework:
    - express

* Database :
   - MongoDB

* Version Control System: Git

* VCS Hosting: GitHub

* Programming Language : Java-script

* Runtime Environment: NodeJS

* Development platform : VS Editor
