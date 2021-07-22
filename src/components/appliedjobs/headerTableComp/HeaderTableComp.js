import React from "react";
import { Table } from "react-bootstrap";

function HeaderTableComp() {
  return (
    <div className="container-headAppliedjob">
      <h5>Applied Jobs</h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Application</th>
            <th>Date Applied</th>
            <th>Status</th>
          </tr>
        </thead>
      </Table>
    </div>
  );
}

export default HeaderTableComp;
