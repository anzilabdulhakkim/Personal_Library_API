const {Router} = require('express');
const createBook = require('../controllers/books/createBook')
const getBook = require('../controllers/books/getBook')
const deleteBook = require('../controllers/books/deleteBook');
const auth = require('../middlewares/auth');
const updateBook = require('../controllers/books/updateBook');
const bookRoute = Router();

bookRoute.get("/",getBook)
bookRoute.post("/create",auth,createBook)
bookRoute.delete('/delete/:id',auth,deleteBook)
bookRoute.patch('/update/:id',auth,updateBook)

module.exports = bookRoute;