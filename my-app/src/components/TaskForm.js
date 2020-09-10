import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../context/tasklistcontext'


const TaskForm = () => {
  const { addTask, clearList, editTask, editItem ,dateTimePickerBtn} = useContext(TaskListContext)
  const [title, setTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!editItem) {
      addTask(title)
      setTitle('')
    } else {
      editTask(title, editItem.id)
    }
  }
   
  const handleChange = e => {
    setTitle(e.target.value)
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      console.log(editItem)
    } else {
      setTitle('')
    }
  }, [editItem])

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Tweet..."
        value={title}
        onChange={handleChange}
        required
        className="task-input"
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? 'Edit Task' : 'Add Tweet'}
        </button>
        <button className="btn clear-btn" onClick={clearList}>
          Clear
        </button>
        <button className="btn clear-btn" onClick={dateTimePickerBtn}>
          choose Date
        </button>
      </div>
     
    </form>
  )
}

export default TaskForm