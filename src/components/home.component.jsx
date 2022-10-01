import { Fragment, useState } from "react";
import InProgressTask from "./inprogresstasks.component";

const taskData = {
  taskname: "",
  description: "",
  duedate: "",
  assignto: "",
};
const Home = () => {
  const [formFields, setFormFields] = useState(taskData);
  const { taskname, description, duedate, assignto } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const body = { taskname, description, duedate, assignto };
      const response = await fetch("http://localhost:3001/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <Fragment>
      <div className="d-flex justify-content-center">
        <div>
          <h1 className="mt-5">
            <img
              src="https://www.unial.com.pk/img/logo.png"
              width={200}
              alt=""
            />{" "}
            Employees Daily Tasks{" "}
          </h1>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75">
          <div>
            <div className="">
              {/* <!-- Button trigger modal --> */}

              <button
                type="button"
                className="btn btn-primary px-5 py-2 mb-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add Task
              </button>

              {/* <!-- Modal --> */}
              <div
                className="modal fade"
                id="exampleModal"
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
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InProgressTask />
    </Fragment>
  );
};
export default Home;
