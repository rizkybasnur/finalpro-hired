import "./CompanyContainer.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CompanyCard from "../../global/cardComp/companyCard/CompanyCard";
import { companyListAsync } from "../../../redux/actions/companyListAct";

function CompanyContainer() {
  const dispatch = useDispatch();
  const [indexAkhir, setIndexAkhir] = useState(9);
  const { companyData, loading, error } = useSelector(
    (state) => state.companylistred
  );

  useEffect(() => {
    dispatch(companyListAsync());
  }, [dispatch]);

  const pageSatu = companyData ? companyData.slice(0, indexAkhir) : [];
  // ketika company data true (sudah masuk ke redux) maka company data akan di slice jadi 9 data aja yg ditampilin,
  // jika salah, maka dia bakal nampilin array kosong (kondisi ketika loading, data belum masuk ke redux)
  const show = companyData && pageSatu.length === companyData.length;
  // ketika company data true,
  // kalo company data dan panjang dari page satu sama company data bener, maka si show ini true
  // dipake buat di bawah

  const click = (e) => {
    e.preventDefault();
    if (pageSatu.length === companyData.length) {
      setIndexAkhir(indexAkhir - 6);
    } else {
      setIndexAkhir(indexAkhir + 6);
    }
  };

  return (
    <div className="container-for-company-list">
      <div className="joblist-list-title">
        {/* <h6>Showing 41-60 of 12,364 jobs</h6> */}
        <select className="filter-by-time-dropdown">
          <option>New Jobs</option>
          <option>Last 7 days</option>
          <option>Last month</option>
        </select>
      </div>
      <CompanyCard data={pageSatu} />
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
        <div className="show-more-button-company-list">
          {show ? (
            "This is the end of the search"
          ) : (
            <button onClick={click}>{show ? "Show Less" : "Show More"}</button>
          )}
        </div>
      )}
    </div>
  );
}

export default CompanyContainer;
