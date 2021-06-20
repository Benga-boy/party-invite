import React, { useState } from "react"
import Cards from "./components/Cards"
import Form from "./components/Form"
import {Istate} from './interfaces'




const App = () => {

  const [people, setPeople] = useState<Istate[]>([])
  const [inputs, setInputs] = useState<Istate>({
    name: '',
    age: '',
    pic: '',
    description: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {name, age, pic, description} = inputs
    const newPerson: Istate= {
      name,
      age,
      pic,
      description
    }
    setPeople([...people, newPerson])
    setInputs({    
    name: '',
    age: '',
    pic: '',
    description: ''})
  }

  console.log('People: ', people)

  return (
    <div>
      <h1 className='title'>People invited to my Party</h1>
      {people.length > 0 && <Cards people={people} />}
      <Form handleChange={handleChange} handleSubmit={handleSubmit} values={inputs} />
    </div>
  )
}

export default App

