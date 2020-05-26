import React from 'react'
import {connect} from 'react-redux'
import actions from '../../redux/actions';
import PropTypes from 'prop-types';
import styles from './filter.module.css';
// import { CSSTransition } from 'react-transition-group';
// import fadeTransition from '../../transition/fade.module.css';

const Filter = ({ value, onFilter}) => (
  // <CSSTransition
  //          in={contacts.length > 2}
  //           timeout={250}
  //           unmountOnExit
  //           classNames={fadeTransition}>
  <>
    <label className={styles.searchInput}> Find contacts by name </label>
    <input
      className={styles.inputName}
      type="text"
      value={value}
      onChange={e=>onFilter(e.target.value)}></input>
  </>
  // </CSSTransition> 
);

const mapStateToProps = state =>({
    value:state.filter
})

 const mapDispatchToProps = {
   onFilter:actions.filterContact
 }

 Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);



