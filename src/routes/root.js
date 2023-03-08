import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="homepage">
        <Link className="title-link" to={`/`}>
          <div className="title">
            <h2 className="title-gt">&gt;</h2>
            <h2 className="title-text">Matrix Print</h2>
            <h2 className="title-cursor">|</h2>
          </div>
        </Link>
        <div className="main-content">
          <div className="sidebar">
            <Link className="sidebar-link" to={`custom-print`}>
              Custom print
            </Link>
            <Link className="sidebar-link" to={`link-print`}>
              Link print
            </Link>
            <Link className="sidebar-link" to={`sudoku`}>
              Sudoku
            </Link>
            <Link className="sidebar-link" to={`alarm`}>
              Alarm
            </Link>
          </div>
          <div className="page-content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
