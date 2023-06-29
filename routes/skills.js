const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');

//All actuall paths start with "/skills"

//Listen for HHTP requests // then they run the ctrl
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete)

module.exports = router;
