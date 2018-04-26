var express = require('express');
var router = express.Router();


// Require our controllers.
var article_controller = require('../controllers/articleController');
// var article_instance_controller = require('../controllers/articleinstanceController');


var writer_controller = require('../controllers/writerController');
// var genre_controller = require('../controllers/genreController');


/// article ROUTES ///

// GET catalog home page.
router.get('/', article_controller.index);  

// GET request for creating a article. NOTE This must come before routes that display article (uses id).
router.get('/article/create', article_controller.article_create_get);

// POST request for creating article.
router.post('/article/create', article_controller.article_create_post);

// GET request to delete article.
router.get('/article/:id/delete', article_controller.article_delete_get);

// POST request to delete article.
router.post('/article/:id/delete', article_controller.article_delete_post);

// GET request to update article.
router.get('/article/:id/update', article_controller.article_update_get);

// POST request to update article.
router.post('/article/:id/update', article_controller.article_update_post);

// GET request for one article.
router.get('/article/:id', article_controller.article_detail);

// GET request for list of all article.
router.get('/articles', article_controller.article_list);

/// ROUTES for Writers ///

// GET request for creating writer. NOTE This must come before route for id (i.e. display writer).
router.get('/writer/create', writer_controller.writer_create_get);

// POST request for creating writer.
router.post('/writer/create', writer_controller.writer_create_post);

// GET request to delete writer.
router.get('/writer/:id/delete', writer_controller.writer_delete_get);

// POST request to delete writer
router.post('/writer/:id/delete', writer_controller.writer_delete_post);

// GET request to update writer.
router.get('/writer/:id/update', writer_controller.writer_update_get);

// POST request to update writer.
router.post('/writer/:id/update', writer_controller.writer_update_post);

// GET request for one writer.
router.get('/writer/:id', writer_controller.writer_detail);

// GET request for list of all writers.
router.get('/writers', writer_controller.writer_list);


module.exports = router;