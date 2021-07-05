import "./AddResumeComp.css";
import React from "react";
// import Collapse from "react-bootstrap/Collapse";

function AddResumeComp() {
  // const [close, setClose] = useState(true);
  // const [open, setOpen] = useState(false);
  return (
    <div className="container-resume">
      {/* <Collapse in={close}> */}
      <div className="Resume">
        <div>
          <h6>Resume</h6>
          <p>
            Note: your proflle is the first thing recruiters see and not your
            uploaded resume, so make sure your Hired profile is as complete and
            detailed as your uploaded resume.
          </p>
          <div className="uploadResume-myprofile">
            <a href="upload">Upload Resume</a>
          </div>
          <div className="listButtom-resume">
            <h5>
              Acceptable file types are <span>DOC, DOCX, PDF</span>, and{" "}
              <span>RTF</span> . Max file size is <span>10 MB</span>
            </h5>
          </div>
        </div>
        <div>
          <button
          // onClick={() => {
          //   setClose(!close);
          //   setOpen(!open);
          // }}
          >
            Update resume
          </button>
        </div>
      </div>
      {/* </Collapse> */}
      {/* <Collapse in={open}>
        <div>
          <button
            onClick={() => {
              setClose(!close);
              setOpen(!open);
            }}
          >
            klick
          </button>
        </div>
      </Collapse> */}
    </div>
  );
}

export default AddResumeComp;
