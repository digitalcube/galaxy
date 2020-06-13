// src/components/Task.js

import React from "react";
import PropTypes from "prop-types";

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) {
  return (
    <div className={`list-item ${state}`}>
      <input
        type='checkbox'
        defaultChecked={state === "TASK_ARCHIVED"}
        disabled={true}
        name='checked'
        onClick={() => onArchiveTask(id)}
      />
      <div className='title'>
        <input
          type='text'
          value={title}
          readOnly={true}
          placeholder='Input title'
        />
      </div>

      <div className='actions' onClick={(event) => event.stopPropagation()}>
        {state !== "TASK_ARCHIVED" && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
};
