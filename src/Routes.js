import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./Homepage";

/** Routes
 * props:
 * 
 * App -> Routes
 */

function Routes() {
  return (
    <Switch className="Routes">
      <Route exact path="/character/:id">
      </Route>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes;