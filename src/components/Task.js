//import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>{task.text} <FaTimes/></h3>
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
