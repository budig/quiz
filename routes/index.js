var express = require('express');
var router = express.Router();
//Se agrega controlador:
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

//Rutas para preguntas y respuestas mediante GET
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);


module.exports = router;
