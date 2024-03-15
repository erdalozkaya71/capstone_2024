const express = require('express');
const workScheduleController = require('../controllers/workScheduleController');

const router = express.Router();

router.get('/staff/:staffId/workschedule', workScheduleController.getWorkSchedule);

module.exports = router;
