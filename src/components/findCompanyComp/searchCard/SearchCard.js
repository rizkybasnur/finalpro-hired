import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import "./SearchCard.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Button } from "react-bootstrap";

function SearchCard() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handlerDdCheckBox = (e) => {
    if (e.target.checked) {
      setSelectedItems([...selectedItems, e.target.value]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== e.target.value));
    }
  };

  return (
    <div>
      <Card className="card-for-company-search">
        <Card.Body className="body-card-for-company-search">
          {/* ----- DIV UNTUK JUDUL DAN RESET ----- */}
          <div className="group-for-title-an-reset">
            <Card.Subtitle className="title-for-search-and-filter">
              Search and filters
            </Card.Subtitle>
            <Card.Subtitle className="reset-for-search-and-filter">
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
            />
            <Form.Control type="text" placeholder="City or passcode" />
          </div>
          {/* ----- DIV UNTUK GROUP DROPDOWN ----- */}
          <div className="dropdown-on-search-and-filter">
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
                  "All categories",
                  "Accounting and Finance",
                  "Administration and Coordination",
                  "Architecture and Engineering",
                  "Arts and Sports",
                  "Customer Service",
                  "Education and Training",
                  "General Services",
                  "Health and Medical",
                  "Human Resources",
                  "IT and Software",
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
                    />
                  </div>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="container-for-selected-items">
            {selectedItems.map((type) => (
              <h6 className="container-for-selected-h6">{type}</h6>
            ))}
          </div>
          {/* DROPDOWN KEDUA */}
          {/* ----- DIV UNTUK GROUP DROPDOWN ----- */}
          <div className="group-for-card-text-and-input">
            <Card.Text>Company Size</Card.Text>
            <Dropdown>
              <Dropdown.Toggle className="dropdown-on-search-and-filter">
                <div>
                  <img src="https://i.ibb.co/ZT0XSrB/person-icon.png" alt="" />
                  Choose category
                </div>
                <div>
                  <MdKeyboardArrowDown />
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {[
                  "All categories",
                  "Accounting and Finance",
                  "Administration and Coordination",
                  "Architecture and Engineering",
                  "Arts and Sports",
                  "Customer Service",
                  "Education and Training",
                  "General Services",
                  "Health and Medical",
                  "Human Resources",
                  "IT and Software",
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
                    />
                  </div>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="container-for-selected-items">
            {selectedItems.map((type) => (
              <h6 className="container-for-selected-h6">{type}</h6>
            ))}
          </div>
          <Button className="button-on-search-and-filter">Search</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SearchCard;
