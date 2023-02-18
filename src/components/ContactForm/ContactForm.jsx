import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { PropTypes } from 'prop-types';

import Box from '../Box/Box';
// import { LabelNameStyle } from './ContactForm.styled';
import { LabelStyle } from './ContactForm.styled';
// import { BtnAddContactStyle } from './ContactForm.styled';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { addContactAction } from 'redux/contacts/contacts.slice';
import { selectContactState } from 'redux/contacts/contacts.selectors';
import { addContact } from 'redux/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContactState);
  const dispatch = useDispatch();

  const onSubmitForm = e => {
    e.preventDefault();
    if (contacts.every(contact => contact.name !== name)) {
      const data = { name, number };

      // data.id = nanoid();
      console.log(e);
      // dispatch(addContactAction(data));

      dispatch(addContact(data));

      reset();
    } else {
      toast.warn(`${name} is already in your contacts`);
    }
  };
  //
  // const handleChange = e => {
  //   const { name, value } = e.currentTarget;
  //   if (name === 'name') {
  //     setName(value);
  //   }
  //   if (name === 'number') {
  //     setNumber(value);
  //   }
  // };

  const onChangeName = e => {
    const { value } = e.currentTarget;
    setName(value);
    console.log(e);
  };

  const onChangeNumber = e => {
    const { value } = e.currentTarget;
    setNumber(value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      // maxWidth=''
      as="form"
      onSubmit={onSubmitForm}
    >
      <LabelStyle>
        {/* <LabelNameStyle> Name :</LabelNameStyle> */}
        <TextField
          id="outlined-basic"
          label="Name:"
          variant="outlined"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onChangeName}
          color="warning"
        />
        {/* <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onChangeName}
          placeholder="Jane Jonson"
        /> */}
      </LabelStyle>
      <LabelStyle>
        {/* <LabelNameStyle>Number :</LabelNameStyle> */}
        <TextField
          id="outlined-basic"
          label="Number:"
          variant="outlined"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onChangeNumber}
          color="warning"
        />
        {/* <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onChangeNumber}
          placeholder="0987952255"
        /> */}
      </LabelStyle>
      <Button
        variant="contained"
        style={{ backgroundColor: 'orangered', textTransform: 'capitalize' }}
        type="submit"
      >
        Add contact
      </Button>
      {/* <BtnAddContactStyle type="submit">Add contact</BtnAddContactStyle> */}
      <ToastContainer autoClose={2000} />
    </Box>
  );
};

export default ContactForm;

// ContactForm.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ),
// };
