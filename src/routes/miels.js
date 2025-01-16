const express = require('express');
const router = express.Router();
const mielController = require('../controllers/mielController');

router.get('/', mielController.getAllMiels);
router.get('/:id', mielController.getMielById);
router.post('/', mielController.createMiel);
router.put('/:id/prix/:prix', mielController.updateMiel);
router.delete('/:id', mielController.deleteMiel);

module.exports = router;