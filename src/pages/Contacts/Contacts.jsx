// import ContactForm from 'components/ContactForm/ContactForm';
import Box from 'components/Box/Box';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export const Contacts = () => {
  return (
    <Box maxWidth="50%" ml="auto" mr="auto">
      <Filter />
      <ContactList />
    </Box>
  );
};
