var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});
router.get('/author', function(req, res) {
  res.render('author', {
    author: 'Sara Guzmán Ortal',
    photo: '<img src="/images/photo.jpg" width="100px" alt="Sara Guzman Ortal">'});
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer',   quizController.answer);


module.exports = router;
