import React from 'react'
import Person from './Person'

function Namelists() {
    const person = [
        {
            id:1,
            name:'nano',
            age:20
        },
        {
            id:2,
            name:'nani',
            age:21
        },
        {
            id:3,
            name:'nunu',
            age:22
        }
    ]
    const name = ['nano','nani','nunu']
    const namelist = name.map(name=><h2>{name}</h2>)
    const personlist = person.map(person=><Person key={person.name} person={person}/>)
  return (
    <div>
        {personlist}
    </div>
  )
}

export default Namelists