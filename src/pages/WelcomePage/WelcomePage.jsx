import Box from 'components/Box/Box';

export const WelcomePage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Box as="h2">Wellcome to Phonebook</Box>
      <Box as="p">You need to log in to use this application</Box>
    </Box>
  );
};
