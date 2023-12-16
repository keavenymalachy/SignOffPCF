import { Meta, StoryFn, StoryObj } from '@storybook/react';
import UserCheckboxApp from '../UserCheckbox/components/UserCheckboxApp';
import * as React from 'react';
import { useArgs } from '@storybook/client-api';
import {
  ComponentFrameworkMockGenerator,
  ComponentFrameworkMockGeneratorReact,
  EnumPropertyMock,
  ShkoOnline,
  StringPropertyMock,
} from '@shko.online/componentframework-mock';
import { IInputs, IOutputs } from '../UserCheckbox/generated/ManifestTypes';
import { render } from 'react-dom';
import { text } from 'stream/consumers';
import { mock } from 'node:test';
import SwitchArgs from '../UserCheckbox/services/SwitchContext';
import { UserCheckbox } from '../UserCheckbox';

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

export const Context = Template.bind({});
Context.args = {
  context: mockContext(),
};

function mockContext(): ComponentFramework.Context<IInputs> {
  // const [args, updateArgs] = useArgs<SwitchArgs>();
  let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;

  mockGenerator = new ComponentFrameworkMockGenerator<IInputs, IOutputs>(
    UserCheckbox,
    {
      textField: StringPropertyMock,
      dateformat: EnumPropertyMock,
      showtime: EnumPropertyMock,
      switchorcheckbox: EnumPropertyMock,
      Theme: EnumPropertyMock<
        | 'WebLightTheme'
        | 'WebDarkTheme'
        | 'TeamsLightTheme'
        | 'TeamsDarkTheme'
        | 'TeamsHighContrastTheme'
      >,
    }
  );

  mockGenerator.metadata.initMetadata([
    {
      LogicalName: 'systemuser',
      SchemaName: 'User',
      PrimaryIdAttribute: 'systemuserid',
      PrimaryNameAttribute: 'fullname',
      PrimaryImageAttribute: 'entityimage',
      ManyToOneRelationships: [],
      OneToManyRelationships: [],
    } as ShkoOnline.EntityMetadata,
  ]);

  mockGenerator.context._parameters.textField.security = {
    editable: true,
    readable: true,
    secured: false,
  };

  mockGenerator.context.userSettings.userName = 'Malachy Keaveny';
  mockGenerator.context.userSettings.userId =
    '{596C4CB1-03AF-ED11-9885-000D3AB1252D}';

  mockGenerator.context.parameters.textField.raw =
    '{"fullName":"Paddy Pimplett","img":"","userId":"{596C4CB1-03AF-ED11-9885-000D3AB1252D}","timestamp":"13/12/2023 @ 22:20"}';

  mockGenerator.ExecuteInit();

  return mockGenerator.context;
}
