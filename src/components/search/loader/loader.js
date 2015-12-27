import React from 'react';
import PureComponent from '../../util/pure-component';
import {CircularProgress} from 'material-ui';

import styles from './loader.css';

class Loader extends PureComponent {

  render() {
    return (
      <div className={styles.loader}>
        <CircularProgress mode="indeterminate" size={1.5} />
        <span>Loading...</span>
      </div>
    );
  }

}

export default Loader;
