import { combineReducers } from "redux";
import homePageRed from "./homePageRed";
import loginRed from "./loginRed";
import regisRed from "./regisRed";
import selectRed from "./selectRed";
import companyListRed from "./companyListRed";
import findJobRed from "./findJobRed";
import filterjobRed from "./filterjobRed";

const allRed = combineReducers({
  loginred: loginRed,
  regisred: regisRed,
  selectred: selectRed,
  companylistred: companyListRed,
  findjobred: findJobRed,
  homepagered: homePageRed,
  filterjobred: filterjobRed,
});

export default allRed;
