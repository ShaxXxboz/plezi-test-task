import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import Layout from "./components/Layout";
import { useDispatch } from "react-redux";
import { getConfigsFetch } from "./store/slices/configs";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConfigsFetch());
  }, [dispatch]);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Movies} />
          <Route
            exact
            path="/movies/:movie"
            render={({ match }) => <Movie movie={match.params.movie} />}
          />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
