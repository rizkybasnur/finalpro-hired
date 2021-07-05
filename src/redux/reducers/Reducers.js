import { combineReducers } from "redux";
import loginRed from "./loginRed";
import regisRed from "./regisRed";
import selectRed from "./selectRed";

const allRed = combineReducers({
  loginred: loginRed,
  regisred: regisRed,
  selectred: selectRed,
});

export default allRed;
