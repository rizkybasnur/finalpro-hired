import "./JobList.css";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Collapse from "react-bootstrap/Collapse";
import JoblistCard from "../../global/cardComp/joblistCard/JoblistCard";
import { jobListAsync } from "../../../redux/actions/findJobAct";

function JobList() {
  const dispatch = useDispatch();
  // const [open, setOpen] = useState(false);
  const [indexAkhir, setIndexAkhir] = useState(7);
  const { select } = useSelector((state) => state.selectred);
  const { jobData, loading, error } = useSelector((state) => state.findjobred);

  useEffect(() => {
    dispatch(jobListAsync());
  }, [dispatch]);

  const list = jobData.slice(0, indexAkhir);
  const show = jobData && list.length === jobData.length;
  const click = (e) => {
    e.preventDefault();
    list.length !== jobData.length && setIndexAkhir(indexAkhir + 7);
  };

  return (
    <div className="joblist-list-title-box">
      {/* DETAIL JUMLAH JOBS TERDISPLAY */}
      <div className="joblist-list-title">
        {/* <h6>Showing 1-6 of 12 jobs</h6> */}

        <select className="filter-by-time-dropdown">
          <option>New Jobs</option>
          <option>Last 7 days</option>
          <option>Last month</option>
        </select>
      </div>
      <div className="container-for-selected-items">
        {select &&
          select.map((tes) => (
            <h6 className="container-for-selected-h6">{tes || []}</h6>
          ))}
      </div>

      {/* DISPLAY JOBLIST */}
      <JoblistCard data={list} />

      {/* EXPANDING BUTTON */}
      {loading && (
        <div className="sr-only">
          <div class="loadingio-spinner-pulse-esho8tkkiyh">
            <div class="ldio-gkgrmmqd2nh">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      )}
      {error && <div className="eror-login">company not found</div>}
      {!loading && (
        <div className="show-more-button-joblist">
          {show ? (
            "This is the end of the search"
          ) : (
            <button onClick={click}>Show More</button>
          )}
        </div>
      )}
    </div>
  );
}

export default JobList;
