import React, {PropTypes} from 'react';
import {Map} from 'immutable';
import {Paper} from 'material-ui';

import styles from './search.css';
import PureComponent from '../util/pure-component';
import Loader from './loader/loader';
import Form from './form/form';

/**
 * Search form used to get data from user
 */
class Search extends PureComponent {

  render() {

    return (
      <div className={styles.searchContainer}>
        <Paper zDepth={3} className={styles.searchBox}>
          {this.props.loading ? <Loader/> : <Form data={this.props.data} onChange={this.props.onChange}/>}
        </Paper>
      </div>
    );

  }

}

Search.propTypes = {
  /**
   * Change handler function
   */
  onChange: PropTypes.func,
  /**
   * Flag indicating loading state
   */
  loading: PropTypes.bool.isRequired,
  /**
   * Search form values
   */
  data: PropTypes.instanceOf(Map).isRequired,
};

Search.defaultProps = {
  data: new Map(),
  loading: false,
};

export default Search;
