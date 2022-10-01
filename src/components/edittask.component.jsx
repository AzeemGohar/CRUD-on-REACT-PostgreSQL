import { Fragment, useState } from "react";

const EditTask = ({ tasks }) => {
  const [editField, setEditField] = useState(tasks);

  const { taskname, description, duedate, assignto } = editField;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setEditField({ ...editField, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const body = { taskname, description, duedate, assignto };
      const response = await fetch(
        `http://localhost:3001/tasks/${tasks.task_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <button
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${tasks.task_id}`}
      >
        Edit
      </button>
      <div
        className="modal fade"
        id={`id${tasks.task_id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Assign a task to my employee
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="">Name of the task</label>
              <input
                type="text"
                className="form-control mb-4"
                value={taskname}
                onChange={handleChange}
                name="taskname"
              />

              <label htmlFor="">Description</label>
              <textarea
                id=""
                rows="4"
                className="form-control mb-4"
                onChange={handleChange}
                value={description}
                name="description"
              ></textarea>

              <label htmlFor="">Due Date</label>
              <input
                type="date"
                className="form-control mb-4"
                onChange={handleChange}
                value={duedate}
                name="duedate"
              />

              <label htmlFor="">Assign To</label>
              <input
                type="text"
                className="form-control mb-4"
                value={assignto}
                onChange={handleChange}
                name="assignto"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="btn btn-success"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTask;
