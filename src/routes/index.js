import { Switch, Route } from "react-router-dom";
import Confraternization from "../pages/Confraternization";
import Graduation from "../pages/Graduation";
import Home from "../pages/Home";
import Wedding from "../pages/Wedding";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/confraternization">
        <Confraternization />
      </Route>
      <Route exact path="/graduation">
        <Graduation />
      </Route>
      <Route exact path="/wedding">
        <Wedding />
      </Route>
    </Switch>
  );
};

export default Routes;
