import React, { useReducer } from 'react'
import Reducer from './reduce/Reducer'

const App = () => {
  const [state,dispatcher] = useReducer(Reducer, 0)
  const handleAdd = () => {
    dispatcher({type: "increase", payload:10}) 
  }

  const handleSub = () => {
    dispatcher({type: "decrease"}) 
  }

  const handleAddWithPayload = () => {
    dispatcher({type: "addWithPayload", payload:2}) 
  }
  return (
    <div>
      <div className="">
        <h1 className="">{state}</h1>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSub}>Sub</button>
        <button onClick={handleAddWithPayload}>Add 2</button>
      </div>
    </div>
  )
}

export default App
