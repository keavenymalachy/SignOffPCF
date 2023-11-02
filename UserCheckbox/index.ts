import { IInputs, IOutputs } from './generated/ManifestTypes';
import { createElement } from 'react';
import { createRoot, Root } from 'react-dom/client';
import MyCheckbox, { MySwitchProps } from './components/MySwitch';

export class UserCheckbox
  implements ComponentFramework.StandardControl<IInputs, IOutputs>
{
  private _notifyOutputChanged: () => void;
  private _root: Root;
  private _inputText: string | null;

  private _props: MySwitchProps = {
    textFieldSLOT: null,
    dateFormat: 'UK',
    showTime: true,
    switchOrCheckbox: '',
    context: null,
    theme: 'WebLightTheme',
    onSwitchChange: this.notifyChange.bind(this),
  };

  constructor() {}

  /**
   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
   * Data-set values are not initialized here, use updateView.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
   */
  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
    container: HTMLDivElement
  ): void {
    this._root = createRoot(container!);
    this._notifyOutputChanged = notifyOutputChanged;
    this._props.context = context;
  }

  /**
   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
   */
  public updateView(context: ComponentFramework.Context<IInputs>): void {
    context.parameters.textField.raw === null
      ? (this._props.textFieldSLOT = null)
      : (this._props.textFieldSLOT = context.parameters.textField.raw!);

    // Static Properties
    this._props.dateFormat = context.parameters.dateformat?.raw ?? 'UK';
    this._props.showTime = context.parameters.showtime?.raw === 'True' ?? true;

    this._props.switchOrCheckbox =
      context.parameters.switchorcheckbox?.raw ?? 'Switch';
    this._props.theme = context.parameters.Theme?.raw ?? 'WebLightTheme';

    this._root.render(createElement(MyCheckbox, this._props));
  }

  /**
   * It is called by the framework prior to a control receiving new data.
   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
   */
  public getOutputs(): IOutputs {
    let test: string | undefined;

    if (this._inputText === null) {
      test = undefined;
    } else {
      test = this._inputText;
    }
    return {
      textField: test,
    };
  }

  /**
   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
   * i.e. cancelling any pending remote calls, removing listeners, etc.
   */

  public notifyChange(newValue: string | null) {
    this._inputText = newValue;
    this._notifyOutputChanged();
  }

  public destroy(): void {
    // Add code to cleanup control if necessary
    this._root.unmount();
  }
}
