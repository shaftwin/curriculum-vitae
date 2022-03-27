/* eslint-disable max-len */
import React, { useCallback, useEffect } from 'react';
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

  const networkContainerDOMPosition = useCallback(() => {
    const textContainerNode = document.getElementById('TextContainer');
    const containerNode = document.getElementById('Container');
    // Resize to 1024 or more
    if (window.innerWidth >= 1024 && containerNode.childNodes.length === 3) {
      textContainerNode.appendChild(containerNode.childNodes[2]);
    } else if (
      window.innerWidth < 1024 &&
      textContainerNode.childNodes.length === 2
    ) {
      // Resize less than 1024 and avoid first time
      containerNode.appendChild(textContainerNode.childNodes[1]);
    }
  }, []);

  useEffect(() => networkContainerDOMPosition(), [networkContainerDOMPosition]);

  useEffect(() => {
    window.addEventListener('resize', networkContainerDOMPosition);
    return () =>
      window.removeEventListener('resize', networkContainerDOMPosition);
  }, [networkContainerDOMPosition]);

  return (
    <Container id="Container">
      <TextContainer id="TextContainer">
        <CustomTextInfo
          shaked
          title="Contact"
          texts={[t('common:contact.1')]}
        />
      </TextContainer>
      <CustomContactForm as={ContactForm} />
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
    </Container>
  );
};

Contact.propTypes = {};

export default Contact;
