import { useState } from 'react'
import TodoList from "./components/TodoList"
import TodoTitle from "./components/TodoTitle"
import AddButton from "./components/AddButton"

function App() {
  const [todos, setTodo] = useState([])
  const [inputValue, setInputValue] = useState('')


  const addTodo = (newTodo)=> inputValue ? (setTodo([...todos, newTodo]), setInputValue('')) : alert('Need to input something')
  const RemoveItem = (removeIndex)=> setTodo(todos.filter((i, index)=>index !== removeIndex))
  return (
    <>
      <div className="bg-slate-950 h-screen text-white grid place-items-center">
        <div className="relative z-0 overflow-clip rounded-lg">
          <div className="z-[-1] w-[200%] h-[200%] absolute top-[-50%] left-[-50%] bg-gradient-to-r from-purple-500 to-red-500 animate-spin-5s"></div>
          <div className='w-[500px] bg-black/80 backdrop-blur-xl rounded-lg m-1 p-3 z-[99] divide-y-2'>
            <div className="flex mb-2 justify-between">
              <TodoTitle title={'Todo List'} />
              <div className='flex items-center gap-3'>
                <input onChange={e=>setInputValue(e.target.value)} value={inputValue} type="text" className='rounded-md px-3 py-[4px] text-black'/>
                <AddButton onAdd={addTodo} inputValue={inputValue}/>
              </div>
            </div>
            <TodoList todos={todos} removeItem={RemoveItem}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
