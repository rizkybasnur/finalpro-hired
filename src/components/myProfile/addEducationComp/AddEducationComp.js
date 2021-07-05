import React, { useState } from "react";
import "./AddEducationComp.css";
import Collapse from "react-bootstrap/Collapse";
import EducationCompChild from "./educationCompChild/EducationCompChild";

function AddEducationComp() {
  const [close, setClose] = useState(true);
  const [open, setOpen] = useState(false);
  return (
    <div className="container-education">
      <Collapse in={close}>
        <div className="Education">
          <div>
            <h6>Education</h6>
            <p>
              Your most recent and relevant educational attainmenbt should come
              first.
            </p>
          </div>
          <div>
            <button
              onClick={() => {
                setOpen(!open);
                setClose(!close);
              }}
            >
              Add education
            </button>
          </div>
        </div>
      </Collapse>
      <Collapse in={open}>
        <div>
          <EducationCompChild />
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

export default AddEducationComp;
