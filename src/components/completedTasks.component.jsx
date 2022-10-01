import { Fragment } from "react";

const CompletedTasks = () => {
  return (
    <Fragment>
      <div className="d-flex justify-content-center mt-4">
        <div className="border border-1 w-75 ">
          <h1 className="text-center my-4">Completed</h1>
          <div className="d-flex justify-content-center">
            <table className="table table-bordered mx-2">
              <thead>
                <tr>
                  <th scope="colSpan">Task #</th>
                  <th scope="colSpan">Task</th>
                  <th scope="colSpan">Assigned To</th>
                  <th scope="colSpan">Due Date</th>
                  <th scope="colSpan">Status</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CompletedTasks;
