import { Meta, StoryObj } from "@storybook/html";

import { useArgs, useEffect } from "@storybook/preview-api";
import {
  ComponentFrameworkMockGenerator,
  EnumPropertyMock,
  ShkoOnline,
  StringPropertyMock,
} from "@shko.online/componentframework-mock";
import { IInputs, IOutputs } from "../UserCheckbox/generated/ManifestTypes";
import { UserCheckbox as Component } from "../UserCheckbox";

interface StoryArgs {
  textFieldSLOT: string | null;
  dateFormat: "UK" | "US";
  showTime: "True" | "False";
  switchOrCheckbox: "Switch" | "Checkbox";
  theme:
    | "WebLightTheme"
    | "WebDarkTheme"
    | "TeamsLightTheme"
    | "TeamsDarkTheme"
    | "TeamsHighContrastTheme";
  showImg: boolean;
  isVisible: boolean;
  isDisabled: boolean;
}

export default {
  title: "UserSignOff/Components",
  decorators: [
    (Story) => {
      var container = document.createElement("div");
      container.style.margin = "2em";
      container.style.padding = "1em";
      container.style.maxWidth = "350px";
      container.style.border = "dotted 1px";

      var storyResult = Story();
      if (typeof storyResult == "string") {
        container.innerHTML = storyResult;
      } else {
        container.appendChild(storyResult);
      }
      return container;
    },
  ],
  argTypes: {
    textFieldSLOT: { name: "Text Field", control: "text" },
    dateFormat: {
      name: "Date Format",
      options: ["UK", "US"],
      control: {
        type: "select",
      },
      table: {
        category: "Parameters",
        defaultValue: { summary: "UK" },
      },
    },
    showImg: {
      name: "Show Image",
      control: "boolean",
      table: {
        category: "Parameters",
        defaultValue: { summary: "true" },
      },
    },
    showTime: {
      name: "Show Time",
      options: ["False", "True"],
      control: {
        type: "select",
      },
      table: {
        category: "Parameters",
        defaultValue: { summary: "True" },
      },
    },
    switchOrCheckbox: {
      name: "Control Type",
      options: ["Switch", "Checkbox"],
      control: {
        type: "select",
      },
      table: {
        category: "Parameters",
        defaultValue: { summary: "Switch" },
      },
    },
    theme:{
      name: "Theme",
      options: ["WebLightTheme" , "WebDarkTheme" , "TeamsLightTheme" , "TeamsDarkTheme" , "TeamsHighContrastTheme"],
      control: {
        type: "select",
      },
      table: {
        category: "Parameters",
        defaultValue: { summary: "WebLightTheme" },
      },
    },
    isDisabled: {
      name: "Disabled",
      control: "boolean",
      table: {
        category: "Mode",
        defaultValue: { summary: "false" },
      },
    },
    isVisible: {
      name: "Visible",
      control: "boolean",
      table: {
        category: "Mode",
        defaultValue: { summary: "true" },
      },
    },
  },
  args: {
    textFieldSLOT: null,
    dateFormat: "UK",
    showTime: "True",
    switchOrCheckbox: "Switch",
    theme: "WebLightTheme",
    isDisabled: false,
    isVisible: true,
    showImg: false,
  },
} as Meta<StoryArgs>;

const renderGenerator = () => {
  let container: HTMLDivElement | null;
  let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;

  return function () {
    const [args, updateArgs] = useArgs<StoryArgs>();
    // Fires on unload story
    useEffect(
      () => () => {
        container = null;
        mockGenerator.control.destroy();
      },
      []
    );
    if (!container) {
      container = document.createElement("div");
      mockGenerator = mockGenerator = new ComponentFrameworkMockGenerator<
        IInputs,
        IOutputs
      >(
        Component,
        {
          textField: StringPropertyMock,
          dateformat: EnumPropertyMock,
          showtime: EnumPropertyMock,
          switchorcheckbox: EnumPropertyMock,
          Theme: EnumPropertyMock,
        },
        container
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

      if (args.showImg) {
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

      mockGenerator.context._SetCanvasItems({
        dateformat: args.dateFormat,
        showtime: args.showTime,
        switchorcheckbox: args.switchOrCheckbox,
        textField: args.textFieldSLOT as string,
        Theme: args.theme,
      });

      mockGenerator.onOutputChanged.callsFake(({ textField }) => {
        updateArgs({
          textFieldSLOT: textField,
        });
      });

      mockGenerator.ExecuteInit();
    }

    if (mockGenerator) {
      mockGenerator.context.mode.isVisible = args.isVisible;
      mockGenerator.context.mode.isControlDisabled = args.isDisabled;
      mockGenerator.context._parameters.textField._SetValue(args.textFieldSLOT);
      mockGenerator.context._parameters.dateformat._SetValue(args.dateFormat);
      mockGenerator.context._parameters.showtime._SetValue(args.showTime);
      mockGenerator.context._parameters.switchorcheckbox._SetValue(args.switchOrCheckbox);
      mockGenerator.context._parameters.Theme._SetValue(args.theme);
      mockGenerator.ExecuteUpdateView();
    }

    return container;
  };
};

export const Default = {
  render: renderGenerator(),
} as StoryObj<StoryArgs>;

export const UserEntityImage = {
  args: {
    showImg: true,
  },
  render: renderGenerator(),
} as StoryObj<StoryArgs>;

export const Disabled = {
  args: {
    isDisabled: true,
  },
  render: renderGenerator(),
} as StoryObj<StoryArgs>;

export const USDateFormat = {
  args: {
    dateFormat: "US",
  },
  render: renderGenerator(),
} as StoryObj<StoryArgs>;

export const HideTime = {
  args: {
    showTime: "False",
  },
  render: renderGenerator(),
} as StoryObj<StoryArgs>;

export const Checkbox = {
  args: {
    switchOrCheckbox: "Checkbox",
  },
  render: renderGenerator(),
} as StoryObj<StoryArgs>;

export const DarkTheme = {
  args: {
    theme: "WebDarkTheme",
  },
  render: renderGenerator(),
} as StoryObj<StoryArgs>;
