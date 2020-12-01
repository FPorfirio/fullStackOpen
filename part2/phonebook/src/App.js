import React, { useState, useEffect } from 'react'
import SearchBar from './searchBar.js'
import NumberForm from './numberForm.js'
import NumberList from './numberList.js'
import Notification from './notification.js'
import personService from './services/request.js'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState(0)
  const [notification, setNotification] = useState({})

  useEffect(() => {
    console.log('effect')
    personService.getAll()
    .then(response => {
      console.log(response)
      setPersons(response.data)
    })
  }, [])

  const searchHandler = (e) => {
    if(e.target.value){
      const regex = new RegExp(`^${e.target.value}`,"gi")
      const searchFilter = persons.filter( person => regex.test(person.name))
      setPersons(searchFilter)
    }
    else{
      setPersons([])
    }
  }
  
  const formHandler = (e) => {
    e.preventDefault()
    const checkEntry = persons.find(person => person.name == newName)
    if(checkEntry){
      personService.update(checkEntry.id, {name:newName, number: newNumber})
      .then(response => {
        setPersons(persons.map(person => person.id !== checkEntry.id ? person : response.data))
      })
      .catch(response => {
        console.log(response)
        setNotification({type: 'error', text: `Information of ${newName} has already been removed from the server`})
      })
    }

    else{
      const newObj = {name: newName, number: newNumber}
      console.log('slse')
      personService.create(newObj)
      .then(response => {
        setPersons([...persons, response.data])
        setNotification({type: 'success', text: `Added ${newName}`})
        setTimeout(() => {
          setNotification({})
        }, 5000)
      })
      .catch(error => {
        console.log(error.response.data.error)
        setNotification({type: 'error', text: error.response.data.error})
      })
    }
  }

  const inputHandler = (e) => {
    e.preventDefault()
    if(e.target.type == "text"){
      setNewName(e.target.value)
    }
    else{
      setNewNumber(e.target.value)
    }
  }

  const deleteHandler = (selectedPerson) => {

    if(window.confirm(`delete${selectedPerson.name}?`)){
      console.log(selectedPerson)
      personService.deleteEntry(selectedPerson.id)
      .then(response => {
        console.log('shiat')
        setPersons(persons.filter(person => person.id != selectedPerson.id))
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification}/>
      <SearchBar searchHandler={searchHandler}/>
      <NumberForm formHandler={formHandler} inputHandler={inputHandler}/>
      <NumberList deleteHandler={deleteHandler} persons={persons}/>
    </div>
  )
}

export default App

