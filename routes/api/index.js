const express = require('express');
const router = express.Router();
const { UserController } = require('../../controllers/userController');
const { ThoughtController } = require('../../controllers/thoughtController');

//  /users routes
router.get('/users', UserController.getAll); //get all users
router.get('/users:_id', UserController.getOneById); //get one user by id
router.post('/users', UserController.postUser); //make new user
router.put('/users:_id', UserController.putUser); //update existing user by id
router.delete('/users:_id', UserController.deleteUser); //delete existing user by id

//  /users/:userid/friends/:friendId routes
router.post('/users/:userId/friends/:friendId'); //add new friend to user's friend list
router.delete('/users/:userId/friends/:friendId'); //remove friend from user's friend list

//  /thoughts routes
router.get('/thoughts', ThoughtController.getAll); //get all thoughts
router.get('/thoughts:_id', ThoughtController.getOneById); //get a single thought by id
router.post('/thoughts', ThoughtController.postThought); //make a new thought
router.put('/thoughts:_id', ThoughtController.putThought); //update thought by id
router.delete('/thoughts:_id', ThoughtController.deleteThought); //delete thought by id

//  /thoughts/:thoughtId/reactions routes
router.post('/thoughts/:thoughtId/reactions'); //create a reaction
router.delete('thoughts/:thoughtId/reactions'); //delete a reaction

module.exports = router;