const express = require('express')
const app = express()


let persons = [
    {
        id: 1,
        content: "Arto Hellas",
        number: "123142"
      },
      {
        id: 2,
        content: "ada Lovelace",
        number: "123123"
      },
      {
        id: 3,
        content: "Dan abramoc",
        number: "2124152"
      }
]
let info = {}
  app.get('/api/persons', (req, res) => {
    res.json(persons)
  })
  app.get('/info', (req, res) => {

    res.send(
        `Phonebook has info for ${persons.length} people`
        )
  })
  
  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}/api/persons`)
  })