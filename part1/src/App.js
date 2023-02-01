import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas' 
    }
  ]) 


  const [newName, setNewName] = useState('')
  const addName = (event) => {
    event.preventDefault()
    const person = {
      name: newName
    }
    persons.some(element => {
      if (element.name === 1) {
        setPersons(persons.concat(person))
      } else {
        alert("ree")
      }
    });
      
  }

  const Part = (props) => {

    return (
        
        <div>
        <>
        {props.name}
        </>
        </div>
    )
    }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
          name: <input 
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          />

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>

      {persons.map(person => 
          <Part key={person.name} name={person.name}/> 
        )}
      </div>
      <style>
      
      </style>
    </div>
  )

}

export default App