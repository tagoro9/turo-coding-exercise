import React, {PropTypes} from 'react';
import {FloatingActionButton, FontIcon} from 'material-ui';

import styles from './header.css';

/**
 * Header of the results page. It has a title, the string
 * the user searched for and some controls
 * get back to the search page
 */
class Header extends React.Component {

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.title}>
          <h2>
            <span>Search results</span>
            <small>{this.props.searchString}</small>
          </h2>
        </div>
        <FloatingActionButton className={styles.search} onClick={this.props.onSearch}>
          <FontIcon className="material-icons">search</FontIcon>
        </FloatingActionButton>
      </div>
    );
  }

}

Header.propTypes = {
  /**
   * String that represents the search made by the user
   */
  searchString: PropTypes.string.isRequired,
  /**
   * Search button click handler
   */
  onSearch: PropTypes.func,
};

Header.defaultProps = {
  searchString: '-',
};

export default Header;
