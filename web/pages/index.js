import Link from "next/link";

import App from "../components/App";

export default () => (
  <App>
    <header className="header main">
      <h1>Tisdagsgolfen 2019</h1>
      <div className="actions">
        <Link href={{ pathname: "/play" }}>
          <a>SPELA</a>
        </Link>
      </div>
    </header>
    <div>
      <p>Här kommer alltså ledartavlan och lite annat skoj vara :D</p>
    </div>
  </App>
);
