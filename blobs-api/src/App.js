import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Welcome from "./components/Welcome";
import Header from "./components/ui/Header";
import BlobList from "./components/BlobList"
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "../src/components/ui/Theme"
function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/blobs" component={BlobList}/>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
