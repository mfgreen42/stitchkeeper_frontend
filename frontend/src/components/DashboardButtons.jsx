import { Link } from "react-router-dom";

import "../../src/pages/HomePage/HomePage.css"

const DashboardButtons = (props) => {
    return ( 
        <div  className="dash-buttons">
        <ul className="button-size" >
          <li>
            <Link to="/mypatterns">
              <button className="dashboard-buttons">My Patterns</button>
            </Link>
          </li>
          <li>
            <Link to="/addpattern">
              <button className="dashboard-buttons">Add New Pattern</button>
            </Link>
          </li>
          <li>
            <Link to="/addphoto">
              <button className="dashboard-buttons">Add New Photo</button>
            </Link>
          </li>
        </ul>

      </div>
    );
  }
 
export default DashboardButtons;