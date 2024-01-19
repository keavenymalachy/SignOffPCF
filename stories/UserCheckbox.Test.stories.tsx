import { Meta, StoryFn, StoryObj } from "@storybook/react";
import UserCheckboxApp from "../UserCheckbox/components/UserCheckboxApp";
import * as React from "react";
import { useArgs } from "@storybook/client-api";
import {
  ComponentFrameworkMockGenerator,
  ComponentFrameworkMockGeneratorReact,
  EnumPropertyMock,
  ShkoOnline,
  StringPropertyMock,
} from "@shko.online/componentframework-mock";
import { IInputs, IOutputs } from "../UserCheckbox/generated/ManifestTypes";
import { render } from "react-dom";
import { text } from "stream/consumers";
import { mock } from "node:test";
import SwitchArgs from "../UserCheckbox/services/SwitchContext";
import { UserCheckbox } from "../UserCheckbox";

export default {
  title: "UserCheckbox/Test",
  tags: ["autodocs"],
  component: UserCheckboxApp,
  decorators: [
    (Story) => (
      <div style={{ margin: "3em", maxWidth: "350px" }}>{Story()}</div>
    ),
  ],
  args: {
    textFieldSLOT: null,
    dateFormat: "UK",
    showTime: true,
    switchOrCheckbox: "Switch",
    theme: "WebLightTheme",
  },
} as Meta<typeof UserCheckboxApp>;

const Template: StoryFn<typeof UserCheckboxApp> = (args) => {
  const [, updateArgs] = useArgs();
  // args.onSwitchChange = (input: string | null) => {
  //   updateArgs({
  //     textFieldSLOT:
  //       '{"fullName":"Tony Daly","img":"","userId":"{596C4CB1-03AF-ED11-9885-000D3AB1252D}","timestamp":"13/12/2023 @ 22:20"}',
  //   });
  // };

  //args.context = mockContext(true);
  return <UserCheckboxApp {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  context: mockContext(false),
};

export const UserEntityImage = Template.bind({});
UserEntityImage.args = {
  context: mockContext(true),
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const USDateFormat = Template.bind({});
USDateFormat.args = {
  dateFormat: "US",
  context: mockContext(false),
};

export const HideTime = Template.bind({});
HideTime.args = {
  showTime: false,
  context: mockContext(false),
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  switchOrCheckbox: "Checkbox",
  context: mockContext(false),
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  theme: "WebDarkTheme",
  context: mockContext(false),
};

// export const Context = Template.bind({});
// Context.args = {
//   context: mockContext(false),
// };

function mockContext(showImg: boolean): ComponentFramework.Context<IInputs> {
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
        | "WebLightTheme"
        | "WebDarkTheme"
        | "TeamsLightTheme"
        | "TeamsDarkTheme"
        | "TeamsHighContrastTheme"
      >,
    }
  );

  mockGenerator.metadata.initMetadata([
    {
      LogicalName: "systemuser",
      SchemaName: "User",
      PrimaryIdAttribute: "systemuserid",
      PrimaryNameAttribute: "fullname",
      PrimaryImageAttribute: "entityimage",
      ManyToOneRelationships: [],
      OneToManyRelationships: [],
    } as ShkoOnline.EntityMetadata,
  ]);

  mockGenerator.context._parameters.textField.security = {
    editable: true,
    readable: true,
    secured: false,
  };

  mockGenerator.context.userSettings.userName = "Homer Simpson";

  mockGenerator.context.userSettings.userId =
    "{596C4CB1-03AF-ED11-9885-000D3AB1252D}";

  if (showImg) {
    mockGenerator.context.webAPI.retrieveRecord.callsFake(
      (entityType: string, id: string, options?: string) => {
        return Promise.resolve({
          entityimage_url:
            "https://www.onthisday.com/images/people/homer-simpson.jpg?w=360",
        });
      }
    );
  } else {
    mockGenerator.context.webAPI.retrieveRecord.callsFake(
      (entityType: string, id: string, options?: string) => {
        return Promise.resolve({
          entityimage_url: "",
        });
      }
    );
  }

  // mockGenerator.onOutputChanged.callsFake(() => {
  //   Context.args?.onSwitchChange
  //   Context.args = {
  //     textFieldSLOT:
  //       '{"fullName":"GEORGE GEORGE Daly","img":"","userId":"{596C4CB1-03AF-ED11-9885-000D3AB1252D}","timestamp":"13/12/2023 @ 22:20"}',
  //   };
  // });

  mockGenerator.ExecuteInit();

  return mockGenerator.context;
}
