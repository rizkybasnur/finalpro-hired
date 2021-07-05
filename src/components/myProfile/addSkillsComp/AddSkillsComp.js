import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import SkillsCompChild from "./skillsCompChild/SkillsCompChild";
import "./AddSkillsComp.css";

function AddSkillsComp() {
  const [close, setClose] = useState(true);
  const [open, setOpen] = useState(false);
  return (
    <div className="container-skills">
      <Collapse in={close}>
        <div className="Skills">
          <div>
            <h6>Skills</h6>
            <p>
              Enumerate your skills, competencies, and talents relevant position
              and industry you are applying to, Indicarte proficiency level
              (Basic, Novice, Intermediate, Advancem Expert) for each skill.
            </p>
          </div>
          <div>
            <button
              onClick={() => {
                setClose(!close);
                setOpen(!open);
              }}
            >
              Add skills
            </button>
          </div>
        </div>
      </Collapse>
      <Collapse in={open}>
        <div>
          <SkillsCompChild />
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

export default AddSkillsComp;
