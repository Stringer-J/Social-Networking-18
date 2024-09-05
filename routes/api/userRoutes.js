const router = require('express').Router();

//gets functions from user controller
const {
    getAll,
    getOneById,
    postUser,
    putUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

//sets up routes for each type of request/each function
router
    .route('/')
    .get(getAll)
    .post(postUser);

router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

router
    .route('/:id')
    .get(getOneById)
    .put(putUser)
    .delete(deleteUser);

module.exports = router;