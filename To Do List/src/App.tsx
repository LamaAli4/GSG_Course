// import { useState } from 'react'
import './App.css'
import AllTodos from './components/AllToDos'
import Form from './components/Form'

function App() {


  return (
    <div>
         <h1>To Do List</h1>
         <Form/>
         <AllTodos/>
    </div>
  )
}

export default App
