import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['alan', 'porto', 'bontempo']
    const persons = [        
        {
            id: 1,
            name: 'Alan',
            age: 36,
            skill: 'Padeiro'
        },
        {
            id: 2,
            name: 'Kelly',
            age: 34,
            skill: 'Linda'

        }
    ]

// const listAllNames = persons.map(p=><Person key={p.id} person={p} ></Person>)  
const listNames = names.map( (n, index) => <Person key={index} name={n}></Person>)
    return (<div>{listNames}</div>)
}

export default NameList

