/* eslint-disable max-len */
import React from 'react';
import ContactForm from 'src/components/ContactForm';
import TextInfo from 'src/components/TextInfo';
import { Container } from './styled';

const Contact = () => {
  return (
    <Container>
      <TextInfo
        title="Contact"
        texts={[
          'I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.',
        ]}
      />
      <ContactForm />
    </Container>
  );
};

Contact.propTypes = {};

export default Contact;
