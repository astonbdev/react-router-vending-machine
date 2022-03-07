import { Route, Switch } from "react-router-dom";
import { CornNuts, Coffee, Aspirin } from "./Snacks"

function Routes() {
  return (
    <Switch>
      <Route exact path="/cornnuts"><CornNuts /></Route>
      <Route exact path="/coffee"><Coffee /></Route>
      <Route exact path="/aspirin"><Aspirin /></Route>
    </Switch>
  )
}

export default Routes;