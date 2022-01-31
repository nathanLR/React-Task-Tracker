import Header from "./components/Header";
import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

let id = 3;

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(
    () => {
      const getTasks = async () =>{
        const tasksRetrieved = await fetchTasks();
        setTasks(tasksRetrieved);
      }
      getTasks();
    }, []
  );
  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const tasks = await response.json(); 
    console.log(tasks)
    return tasks;
    
  }



  const deleteTask = (taskID) => {
    console.log("deleted", taskID);
    setTasks(tasks.filter((task) => task.id !== taskID));
  };
  const toggleReminder = (taskID) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskID ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  const addTask = (task) =>{
    id++;
    console.log(task);
    setTasks([...tasks, {...task, id: id}]);
  }
  const toggleAddTask = () =>{
    setShowAddTask(!showAddTask);
  }
  return (
    <div className="App container">
      <Header title="Task Tracker" onAddClick={toggleAddTask} showAdd={showAddTask}></Header>
      {
        showAddTask ? <AddTask onAddTask={addTask}/> : <></>
      }
      
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onRemind={toggleReminder}
        ></Tasks>
      ) : (
        "No tasks to show..."
      )}
    </div>
  );
}

export default App;
