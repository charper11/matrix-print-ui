import { Link } from "react-router-dom";

export default function Root() {

  return (
    <>
      <div className="homepage">
          <div className="navbar">
            <Link className="navbar-link" to={`custom-print`}>
              Custom print
            </Link>
            <Link className="navbar-link" to={`sudoku`}>
              Sudoku
            </Link>
            <Link className="navbar-link" to={`link-print`}>
              Link print
            </Link>
            <Link className="navbar-link" to={`alarm`}>
              Alarm
            </Link>
          </div>
          <div className="table-border">
          <div className="page-content">
            <div className="print-table">
              <span>Insta Print:</span>
              <span className="print-option">newspaper</span>
              <span className="print-option">perfectly imperfect</span>
              <span className="print-option">morning brew</span>
            </div>
          </div>
          </div>
      </div>
    </>
  );
}
