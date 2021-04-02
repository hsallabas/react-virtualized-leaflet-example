import { Switch } from "react-router-dom";
import PublicRoute from './routes/PublicRoute';
import Layout from './pages/layouts/Layout';
import Home from './pages/Home';

function App() {
    return (
        <>
            <Switch>
                <PublicRoute
                    layout={Layout}
                    component={Home}
                    path="/"
                    exact
                />
            </Switch>
        </>
    );
}

export default App;
