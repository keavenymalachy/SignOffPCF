import { Meta, StoryFn } from '@storybook/react';
import UserCheckboxApp from '../UserCheckbox/components/UserCheckboxApp';
import * as React from 'react';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'UserCheckbox/Test',
  tags: ['autodocs'],
  component: UserCheckboxApp,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', maxWidth: '350px' }}>{Story()}</div>
    ),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    textFieldSLOT:
      '{"fullName":"Malachy Keaveny","img":"","userId":"{596C4CB1-03AF-ED11-9885-000D3AB1252D}","timestamp":"13/12/2023 @ 22:20"}',
    dateFormat: 'UK',
    showTime: true,
    switchOrCheckbox: 'Switch',
    theme: 'WebLightTheme',
  },
} as Meta<typeof UserCheckboxApp>;

const Template: StoryFn<typeof UserCheckboxApp> = (args) => {
  const [, updateArgs] = useArgs();
  args.onSwitchChange = (input: string | null) => {
    updateArgs({
      textFieldSLOT:
        '{"fullName":"Tony Daly","img":"","userId":"{596C4CB1-03AF-ED11-9885-000D3AB1252D}","timestamp":"13/12/2023 @ 22:20"}',
    });
  };
  return <UserCheckboxApp {...args} />;
};

export const Default = Template.bind({});

export const UserEntityImage = Template.bind({});
UserEntityImage.args = {
  textFieldSLOT:
    '{"fullName":"Bill Gates","img":"https://www.hollywoodreporter.com/wp-content/uploads/2018/02/billgatesheadshot_-_h_2018.jpg","userId":"{596C4CB1-03AF-ED11-9885-000D3AB1252D}","timestamp":"13/12/2023 @ 22:20"}',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const USDateFormat = Template.bind({});
USDateFormat.args = {
  dateFormat: 'US',
};

export const HideTime = Template.bind({});
HideTime.args = {
  showTime: false,
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  switchOrCheckbox: 'Checkbox',
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  theme: 'WebDarkTheme',
};
