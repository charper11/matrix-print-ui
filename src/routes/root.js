import { Link } from "react-router-dom";

export default function Root() {

  return (
    <>
      <div className="homepage">
        <div className="main-content">
          <div className="navbar">
            <Link className="navbar-link" to={`custom-print`}>
              Custom print
            </Link>
            <Link className="navbar-link" to={`link-print`}>
              Link print
            </Link>
            <Link className="navbar-link" to={`sudoku`}>
              Sudoku
            </Link>
            <Link className="navbar-link" to={`alarm`}>
              Alarm
            </Link>
          </div>
          <div className="page-content">
          </div>
        </div>
      </div>
    </>
  );
}
