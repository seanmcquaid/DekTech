import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Layout from './components/Layout/Layout';
import ProtectedRoutes from './components/Routing/ProtectedRoutes/ProtectedRoutes';


const App = () => {
  return (
    <Router>
      <Layout>
        <Route path="/" component={ProtectedRoutes}/>
      </Layout>
    </Router>
  );
};

export default App;
