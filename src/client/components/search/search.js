import React, {PropTypes} from 'react';
import {Map} from 'immutable';
import {Paper} from 'material-ui';
import {connect} from 'react-redux';
import * as actionCreators from '../../action-creators';

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
          {this.props.loading ?
            <Loader cancelSearch={this.props.cancelSearch}/>
            :
            <Form
            data={this.props.data.get('data')}
            errors={this.props.data.get('errors')}
            serverErrors={this.props.data.get('serverErrors')}
            onChange={this.props.updateForm}
            onSearch={this.props.search}/>
          }
        </Paper>
      </div>
    );

  }

}

Search.propTypes = {
  /**
   * Form change handler function
   */
  updateForm: PropTypes.func,
  /**
   * Search function
   */
  search: PropTypes.func,
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

function mapStateToProps(state) {
  return {
    data: state.search.get('form'),
    loading: state.search.get('loading'),
  };
}

export const SearchContainer = connect(
  mapStateToProps,
  actionCreators
)(Search);
