require('normalize.css/normalize.css');
require('bootstrap/dist/css/bootstrap.css');
require('styles/App.css');

import React from 'react';


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
