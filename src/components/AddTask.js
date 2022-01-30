import { useState } from "react";
import PropTypes from "prop-types";
const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    if (!text || !day) {
      alert("Please fill the form correctly.");
      clearState();
    } else {
      onAddTask({
        text,
        day,
        reminder,
      });
      clearState();
    }
  };
  const clearState = () => {
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add task"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Day & Time"
          value={day}
          onChange={(event) => setDay(event.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set reminder</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(event) => setReminder(event.currentTarget.checked)}
        />
      </div>
      <input
        type="submit"
        value="Save task"
        className="btn btn-block"
        onClick={onSubmit}
      />
    </form>
  );
};

AddTask.propTypes = {
    onAddTask: PropTypes.func.isRequired
}


export default AddTask;
