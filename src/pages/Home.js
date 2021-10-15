import { Link } from "react-router-dom";
import ElementTabs from "../components/ElementTabs";
import FilteredCharas from "../components/FilteredCharas";

/** Home
 * 
 * Routes -> Home
 */

function Home({charas}) {
  return (
    <div className="Home container">
      <h1>homepage</h1>
      <div className="row">
        <div className="col-3">
          <ElementTabs />
        </div>
        <div className="col-9">
          <FilteredCharas charas={charas}/>
        </div>
      </div>
    </div>
  )
}

export default Home;