import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1231244'
    }
  ]) 


  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const addName = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      number: newNumber
    }
    const isFound = persons.some(element => {
      if (element.name === newName) {
        return true;
      }
  
      return false;
    });
    if (isFound) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(person))
    }
      
  
  }

  const Part = (props) => {

    return (
        
        <div>
        <p>
        {props.name.name} {props.name.number}
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
          <Part key={person.name} name={person}/> 
        )}
      </div>
      <style>
      
      </style>
    </div>
  )

}

export default App