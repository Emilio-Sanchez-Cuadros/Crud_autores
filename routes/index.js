var express = require('express');
const autoresController = require('../controller/autoresController');
var router = express.Router();

/* GET home page. */
router.get('/', autoresController.list);
//router.post('/', autoresController.saveBook);
router.post('/', autoresController.saveArtist);
//router.get('/deletebook/:id', autoresController.deleteBook);
router.get('/deleteartist/:id', autoresController.deleteArtist);
router.get('/edit/:id', autoresController.editArtist);
router.post('/edit/:id', autoresController.updateArtist);


module.exports = router;