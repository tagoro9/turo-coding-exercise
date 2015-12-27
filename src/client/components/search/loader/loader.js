import React from 'react';
import PureComponent from '../../util/pure-component';
import {CircularProgress, IconButton, FontIcon} from 'material-ui';

import styles from './loader.css';

class Loader extends PureComponent {

  render() {
    return (
      <div className={styles.loader}>
        <div className={styles.back}>
          <IconButton onTouchTap={this.props.cancelSearch}>
            <FontIcon className="material-icons">arrow_back</FontIcon>
          </IconButton>
        </div>
        <CircularProgress mode="indeterminate" size={1.5}/>
        <span>Loading...</span>
      </div>
    );
  }

}

export default Loader;
