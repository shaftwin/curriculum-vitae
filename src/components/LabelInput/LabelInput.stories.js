import React from 'react';
import LabelInput from './index';

export default {
  title: 'Components/LabelInput',
  component: LabelInput,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <LabelInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'LabelInput',
  inputValue: 'test value',
};

export const LargeInput = Template.bind({});
LargeInput.args = {
  label: 'LargeInput',
  inputValue: 'test value',
  size: 'large',
};

export const InputWithErrorMessage = Template.bind({});
InputWithErrorMessage.args = {
  label: 'LargeInput',
  inputValue: 'test value',
  errorMessage: 'this is an error',
  size: 'large',
  inputState: 'error',
};

export const InputWithoutErrorMessage = Template.bind({});
InputWithoutErrorMessage.args = {
  label: 'LargeInput',
  inputValue: 'test value',
  size: 'large',
  inputState: 'error',
};

export const TextArea = Template.bind({});
TextArea.args = {
  label: 'TextArea',
  inputValue: 'test value',
  textArea: true,
};
