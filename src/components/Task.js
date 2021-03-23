import React from "react";
import PropTypes from 'prop-types';

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        {/* If archived disable input box, add a checkmark */}
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span
          className="checkbox-custom"
          onclick={() => onArchiveTask(id)}
        ></span>
      </label>
      <div className="title">
        <input type="text" value={title} readOnly={true} />
      </div>
      {/* If not archived add a star to the input */}
      {/* Enable pinning functionality */}
      <div className="actions" onClick={event => event.stopPropagation()}>
          {state !== 'TASK_ARCHIVED' && (
              <a href="/" onClick={() => onPinTask(id)}>
                  <span className={`icon-star`} />
              </a>
          )}
      </div>
    </div>
  );
};

//Alternative: use a type system like typescript to create a type for the components
Task.propTypes = {
    //Composition of the task
    task: PropTypes.shape({
        //Id of the task
        id: PropTypes.string.isRequired,
        //Title of the task
        title: PropTypes.string.isRequired,
        //Current state of the task
        state: PropTypes.string.isRequired,

    }),
    //Event to change the task to archived
    onArchiveTask: PropTypes.func,
    //Event to chnage the task to pinned
    onPinTask: PropTypes.func

}

export default Task;
