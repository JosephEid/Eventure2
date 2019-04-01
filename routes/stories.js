var express = require('express');
var router = express.Router();

/* GET stories listing. */
router.get('/list_stories', function(req, res, next) {
    res.render('list_stories', { title: 'Stories' });
    //res.send('respond with a resource');
});

router.get('/new_story', function(req, res, next) {
  res.render('new_story', {title: 'New Story'});
});

/**
 *  POST the data about the story.
 *  Story data is received from and ajax request and passed straight back as a response.
 */
router.post('/post_story', function(req, res, next) {
  var storyData = req.body;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(storyData));
});

/* GET story page. */
router.get('/view_story/:id', function(req, res, next) {
  res.render('view_story', { title: req.params.name });
});

module.exports = router;