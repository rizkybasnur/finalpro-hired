import "./DetailJobComp.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobDetailComp from "./jobDetailComp/JobDetailComp";
import JobOverviewComp from "./jobOverviewComp/JobOverviewComp";
import BannerDetailJobs from "../global/bannerComp/bannerDetailJobs/BannerDetailJobs";
import { jobListAsync } from "../../redux/actions/findJobAct";
import { useParams } from "react-router-dom";

function DetailJobComp() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { jobData, loading } = useSelector((state) => state.findjobred);

  useEffect(() => {
    dispatch(jobListAsync());
  }, [dispatch]);

  const getDataByID = jobData && jobData.find((item) => item._id === id);

  return (
    <>
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
      <BannerDetailJobs getDataByID={getDataByID} />
      <div className="container-for-job-detail-and-card">
        <JobDetailComp jobData={jobData} getDataByID={getDataByID} />
        <JobOverviewComp getDataByID={getDataByID} />
      </div>
    </>
  );
}

export default DetailJobComp;
