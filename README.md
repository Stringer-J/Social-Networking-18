# Social-Networking-18

## TABLE OF CONTENTS

1. Description
2. Installation
3. Usage
4. Credits
5. License
6. Link To Demo Video

## Description:

This repo was created to showcase a basic API with MongoDB for a social network app where users can share thoughts, add friends, and react to friend's thoughts.

## Installation:

Run 'npm i' in your terminal to install the necessary dependencies, run 'node seed.js' in the utils folder to seed the test data, then use 'node server.js' to run the application.

## Usage:

To use this repo, run 'node server.js' in your terminal, then refer to the following information to learn about what actions you can perform with Insomnia or an equivalent app:

### 1. localhost:3001/api/users<hr>

GET Request: returns all users<br>
![userGetAll](/images/image.png)<br><br>
POST Request: creates a new user with the following:<br><br>
{ "username": "new username here",<br> "email": "new email here" }
![userPost](/images/image-2.png)

### 2. localhost:3001/api/users/:id<hr>

:id would be the ID of the user you want to see, update, or delete

GET Request: returns a single user<br>
![userGetOne](/images/image-1.png)<br><br>
PUT Request: updates a single user with any or all of the following:<br><br>
{ "username": "new username here",<br> "email": "new email here" }<br>
![userPut](/images/image-3.png)<br><br>
DELETE Request: deletes a single user
![userDelete](/images/image-4.png)

### 3. localhost:3001/api/users/:userId/friends/:friendId<hr>

:userId would be the ID of the user you want to add or remove friends from<br>
:friendId is the ID of the user you want to add or remove from the friend list

POST Request: adds a single friend to a single user<br>
![userFriendAdd](/images/image-5.png)<br><br>
DELETE Request: removes a single friend from a single user
![userFriendDelete](/images/image-6.png)

### 4. localhost:3001/api/thoughts<hr>

GET Request: returns all thoughts<br>
![thoughtGetAll](/images/image-7.png)<br><br>
POST Request: creates a new thought with the following:<br><br>
{ "thoughtText": "content of new thought here",<br> "username": "user's username here",<br> "userId": "ID of user to attach thought to" }
![thoughtPOST](/images/image-8.png)

### 5. localhost:3001/api/thoughts/:thoughtId<hr>

GET Request: returns a single thought<br>
![thoughtGetOne](/images/image-9.png)<br><br>
PUT Request: updates a single thought with any or all of the following:<br><br>
{ "thoughtText": "content of updated thought here",<br> "username": "user's username here",<br> "userId": "ID of user to attach thought to" }<br>
![thoughtPUT](/images/image-10.png)<br><br>
DELETE Request: deletes a single thought
![thoughtDELETE](/images/image-11.png)

### 6. localhost:3001/api/thoughts/:thoughtId/reactions<hr>

:thoughtId is the ID of the thought to add or remove reactions from

POST Request: adds reaction to a thought with the following:<br><br>
{ "reactionBody": "content of reaction goes here",<br>
"username": "name of user making reaction here" }<br>
![reactionPOST](/images/image-12.png)<br><br>
DELETE Request: removes reaction from a thought with the following:<br><br>
{ "reactionId": "ID of reaction to remove here" }<br>
![reactionDELETE](/images/image-13.png)

## Credits:

Josh Stringer

## License:

Refer to the LICENSE in the repo.

## Link To Demo Video:

https://drive.google.com/file/d/1Ufpf5DS5c15G8KjyuhppEL6OWJBtKvPm/view
