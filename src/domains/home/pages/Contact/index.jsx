/* eslint-disable max-len */
import React from 'react';
import ContactForm from 'src/components/ContactForm';
import Network from 'src/components/Network';
import TextInfo from 'src/components/TextInfo';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { Container, NetworkContainer, TextContainer } from './styled';

const Contact = () => {
  return (
    <Container>
      <TextContainer>
        <TextInfo
          title="Contact"
          texts={[
            'I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.',
          ]}
        />
        <NetworkContainer>
          <Network
            icon={<BsLinkedin size="2em" />}
            link="https://www.linkedin.com/in/florian-champin-neault/"
          />
          <Network
            icon={<BsGithub size="2em" />}
            link="https://github.com/shaftwin"
          />
        </NetworkContainer>
      </TextContainer>
      <ContactForm />
    </Container>
  );
};

Contact.propTypes = {};

export default Contact;
