import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux'
import styles from './contactForm.module.css'
import slideTransition from '../../transition/slide.module.css'
import Notification from '../Notification/Notification';
import actions from '../../redux/actions';
// import { v4 as uuidv4 } from "uuid";



class ContactForm extends Component{
    state = {
        contacts: [],
        name:'',
        number:'',
        isShow:false
    };

   changeHandler = (e) =>{
        this.setState({ [e.target.name]: e.target.value });
      
    };

   submitHandler = (e) => {
       e.preventDefault();
     (this.state.name !== '' && this.state.number !== '' )?(       
       this.props.onAddContact({...this.state})
     ): this.error();
     this.setState({
        name:'',
         number:''
      })
   };

    error = ()=> {
         this.setState (prevState=>({isShow:!prevState.isShow}))
    }

    render() {
        const {name, number, isShow }=this.state
            return (
                <>
                 <CSSTransition
            in={isShow}
            timeout={500}
            unmountOnExit
            classNames={slideTransition}>
            <Notification name={name} />
          </CSSTransition>
                <form className={styles.contactForm} onSubmit = {this.submitHandler}>
                    <label > 
                        Name
                        <input  
                        type="text"
                         value = {name} 
                         name="name" 
                         onChange={this.changeHandler} placeholder="Enter your name "/>
                    </label>
                    <label > 
                        Number
                        <input 
                        type="tel"
                         value = {number} 
                         name="number" 
                         onChange={this.changeHandler} 
                         placeholder="Enter your phone"/>
                    </label> 
                    <button className={styles.btn} type="submit">Add contact</button>
                    </form>
                </>
            )
            } 
}

const mapDispatchToProps = {
    onAddContact:actions.addContact
}


ContactForm.propTypes = {
    name:PropTypes.string,
    number:PropTypes.number
}


export default connect(null, mapDispatchToProps)(ContactForm)