import React from 'react';
// import { Link } from 'react-router-dom';

class Footer extends React.Component {
  footer1 = () => {
    return <div id='footer'>Footer</div>;
  };

  footer2 = () => {
    return null;
  };

  render() {
    return (
      <>
        {/* doesn't refresh */}
        {window.location.pathname.substr(0, 10) === '/campaign/'
          ? this.footer2()
          : this.footer1()}
      </>
    );
  }
}

export default Footer;
