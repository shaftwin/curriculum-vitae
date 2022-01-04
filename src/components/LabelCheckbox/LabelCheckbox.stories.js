import React from 'react';
import LabelCheckbox from './index';

export default {
  title: 'Components/LabelCheckBox',
  component: LabelCheckbox,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <LabelCheckbox {...args} />;

export const Default = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Label',
  error: true,
  errorMessage: 'Error message',
};

export const WithCustomComponent = Template.bind({});
WithCustomComponent.args = {
  label: (
    <div>
      <label>test label </label>
      <a href="#">my test link</a>
    </div>
  ),
};
