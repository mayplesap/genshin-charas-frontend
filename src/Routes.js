import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../src/pages/Home";

/** Routes
 * props:
 * 
 * App -> Routes
 */

function Routes({charas}) {
  return (
    <Switch className="Routes">
      <Route exact path="/character/:id">
      </Route>
      <Route exact path="/">
        <Home charas={charas} />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes;