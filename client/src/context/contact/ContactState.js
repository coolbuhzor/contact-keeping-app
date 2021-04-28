import react, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from '../types';
import contactContext from './contactContext';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Chigozie Ezechukwu',
        email: 'chiezechukwu@gmail.com',
        phone: '08024689001',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Obinna Ogbonna',
        email: 'obijapan@gmail.com',
        phone: '08052589446',
        type: 'personal',
      },
      {
        id: 3,
        name: 'john Berger',
        email: 'jberger@gmail.com',
        phone: '08036779043',
        type: 'professional',
      },
    ],
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // all our actions

  //add contacts

  //delete contacts

  //set current contacts

  //clear current contacts

  //update contacts

  // set filter

  //clear filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
