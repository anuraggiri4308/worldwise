import { Link } from "react-router-dom";
import PageNav from "../Components/PageNav";

function Home() {
  return (
    <div>
      <PageNav />
      <h1>Worldwise</h1>
      <Link to="/app">Go to the App</Link>

      {/* <a href="/pricing">Pricing</a> */}
    </div>
  );
}

export default Home;
