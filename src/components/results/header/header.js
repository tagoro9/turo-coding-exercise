import React, {PropTypes} from 'react';
import {SelectField, MenuItem, FloatingActionButton, FontIcon} from 'material-ui';

import styles from './header.css';

/**
 * Header of the results page. It has a title, the string
 * the user searched for and some controls to sort results
 * and get back to the search page
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
        <div className={styles.controls}>
          <SelectField fullWidth hintText="Sort by">
            <MenuItem value="priceUp" primaryText="Price Asc"/>
            <MenuItem value="priceDown" primaryText="Price Desc"/>
          </SelectField>
        </div>
        <FloatingActionButton className={styles.search}>
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
};

Header.defaultProps = {
  searchString: '-',
};

export default Header;
