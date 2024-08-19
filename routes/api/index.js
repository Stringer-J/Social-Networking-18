const express = require('express');
const router = express.Router();

//  /users routes
router.get('/users'); //get all users
router.get('/users:_id'); //get one user by id
router.post('/usersNew'); //make new user
router.put('/usersUpdate:_id'); //update existing user by id
router.delete('/usersDelete:_id'); //delete existing user by id

//  /users/:userid/friends/:friendId routes
router.post('/users/:userId/friends/:friendId'); //add new friend to user's friend list
router.delete('/users/:userId/friends/:friendId'); //remove friend from user's friend list

//  /thoughts routes
router.get('/thoughts'); //get all thoughts
router.get('/thoughts:_id'); //get a single thought by id
router.post('/thoughtsNew'); //make a new thought
router.put('/thoughtsUpdate:_id'); //update thought by id
router.delete('/thoughtsDelete:_id'); //delete thought by id

//  /thoughts/:thoughtId/reactions routes
router.post('/thoughts/:thoughtId/reactions'); //create a reaction
router.delete('thoughts/:thoughtId/reactions'); //delete a reaction

module.exports = router;