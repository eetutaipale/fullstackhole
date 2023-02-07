
import { useState, useEffect } from 'react'

import servises from './components/servises'

const App = () => {
  const [persons, setPersons] = useState([])
  
  useEffect(() => {
    console.log('effect')
    servises.getAll()
    .then(response => {
      setPersons(response.data)
    })
  }, [])
  

  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')


  
  const addName = (event) => {
    event.preventDefault()
    let personvalue
    const person = {
      name: newName,
      number: newNumber,
    }

    const Found = persons.some(element => {
      if (element.name === newName ){
        personvalue = element.id
        return true;
      }
      return false
    })
    
    if (Found) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        console.log(personvalue)
        servises.change(personvalue, person)
        .then(
          servises.getAll()
          .then(response => {
          setPersons(response.data)
    })
        )
      }
    } else {
      servises
      .create(person)
      .then(newnote => {
        setPersons(persons.concat(newnote.data))
        })}}


  const Part = (props) => {
    return (
        <div>
        <p>
        {props.name.name} {props.name.number} <button onClick={() => 
          {if (window.confirm('Delete  ' + props.name.name + ' ?')) {
            servises.update(props.name.id)

          }
          }}> delete </button>
        </p>
        </div>
    )
    }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          />
        </div>
 
        <div>number: <input 
        type="text"
        value={newNumber}
        onChange={(e) => setNumber(e.target.value)}
        /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>

      {persons.map(person => 
          <Part key={person.id} name={person}/> 
        )}
        
      </div>
      <style>
      
      </style>
    </div>
  )

}

export default App