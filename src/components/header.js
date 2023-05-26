import { Link } from "react-router-dom";

export default function Header() {

  const titleString = 
  "    __  ___      __       _         ____       _       __ <br />" +
  "   /  |/  /___ _/ /______(_)  __   / __ \\_____(_)___  / /_ <br />" +
  "  / /|_/ / __ `/ __/ ___/ / |/_/  / /_/ / ___/ / __ \\/ __/ <br />" +
  " / /  / / /_/ / /_/ /  / />  <   / ____/ /  / / / / / /_  <br />" +
  "/_/  /_/\\__,_/\\__/_/  /_/_/|_|  /_/   /_/  /_/_/ /_/\\__/  <br />";
  return (
        <Link className="title-link" to={`/`}>
          <div class="notch-cover"></div>
          <div className="title">
            <pre className="title-text" dangerouslySetInnerHTML={{__html: titleString}}/>
          </div>
        </Link>
  );
}