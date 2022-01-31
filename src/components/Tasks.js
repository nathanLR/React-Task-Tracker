import Task from "./Task";

const Tasks = ({ tasks, onDelete, onRemind }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onRemind={onRemind}></Task>
      ))}
    </>
  );
};
// <> </> => pas de container

export default Tasks;
