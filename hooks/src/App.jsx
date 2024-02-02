import { useState } from 'react'
import './App.css'

function App() {
  // let counter=5
  // const addValue=(e)=>{
  //     console.log("value added",Math.random);
  //     counter =counter+1;
  //     console.log(counter)
  // }
const [counter,setCounter]=useState(5)
const addValue=()=>{
  setCounter(counter+1);
}
const removeValue=()=>{
  setCounter(counter-1);
}
  return (
    <>
        <h1>React</h1>
        <h3>counter:{counter}</h3>
        <button onClick={addValue}>Add value</button>
        <br/>
        <button onClick={removeValue}>remove value</button>

    </>
  )
}

export default App
