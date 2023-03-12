import { Link, Outlet } from "react-router-dom";

export default function Root() {

  const titleString = 
  "    __  ___      __       _         ____       _       __ <br />" +
  "   /  |/  /___ _/ /______(_)  __   / __ \\_____(_)___  / /_ <br />" +
  "  / /|_/ / __ `/ __/ ___/ / |/_/  / /_/ / ___/ / __ \\/ __/ <br />" +
  " / /  / / /_/ / /_/ /  / />  <   / ____/ /  / / / / / /_  <br />" +
  "/_/  /_/\\__,_/\\__/_/  /_/_/|_|  /_/   /_/  /_/_/ /_/\\__/  <br />";
  return (
    <>
      <div className="homepage">
        <Link className="title-link" to={`/`}>
          <div className="title">
            <pre className="title-text" dangerouslySetInnerHTML={{__html: titleString}}/>
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
