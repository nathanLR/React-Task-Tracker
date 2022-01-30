import Header from "./components/Header";
import { useState } from 'react';
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTask] = useState([
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
  return (
    <div className="App container">
      <Header title="Task Tracker"></Header>
      <Tasks tasks={tasks}></Tasks>
    </div>
  );
}

export default App; 
