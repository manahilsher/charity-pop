import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

// import Campaign from './pages/Campaign';
import Campaigns from './pages/Campaigns';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* <AmplifyAuthenticator> */}
        <Switch>
          <Route path='/' exact component={Campaigns}></Route>
          {/* <Route path='/campaign' exact component={Campaign}></Route> */}
          {/* <Route path='/profile' exact component={Profile}></Route> */}
        </Switch>
        <AmplifySignOut />
        {/* </AmplifyAuthenticator> */}
      </BrowserRouter>
    </div>
  );
};

export default withAuthenticator(App);
