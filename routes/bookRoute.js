const {Router} = require('express');
const createBook = require('../controllers/books/createBook')
const getBook = require('../controllers/books/getBook')
const deleteBook = require('../controllers/books/deleteBook')
const bookRoute = Router();

bookRoute.get("/",getBook)
bookRoute.post("/create",createBook)
bookRoute.delete('/delete/:id',deleteBook)

module.exports = bookRoute;