const router = require('express').Router();

//gets all the functions from thought controller
const {
    getAll,
    getOneById,
    postThought,
    putThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtController');

//sets up routes for each type of request/each function
router
    .route('/')
    .get(getAll)
    .post(postThought);
    
router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction);

router
    .route('/:id')
    .get(getOneById)
    .put(putThought)
    .delete(deleteThought);

module.exports = router;