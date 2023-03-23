
import { useState, useEffect } from 'react'

import servises from './components/servises'
import './index.css'
const App = () => {
  const [persons, setPersons] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [errorMessage2, setErrorMessage2] = useState(null)
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  let value = null

  useEffect(() => {
    console.log('effect')
    servises.getAll()
    .then(response => {
      setPersons(response.data)
    })
  }, [])
  

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
      return (
        <div className='error'>
          {message}
        </div>
    )
  }
  const Notification2 = ({ message }) => {
    if (message === null) {
      return null
    }

      return (
        <div className='error2'>
          {message}
        </div>
    )
  }


  
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

        servises.change(personvalue, person)
        .catch(
          value = true
        )
        if(value) {
          console.log("onnistu")
          setErrorMessage2("Information of " + person.name + "has already been removed from server")
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          value = false
        } else {
          setErrorMessage("Changed number for " + person.name)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        }

      }
    } else {
      servises
      .create(person)
      .then(newnote => {
        setPersons(persons.concat(newnote.data))
        setErrorMessage("Added " + person.name)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)

        })}}


  const Part = (props) => {
    return (
        <div>
        <p>
        {props.name.name} {props.name.number} <button onClick={() => 
          {if (window.confirm('Delete  ' + props.name.name + ' ?')) {
            servises.update(props.name.id)
            .catch(error => {
              setErrorMessage(`Information of ${props.name.name} has already been removed from server`)
              setTimeout(() => {
                setErrorMessage(null)
              }, 5000)
            })

          }
          }}> delete </button>
        </p>
        </div>
    )
    }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Notification2 message={errorMessage2} />
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