const router = require('express').Router();

const {
    getAll,
    getOneById,
    postUser,
    putUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

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