/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from '@emotion/styled';
import Link from './index';

export default {
  title: 'Components/Link',
  component: Link,
};

const GreenContainer = styled.div`
  background-color: ${({ theme }) => theme.global.colors.green};
  width: 12.5rem;
`;

const Template = (args) => <Link {...args} />;

const WhiteTemplate = (args) => (
  <GreenContainer>
    <Link {...args} />
  </GreenContainer>
);

export const Default = Template.bind({});
Default.args = {
  text: 'Link',
  link: 'https://www.google.com/',
};

export const WhiteWithGreenBackground = WhiteTemplate.bind({});
WhiteWithGreenBackground.args = {
  text: 'White Link',
  templateColor: 'white',
  link: 'https://www.google.com/',
};
