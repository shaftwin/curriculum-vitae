/* eslint-disable max-len */
import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <Container>
      <TextContainer>
        <CustomTextInfo
          shaked
          title="Contact"
          texts={[t('common:contact.1')]}
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
