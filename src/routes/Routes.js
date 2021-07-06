import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookmarkExpiredPage from "../pages/BookmarkExpiredPage";
import CompanyDetailPage from "../pages/CompanyDetailPage";
import FindCompanyPage from "../pages/FindCompanyPage";
import FindJobsPage from "../pages/FindJobsPage";
import Homepage from "../pages/Homepage";
import JobDetailPage from "../pages/JobDetailPage";
import MyProfilePage from "../pages/MyProfilePage";
import SuccessSubmitPage from "../pages/SuccessSubmitPage";

function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/findjobspage" component={FindJobsPage} />
          <Route exact path="/jobdetailpage" component={JobDetailPage} />
          <Route
            exact
            path="/jobdetailpage/submitted"
            component={SuccessSubmitPage}
          />
          <Route
            exact
            path="/jobdetailpage/bookmarkexpired"
            component={BookmarkExpiredPage}
          />
          <Route
            exact
            path="/companydetailpage"
            component={CompanyDetailPage}
          />
          <Route exact path="/companysearchpage" component={FindCompanyPage} />
          <Route exact path="/myprofilepage" component={MyProfilePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
