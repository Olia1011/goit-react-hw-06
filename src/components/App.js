import React, { Component } from 'react';
import Section from './Section/Section';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import { Bounce } from './logo/Bounce';
import styles from './App.css';
// import { CSSTransition } from 'react-transition-group'
// import Notification from './Notification/Notification';
// import fadeTransition from '../transition/fade.module.css';

class App extends Component {
    // state = {
    //     contacts: [],
    //     isShow: false,
    //     name: '',
    //     filter: '',
    // }

    render(){
        // const { contacts, isShow, name } = this.state;
        return (
            <>
            <Section>
                <Bounce> <h2 className={styles.title}>Phonebook</h2> </Bounce>
                <ContactForm />
                </Section>
                <Section>
                <h2 className={styles.title}>Contacts</h2>
                {/* <CSSTransition
            in={this.state.contacts.length > 2}
            timeout={250}
            unmountOnExit
            classNames={fadeTransition}> */}
                <Filter/>
                {/* </CSSTransition>  */}
                <ContactList />
                 </Section> 
            </>
        )
   }   
}

export default App