/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { actions } from '@storybook/addon-actions';
import Filter from '../../../assets/svg/filter';
import Button from './index';

/* More on default export:
https://storybook.js.org/docs/react/writing-stories/introduction#default-export
 */
export default {
  title: 'Components/Button',
  component: Button,
};

/* More on component templates:
https://storybook.js.org/docs/react/writing-stories/introduction#using-args
*/

const Template = (args) => <Button onclick={actions('onClick')} {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const FillNormal = Template.bind({});
FillNormal.args = {
  label: 'Button',
};

export const FillWithIcon = Template.bind({});
FillWithIcon.args = {
  icon: <Filter />,
  label: 'Button',
};

export const StrokeNormal = Template.bind({});
StrokeNormal.args = {
  label: 'Button',
  buttonType: 'stroke',
};

export const StrokeWithIcon = Template.bind({});
StrokeWithIcon.args = {
  icon: <Filter />,
  label: 'Button',
  buttonType: 'stroke',
};

export const SmallWithIcon = Template.bind({});
SmallWithIcon.args = {
  icon: <Filter />,
  label: 'Button',
  size: 'small',
};
