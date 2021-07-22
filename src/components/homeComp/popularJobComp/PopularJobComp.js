import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  filterjobAsync,
  filterjobChangeCategory,
} from "../../../redux/actions/filterjobAct";
import "./PopularJobComp.css";

export const PopularJobComp = () => {
  const dispatch = useDispatch();
  const { industry_categories } = useSelector((state) => state.filterjobred);
  const history = useHistory();

  useEffect(() => {
    dispatch(filterjobAsync());
  }, [dispatch]);

  const data = [
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
  ];
  const klikHandler = (e, item) => {
    e.preventDefault();
    dispatch(filterjobChangeCategory(item));

    history.push("/findjobspage");
  };

  return (
    <div className="populer-global">
      <div className="populerjob">
        <h1 className="populer">Popular Job Categories</h1>
        <p className="titlepop">19,345 jobs live – 293 added today</p>
        <div className="btn-popu">
          {data.map((item) => (
            <button
              className="btn-pop"
              onClick={(e) => {
                klikHandler(e, item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
