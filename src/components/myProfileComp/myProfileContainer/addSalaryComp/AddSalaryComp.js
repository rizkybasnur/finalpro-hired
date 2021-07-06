import "./AddSalaryComp.css";
import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import SalaryCompChild from "./salaryCompChild/SalaryCompChild";

function AddSalaryComp() {
  const [close, setClose] = useState(true);
  const [open, setOpen] = useState(false);
  return (
    <div className="container-salary">
      <Collapse in={close}>
        <div className="Salary">
          <div>
            <h6>Salary expectation</h6>
            <p>Provide a salary range for better job matches</p>
          </div>
          <div>
            <button
              onClick={() => {
                setClose(!close);
                setOpen(!open);
              }}
            >
              Add salary expectation
            </button>
          </div>
        </div>
      </Collapse>
      <Collapse in={open}>
        <div>
          <SalaryCompChild />
          <div className="open-umcc">
            <button
              onClick={() => {
                setOpen(!open);
                setClose(!close);
              }}
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setOpen(!open);
                setClose(!close);
              }}
            >
              Save
            </button>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default AddSalaryComp;
