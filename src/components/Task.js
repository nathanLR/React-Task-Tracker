//import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onRemind }) => {
  return (
    <div className={task.reminder ? "task reminder" : "task"} onDoubleClick={() => onRemind(task.id)}>
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

Task.defaultProps = {
  task: {
    id: 0,
    text: "My task text",
    day: "Jan 1st at 0:00am",
    reminder: false,
  },
};

// Task.propTypes = {
//     task: PropTypes.object
// }

export default Task;
