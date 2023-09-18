const express = require('express');
const router = express.Router();

const etcController = require('../controllers/etc');

router.get('/ping', etcController.ping);
router.get('/test-connection', etcController.testConnection);

module.exports = router;
