import React from "react";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import DashBoard from "../components/DashBoard";
const Renewal = () => {
  return (
    <div>
      <div className="row">
        <div>
          <Link
            to="/DashBoard"
            style={{ marginLeft: "25%" }}
            className="text-decoration-none  backto"
          >
            <ArrowBack />
          </Link>{" "}
          Renewal
        </div>

        {/* <div className="m-4">
    <div className="m-1"> */}

        {/* <div className="dropdown nav-item p-2 ms-5">
          <button
            class="btn btn-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            All Policies
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link class="dropdown-item" to="#">
              Health
            </Link>
            <Link class="dropdown-item" to="#">
              Documents
            </Link>
            <Link class="dropdown-item" to="#">
              Gallery
            </Link>
          </div> */}
        {/* </div> */}

        <div className="dropdown nav-item p-2 ms-5">
          <button
            class="btn btn-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            All Policies
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link class="dropdown-item" to="#">
              Health
            </Link>
            <Link class="dropdown-item" to="#">
              Documents
            </Link>
            <Link class="dropdown-item" to="#">
              Gallery
            </Link>
          </div>
        </div>
      </div>
      <table className="table table-striped ms-5">
        <thead>
          <tr>
            <th></th>
            <th>Policy No.</th>
            <th>Prd Type</th>
            <th>Validity</th>
            <th>Last Paid</th>
            <th>Contact</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};
export default Renewal;
