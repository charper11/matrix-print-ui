import { Link } from "react-router-dom";
import { PROGRAMS, print } from '../utils/printer-utils';

export default function Root() {

  async function printNewsPaper() {
    const result = await print(PROGRAMS.NEWSPAPER);
    return result;
  }

  async function printPI() {
    const result = await print(PROGRAMS.SUBSTACK, false, {"url": "https://www.perfectlyimperfect.fyi/"});
    return result;
  }

  async function printMB() {
    const result = await print(PROGRAMS.MB);
    return result;
  }

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
                <button onClick={printNewsPaper}>newspaper</button>
                <button onClick={printPI}>perfectly imperfect</button>
                <button onClick={printMB}>morning brew</button>
            </div>
          </div>
          </div>
      </div>
    </>
  );
}
