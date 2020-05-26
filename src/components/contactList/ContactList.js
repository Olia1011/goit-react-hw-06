import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux';
import actions from '../../redux/actions';
import PropTypes from 'prop-types';
import ContactListItem from '../contactListItem/ContactListItem';
import slideTransition from '../../transition/slide.module.css';
import styles from './contactlist.module.css';



const ContactList = ({items, onDelete}) => (
    <TransitionGroup  className={styles.ul}>
        {items.map(item =>(
            <CSSTransition key={item.id} timeout={250} classNames={slideTransition}>
                    <ContactListItem {...item}
                    onDelete= {()=>onDelete(item.id)}
                    />
            </CSSTransition>
        ))}
        
    </TransitionGroup>
);




const mapStateToProps = (state) => ({
     items:state.contacts.filter(contact=>contact.name.toLowerCase().includes(state.filter.toLowerCase()))
})

const mapDispatchToProps = {
    onDelete: actions.deleteContact
}

ContactList.propTypes = {
    items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.string.isRequired}).isRequired),
    onDelete:PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);