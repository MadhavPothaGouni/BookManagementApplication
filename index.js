import './index.css'

// Express setup
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// Use middleware
app.use(bodyParser.json())

// Sample book data
let books = [
  {
    BookID: 1,
    Title: 'Supernova Book',
    Author: 'John Doe',
    Genre: 'Fiction',
    Pages: 200,
    PublishedDate: '2020-01-01',
  },
]

// Fetch all books
app.get('/books', (req, res) => {
  res.json(books)
})

// Add a new book
app.post('/books', (req, res) => {
  const newBook = req.body
  books.push(newBook)
  res.status(201).json(newBook)
})

// Update a book
app.put('/books/:id', (req, res) => {
  const {id} = req.params
  const updatedBook = req.body
  let book = books.find(b => b.BookID === parseInt(id))
  if (book) {
    Object.assign(book, updatedBook)
    res.json(book)
  } else {
    res.status(404).send('Book not found')
  }
})

// Delete a book
app.delete('/books/:id', (req, res) => {
  const {id} = req.params
  books = books.filter(b => b.BookID !== parseInt(id))
  res.status(204).send()
})

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000')
})
