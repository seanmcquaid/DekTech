import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Layout from './containers/Layout/Layout';
import Protected from './containers/Protected/Protected';


const App = () => {
  return (
    <Router>
      <Layout>
        <Route path="/" component={Protected}/>
      </Layout>
    </Router>
  );
};

export default App;
