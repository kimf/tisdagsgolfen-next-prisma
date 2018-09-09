import Link from "next/link";

import App from "../components/App";

export default () => (
  <App>
    <h1>Tisdagsgolfen 2019</h1>
    <Link href={{ pathname: "/spela" }}>
      <a>Spela golf</a>
    </Link>
  </App>
);
