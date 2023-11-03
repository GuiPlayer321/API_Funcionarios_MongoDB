const router = require('express').Router();
const controller = require('../controllers/funcionario')

router.post('/', controller.create);
router.get('/', controller.retrieveAll)
router.get('/:id', controller.retrieveOne)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports= router;