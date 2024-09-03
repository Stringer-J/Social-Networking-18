const router = require('express').Router();

const {
    getAll,
    getOneById,
    postThought,
    putThought,
    deleteThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getAll).post(postThought);

router
    .route('/:id')
    .get(getOneById)
    .put(putThought)
    .delete(deleteThought);

module.exports = router;