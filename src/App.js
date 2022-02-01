import Header from "./components/Header";
import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksRetrieved = await fetchTasks();
      setTasks(tasksRetrieved);
    };
    getTasks();
  }, []);
  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const tasks = await response.json();
    console.log(tasks);
    return tasks;
  };
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const task = await response.json();
    return task;
  };

  const deleteTask = async (taskID) => {
    await fetch(`http://localhost:5000/tasks/${taskID}`, { method: "DELETE" });

    console.log("deleted", taskID);
    setTasks(tasks.filter((task) => task.id !== taskID));
  };

  const toggleReminder = async (taskID) => {
    const taskFromId = await fetchTask(taskID);
    const updatedTask = { ...taskFromId, reminder: !taskFromId.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${taskID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    });
    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === taskID ? { ...task, reminder: data.reminder } : task
      )
    );
  };
  const getRandomId = () => {
    return Math.floor(Math.random() * (9999 - 5)) + 4;
  };
  const addTask = async (task) => {
    task = { ...task, id: getRandomId() };
    console.log(task);
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    console.log(data);
    setTasks([...tasks, data]);
  };
  const toggleAddTask = () => {
    setShowAddTask(!showAddTask);
  };
  return (
    <BrowserRouter>
      <div className="App container">
        <Header
          title="Task Tracker"
          onAddClick={toggleAddTask}
          showAdd={showAddTask}
        ></Header>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                {showAddTask ? <AddTask onAddTask={addTask} /> : <></>}

                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onRemind={toggleReminder}
                  ></Tasks>
                ) : (
                  "No tasks to show..."
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
