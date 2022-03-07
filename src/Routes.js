import { Route, Switch } from "react-router-dom";

function Routes(){
  return (
    <Switch>
      <Route exact path="/cornnuts"><Cornnuts /></Route>
      <Route exact path="/coffee"><Coffee /></Route>
      <Route exact path="/aspirin"><Aspirin /></Route>
    </Switch>
  )
}

export default Routes;