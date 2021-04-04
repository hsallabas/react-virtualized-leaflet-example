import { Switch } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import Layout from "./pages/layouts/Layout";
import Home from "./pages/Home";
import TaskList from "./pages/TaskList";
import TaskMap from "./pages/TaskMap";

function App() {
  return (
    <>
      <Switch>
        <PublicRoute layout={Layout} component={Home} path="/" exact />
        <PublicRoute layout={Layout} component={TaskList} path="/task-list" exact />
        <PublicRoute layout={Layout} component={TaskMap} path="/task-map" exact />
      </Switch>
    </>
  );
}

export default App;
