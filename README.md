# backend
















## Endpoints

### Users
| Request | URL               | Description : using sessions and cookies once you log in you can get the list of users !                                      
| ------- | ----------------- | --------------------------------------------------------------------------------------------------------|
| GET     | /users            | list all users, requires authorization    you will need to be logged in , to get the list of the users  |
| POST    | /users            | register as a new user  username and password  REQUIRED                                                 |
| POST    | /login            | login as an existing user  (MAKE SURE: the user exist  username and password REQUIRED     )             |
| GET     | /logout           | this will log you out , will destroy the session and cookie and will not be able to retrive data !      |





# Tech Stack Use
*In This Repo*
1. Node.js
2. Express
3. Knex
4. nodemon
5. session
6. bcrypt to hash the password in the database 
7. postgres in production
8. Jest and supertest