import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

import './app.css';


class App extends React.Component {

  render() {
    return (<div>
      <AppBar
        title="Car rental search"
        showMenuIconButton={false}
      />
      {this.props.children}
    </div>);
  }
}

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
