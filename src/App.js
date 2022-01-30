import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

let id = 3;

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

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
      <Header title="Task Tracker" onAddClick={toggleAddTask}></Header>
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
