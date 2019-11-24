import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../type';

const ContactState = props => {
  const initialstate = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '111-111-1111'
      },
      {
        id: 2,
        name: 'Bob Johnson',
        email: 'bob@gmail.com',
        phone: '222-222-2222'
      },
      {
        id: 1,
        name: 'John Johnson',
        email: 'john@gmail.com',
        phone: '333-333-3333'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialstate);

  // Add contact

  // Delete contact

  // Set current contact

  // clear current contact

  // update contact

  // filter contacts

  // clear filter

  return (
    <ContactContext.Provider>
      value =
      {{
        contacts: state.contacts
      }}
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
