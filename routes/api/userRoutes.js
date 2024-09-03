const router = require('express').Router();

const {
    getAll,
    getOneById,
    postUser,
    putUser,
    deleteUser,
} = require('../../controllers/userController');

router.route('/').get(getAll).post(postUser);

router
    .route('/:id')
    .get(getOneById)
    .put(putUser)
    .delete(deleteUser);

module.exports = router;