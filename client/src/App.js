import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { getPosts } from "./actions/posts";
import useStyles from "./styles";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
