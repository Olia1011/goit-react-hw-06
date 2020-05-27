import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import styles from './contactForm.module.css';
import slideTransition from '../../transition/slide.module.css';
import Notification from '../Notification/Notification';
import Error from '../Notification/Error';
import actions from '../../redux/actions';
// import { v4 as uuidv4 } from "uuid";

class ContactForm extends Component {
  state = {
    // contacts: [],
    name: '',
    number: '',
    isShow: false,
    isOpen: false,
    displayName: '',
  };


  // getName = () => {
  //   return this.state.name
  // }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };


  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ displayName: this.state.name})
    const result = this.props.contacts.filter((contact)=>contact.name === this.state.name)
    if(result.length > 0){
        this.NotificationMessage(); 
        setTimeout(() => { this.NotificationMessage()}, 3000) 
        return
    }  
    (this.state.name !== '' && this.state.number !== '' )?(       
    this.props.onAddContact({...this.state})
    ): ( ()=> {this.errorMessage();
    setTimeout(() => { this.errorMessage()}, 3000)  })();

    this.reset()
};
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  errorMessage = () => {
    this.setState(prevState => ({ isShow: !prevState.isShow }));
  };

  NotificationMessage  = () => {
    this.setState (prevState=>({isOpen:!prevState.isOpen}))
    
}

  render() {
    const { name, number, isShow, isOpen } = this.state;

    return (
      <>
        <CSSTransition
          in={isOpen}
          timeout={500}
          unmountOnExit
          classNames={slideTransition}>
          <Notification name={this.state.displayName} />
        </CSSTransition>
        <CSSTransition
          in={isShow}
          timeout={500}
          unmountOnExit
          classNames={slideTransition}>
          <Error/>
        </CSSTransition>
        <form className={styles.contactForm} onSubmit={this.submitHandler}>
          <label>
            Name
            <input
              type="text"
              value={name}
              name="name"
              onChange={this.changeHandler}
              placeholder="Enter your name "
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              value={number}
              name="number"
              onChange={this.changeHandler}
              placeholder="Enter your phone"
            />
          </label>
          <button className={styles.btn} type="submit" onClick={this.props.onToggleFilter}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}


const mapStateToProps = (state)=> ({
  contacts:state.contacts
})

const mapDispatchToProps = {
  onAddContact: actions.addContact,
};

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
