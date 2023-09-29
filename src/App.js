import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import { useState, useEffect } from "react"

function App() {
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()

    return data
  }

  const [tasks, setTasks] = useState([])

  const [showAddTask, setShowAddTask] = useState(false)

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 4
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //Show From
  const showAdd = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <div className="container">
      <Header
        title={"Task Tracker"}
        showAddTask={() => showAdd()}
        buttonState={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {/* && is just like ?? in PHP */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks"
      )}
    </div>
  )
}

export default App
