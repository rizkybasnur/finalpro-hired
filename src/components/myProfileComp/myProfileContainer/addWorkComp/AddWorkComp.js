import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import WorkCompChild from "./workCompChild/WorkCompChild";
import "./AddWorkComp.css";

function AddWorkComp() {
  const [close, setClose] = useState(true);
  const [open, setOpen] = useState(false);
  return (
    <div className="container-work">
      <Collapse in={close}>
        <div className="Work">
          <div>
            <h6>Work experience</h6>
            <p>
              Besides your last job title or company, employers want to know
              what you accomplished while there. Detail achievements and
              contributions made.
            </p>
          </div>
          <div>
            <button
              onClick={() => {
                setClose(!close);
                setOpen(!open);
              }}
            >
              Add work experience
            </button>
          </div>
        </div>
      </Collapse>
      <Collapse in={open}>
        <div>
          <WorkCompChild />
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

export default AddWorkComp;
