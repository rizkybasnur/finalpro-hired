import "./DetailCompanyComp.css";
import { useDispatch, useSelector } from "react-redux";
import CompanyDetailComp from "./detailCompanyComp/CompanyDetailComp";
import CompanyOverviewComp from "./companyOverviewComp/CompanyOverviewComp";
import BannerCompanyDetail from "../global/bannerComp/bannerCompanyDetail/BannerCompanyDetail";
import { useParams } from "react-router-dom";
import { companyListAsync } from "../../redux/actions/companyListAct";
import { useEffect } from "react";

function DetailCompanyComp() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { jobData } = useSelector((state) => state.findjobred);
  const { companyData, loading } = useSelector((state) => state.companylistred);
  const getCompanyByID =
    companyData && companyData.find((item) => item._id === id);

  useEffect(() => {
    dispatch(companyListAsync());
    // dispatch(getDataByIDAsync(id));
    // console.log("tes useEffect");
  }, [dispatch, id]);

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
      <BannerCompanyDetail getCompanyByID={getCompanyByID} />
      <div className="container-for-job-detail-and-card">
        <CompanyDetailComp jobData={jobData} getCompanyByID={getCompanyByID} />
        <CompanyOverviewComp getCompanyByID={getCompanyByID} />
      </div>
    </>
  );
}

export default DetailCompanyComp;
