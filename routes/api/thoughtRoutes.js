const router = require('express').Router();

const {
    getAll,
    getOneById,
    postThought,
    putThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtController');

router
    .route('/')
    .get(getAll)
    .post(postThought);
    
router
    .route('/thoughts/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction);

router
    .route('/:id')
    .get(getOneById)
    .put(putThought)
    .delete(deleteThought);

module.exports = router;