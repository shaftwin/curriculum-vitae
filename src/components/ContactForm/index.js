import React from 'react';
import PropTypes from 'prop-types';
import Network from 'src/components/Network';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import {
  Container,
  CustomInput,
  SendButton,
  CustomForm,
  CustomTextarea,
  NetworkContainer,
} from './styled';

const ContactForm = ({ className }) => {
  return (
    <Container className={className}>
      <CustomForm
        // eslint-disable-next-line max-len
        action="https://public.herotofu.com/v1/b07613d0-7e29-11ec-93f9-6712a4805a99"
        method="post"
      >
        <CustomInput
          placeholder="Name"
          name="Name"
          id="name"
          type="text"
          required
        />
        <CustomInput
          placeholder="Email"
          name="Email"
          id="email"
          type="email"
          required
        />
        <CustomInput
          placeholder="Subject"
          name="Subject"
          id="subject"
          type="text"
          required
        />
        <CustomTextarea
          placeholder="Message"
          name="Message"
          id="message"
          type="text"
          required
        />
        <SendButton type="submit" value="Send" />
      </CustomForm>
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
    </Container>
  );
};

ContactForm.propTypes = {
  className: PropTypes.string,
};

ContactForm.defaultProps = {
  templateColor: 'primary',
  size: 'normal',
};

export default ContactForm;
