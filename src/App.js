import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { Hub, Logger } from 'aws-amplify';

import Campaign from './pages/Campaign';
import Campaigns from './pages/Campaigns';
import Profile from './pages/Profile';
import Header from './components/Header';
import CampaignBuilder from './pages/CampaignBuilder';
import Login from './pages/Login';

const logger = new Logger('Logger', 'INFO');
const listener = data => {
  switch (data.payload.event) {
    case 'signIn':
      logger.info('user signed in');
      break;
    case 'signUp':
      logger.info('user signed up');
      break;
    case 'signOut':
      logger.info('user signed out');
      break;
    case 'signIn_failure':
      logger.info('user sign in failed');
      break;
    case 'configured':
      logger.info('the Auth module is configured');
      break;
    default:
      logger.error('Something went wrong, look at data object', data);
  }
};

const App = () => {
  Hub.listen('auth', listener);
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={Campaigns}></Route>
          <Route path='/campaign/:id' exact component={Campaign}></Route>
          <Route
            path='/build-campaign'
            exact
            component={CampaignBuilder}
          ></Route>
          <Route path='/profile' exact component={Profile}></Route>
          <AmplifyAuthenticator>
            <Route path='/login' exact component={Login}></Route>
          </AmplifyAuthenticator>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
