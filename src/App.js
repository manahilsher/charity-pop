import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Campaign from './pages/Campaign';
import Campaigns from './pages/Campaigns';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* <AuthProvider> */}
        <Switch>
          <Route path='/' exact component={Campaigns}></Route>
          {/* <Route path='/campaign' exact component={Campaign}></Route> */}
          {/* <Route path='/profile' exact component={Profile}></Route> */}
        </Switch>
        {/* </AuthProvider> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
