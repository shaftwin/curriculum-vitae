/* eslint-disable max-len */
import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { VscFilePdf } from 'react-icons/vsc';
import ContactForm from 'src/components/ContactForm';
import Network from 'src/components/Network';
import {
  Container,
  CustomContactForm,
  CustomTextInfo,
  NetworkContainer,
  TextContainer,
} from './styled';

const Contact = () => {
  return (
    <Container>
      <TextContainer>
        <CustomTextInfo
          shaked
          title="Contact"
          texts={[
            'I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to contact me.',
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
          <Network
            icon={<VscFilePdf size="2em" />}
            link="/assets/pdf/Resume2022PDF.pdf"
            download
          />
        </NetworkContainer>
      </TextContainer>
      <CustomContactForm as={ContactForm} />
    </Container>
  );
};

Contact.propTypes = {};

export default Contact;
