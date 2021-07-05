import React from "react";
import "./SkillsCompChild.css";

function SkillsCompChild() {
  return (
    <div className="container-childSkill">
      <h6>Skills</h6>
      <p>
        Enumerate your skills, competencies, and talents relevant position and
        industry you are applying to, Indicarte proficiency level (Basic,
        Novice, Intermediate, Advancem Expert) for each skill.
      </p>

      <div className="cskill-1">
        <input name="Add Skills*" placeholder="Search or enter skills" />
        <label for="textcreator">Add Skills*</label>
        <button>+</button>
      </div>
      <div className="cskill-2">
        <h6>UX Research</h6>
        <div className="child-cskill2">
          <select
            placeholder="Select your level of expertise"
            id="Expertise"
            name="Expertise"
          >
            <option value="">Basic</option>
            <option value="">Novice</option>
            <option value="">Intermediate</option>
            <option value="">Advance</option>
            <option value="">Expert</option>
          </select>
          <label for="textcreator">Expertise</label>
          <button>
            <img src="https://i.ibb.co/88zLQYp/Vector-x.png" alt="Vector-x" />
          </button>
        </div>
      </div>
      <div className="cskill-3">
        <h6>Concept Art</h6>
        <div className="child-cskill3">
          <select id="Art" name="Art">
            <option value="">Concept Art</option>
            <option value="">Concept Art</option>
            <option value="">Concept Art</option>
          </select>
          <label for="textcreator">Art*</label>
          <button>
            <img src="https://i.ibb.co/88zLQYp/Vector-x.png" alt="Vector-x" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SkillsCompChild;
