import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import "./SearchAndFilter.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { selectAct } from "../../../redux/actions/selectAct";
import { jobSearchAsync } from "../../../redux/actions/findJobAct";

function SearchAndFilter() {
  const dispatch = useDispatch();
  const [salary, setSalary] = useState([]);
  const [jobType, setJobType] = useState([]);
  const [titleSearch, setTitleSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [experience, setExperience] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const { industry_categories } = useSelector((state) => state.filterjobred);

  const handlerDdCheckBox = (e) => {
    console.log(e);
    if (e.target.checked) {
      setSelectedItems([...selectedItems, e.target.value]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== e.target.value));
    }
  };

  const jobTypeChecbox = (e) => {
    if (e.target.checked) {
      setJobType([...jobType, e.target.value]);
    } else {
      setJobType(jobType.filter((item) => item !== e.target.value));
    }
  };

  const experienceChecbox = (e) => {
    if (e.target.checked) {
      setExperience([...experience, e.target.value]);
    } else {
      setExperience(experience.filter((item) => item !== e.target.value));
    }
  };

  const salaryChecbox = (e) => {
    if (e.target.checked) {
      setSalary([...salary, e.target.value]);
    } else {
      setSalary(salary.filter((item) => item !== e.target.value));
    }
  };

  const handlerReset = () => {
    setSelectedItems([]);
    setJobType([]);
    setExperience([]);
    setSalary([]);
  };

  useEffect(() => {
    if (industry_categories.length !== 0) {
      handlerDdCheckBox({
        target: { value: industry_categories, checked: true },
      });
      setSelectedItems([industry_categories]);
    }
  }, [industry_categories]);

  useEffect(() => {
    dispatch(selectAct(selectedItems));
  }, [dispatch, selectedItems]);

  const searchHandler = (e) => {
    const keys = {
      title: "job_title=",
      location: "location=",
      categories: "industry_categories=",
      jobtype: "job_types=",
      slry: "salary_range=",
      exprnc: "experience_levels=",
    };

    const inputParams = () => {
      const title = titleSearch !== "" ? `${keys["title"]}` + titleSearch : "";
      const location =
        locationSearch !== "" ? `${keys["location"]}` + locationSearch : "";
      const categories =
        selectedItems.length !== 0
          ? `${keys["categories"]}` + selectedItems
          : "";

      const jobtype =
        jobType.length !== 0 ? `${keys["jobtype"]}` + jobType : "";
      const slry = salary.length !== 0 ? `${keys["slry"]}` + salary : "";
      const exprnc =
        experience.length !== 0 ? `${keys["exprnc"]}` + experience : "";
      const result = `${title}&${location}&${categories}&${jobtype}&${slry}&${exprnc}`;
      return result.slice(0, -1);
    };

    console.log("INPUT PARAMS", inputParams());
    e.preventDefault();
    dispatch(jobSearchAsync(inputParams()));
    console.log("coba aja dulu", dispatch(jobSearchAsync(inputParams())));
  };

  return (
    <div>
      <Card className="card-on-search-and-filter">
        <Card.Body>
          {/* ----- DIV UNTUK JUDUL DAN RESET ----- */}
          <div className="group-for-title-an-reset">
            <Card.Subtitle className="title-for-search-and-filter">
              Search and filters
            </Card.Subtitle>
            <Card.Subtitle
              className="reset-for-search-and-filter"
              onClick={handlerReset}
            >
              Reset
            </Card.Subtitle>
          </div>
          {/* ----- DIV UNTUK GROUP INPUT PERTAMA ----- */}
          <div className="group-for-card-text-and-input">
            <Card.Text>Search job by keywords</Card.Text>
            <img
              className="icon-bag"
              src="https://i.ibb.co/hCCZXFc/bag-icon.png"
              alt=""
              value={titleSearch}
              onChange={(e) => setTitleSearch(e.target.value)}
            />
            <Form.Control
              type="text"
              placeholder="Title, keywords, or company"
            />
          </div>
          {/* ----- DIV UNTUK GROUP INPUT KEDUA ----- */}
          <div className="group-for-card-text-and-input">
            <Card.Text>Location</Card.Text>
            <img
              className="icon-location"
              src="https://i.ibb.co/WV3zyZV/location-icon.png"
              alt=""
              value={locationSearch}
              onChange={(e) => setLocationSearch(e.target.value)}
            />
            <Form.Control type="text" placeholder="City or passcode" />
          </div>
          {/* ----- DIV UNTUK GROUP DROPDOWN ----- */}
          <div className="group-for-card-text-and-input">
            <Card.Text>Category</Card.Text>
            <Dropdown>
              <Dropdown.Toggle className="dropdown-on-search-and-filter">
                <div>
                  <img src="https://i.ibb.co/hCCZXFc/bag-icon.png" alt="" />
                  Choose category
                </div>
                <div>
                  <MdKeyboardArrowDown />
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {[
                  "Accounting and Finance",
                  "Administration and Coordination",
                  "Architecture and Engineering",
                  "Arts and Sports",
                  "Customer Service",
                  "Education and Training",
                  "General Services",
                  "Health and Medical",
                  "Human Resources",
                  "IT & Software",
                  "Legal",
                  "Management and Consultancy",
                  "Manufacturing and Production",
                  "Media and Creatives",
                  "Public Service and NGOs",
                  "Safety and Security",
                  "Sales and Marketing",
                  "Sciences",
                  "Supply Chain",
                  "Writing and Content",
                ].map((type) => (
                  <div key={`default-${type}`}>
                    <Form.Check
                      className="dropdown-form-check"
                      type="checkbox"
                      value={type}
                      label={`${type}`}
                      onChange={handlerDdCheckBox}
                      checked={selectedItems.includes(type)}
                    />
                  </div>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* ----- DIV UNTUK GROUP CHECKBOX PERTAMA ----- */}
          <Card.Text>Job type</Card.Text>
          <Form className="container-for-checbox">
            {[
              "All job types",
              "Freelance",
              "Full Time",
              "Part Time",
              "Internship",
              "Temporary",
            ].map((type) => (
              <div key={`default-${type}`}>
                <Form.Check
                  value={type}
                  type="checkbox"
                  label={`${type}`}
                  onChange={jobTypeChecbox}
                  checked={jobType.includes(type)}
                />
              </div>
            ))}
          </Form>

          {/* ----- DIV UNTUK GROUP CHECKBOX KEDUA ----- */}
          <Card.Text>Experience Level</Card.Text>
          <Form className="container-for-checbox">
            {[
              "All experience levels",
              "Internship",
              "Entry Level /Junior Apprentice",
              "Associate/Supervisor",
              "Mid-Senior Level/Manager",
              "Director/Executive",
            ].map((type) => (
              <div key={`default-${type}`}>
                <Form.Check
                  value={type}
                  type="checkbox"
                  label={`${type}`}
                  onChange={experienceChecbox}
                  checked={experience.includes(type)}
                />
              </div>
            ))}
          </Form>
          {/* ----- DIV UNTUK GROUP CHECKBOX KETIGA ----- */}
          <Card.Text>Salary</Card.Text>
          <Form className="container-for-checbox">
            <Form.Check
              value="Hourly"
              type="checkbox"
              label="Hourly"
              onChange={salaryChecbox}
              checked={salary.includes("Hourly")}
            />
            <Form.Check
              value="Monthly"
              type="checkbox"
              label="Monthly"
              onChange={salaryChecbox}
              checked={salary.includes("Monthly")}
            />
            <Form.Check
              value="Yearly"
              type="checkbox"
              label="Yearly"
              onChange={salaryChecbox}
              checked={salary.includes("Yearly")}
            />
            <div className="straight-line-for-search-and-filter"></div>
            <Form.Check
              value="Rp1.000.000 - Rp5.000.000"
              type="checkbox"
              label="Rp1.000.000 - Rp5.000.000"
              onChange={salaryChecbox}
              checked={salary.includes("Rp1.000.000 - Rp5.000.000")}
            />
            <Form.Check
              value="Rp5.000.000 - Rp15.000.000"
              type="checkbox"
              label="Rp5.000.000 - Rp15.000.000"
              onChange={salaryChecbox}
              checked={salary.includes("Rp5.000.000 - Rp15.000.000")}
            />
            <Form.Check
              value="> Rp15.000.000"
              type="checkbox"
              label="> Rp15.000.000"
              onChange={salaryChecbox}
              checked={salary.includes("> Rp15.000.000")}
            />
          </Form>
          <Button
            className="button-on-search-and-filter"
            onClick={searchHandler}
          >
            Search
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SearchAndFilter;
