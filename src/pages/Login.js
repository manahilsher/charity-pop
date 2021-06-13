import React from 'react';

import { Auth, Hub } from 'aws-amplify';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  state = {
    isSignedIn: false
  };

  componentDidMount() {
    Hub.listen('auth', this.checkAuth);
  }

  checkAuth = async () => {
    await Auth.currentAuthenticatedUser()
      .then(async () => {
        this.setState({ isSignedIn: true });
      })
      .catch(() => {
        console.log('not signed in');
      });
  };

  render() {
    return (
      <>{this.state.isSignedIn ? <Redirect to='/' /> : <div>Hello?</div>}</>
    );
  }
}

export default Login;
