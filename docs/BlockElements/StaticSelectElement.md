# Static Select

[Static select](https://api.slack.com/reference/messaging/block-elements#static-select) renders a select menu from a static list of options.

## Importing the StaticSelect Class

```javascript
import { StaticSelectElement } from 'slack-block-msg-kit';
```

or

```javascript
import StaticSelectElement from 'slack-block-msg-kit/BlockElements/StaticSelectElement';
```

## Creating a Static Select Object (Constructor)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| actionId  | string | The action id of the select element | 'ACT001' |
| placeholder | string | The placeholder text for the select element | 'select an option' |

Creating a static select object is done by passing the two required parameters to the constructor. The constructed select object cannot be used right away. some options need to be added to it.

```javascript
import StaticSelectElement from 'slack-block-msg-kit/BlockElements/StaticSelectElement';

const sse = new StaticSelectElement('actionId', 'placeholder');
```

## Adding options (StaticSelect)

There are two ways of adding options to a static select object.

- Adding an [options](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/Docs/CompositionObjects/Option.md) array (**addOptions()**)
- Adding an [optionGroups](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/Docs/CompositionObjects/OptionGroup.md) array (**addOptionGroups()**)

One StaticSelect object cannot have both options and option groups.

**addOptions()**: To add options to the StaticSelectObject, all that is required is to call the addOptions method.

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| options   | [Option](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/Docs/CompositionObjects/Option.md)[] | An array of options to be added to the menu | [ new Option('Option 1', 'one') ] |
| _initialOptionIndex_ | number? | The index of the option to be used as the selected option when the menu is loaded | 0 |

Below is an example

```javascript
import StaticSelectElement from 'slack-block-msg-kit/BlockElements/StaticSelectElement';
import Option from 'slack-block-msg-kit/CompositionObjects/Option';

const sse = new StaticSelectElement('actionId', 'placeholder');

sse.addOptions([
  new Option('Option 1', 'one'),
]);
```

**addOptionGroup()**: To add option groups to the StaticSelect element, all that is required is to call the addOptionGroup method.

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| optionGroups   | [OptionGroup](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/Docs/CompositionObjects/OptionGroup.md)[] | An array of option groups to be added to the menu | [ new OptionGroup('Group', [new Option('Option 1', 'one')])] |
| _initialOptionGroupIndex_ | number? | The index of the option group to be used in selecting options array which contains the option to be used as the selected option when the menu is loaded | 0 |
| _initialOptionIndex_ | number? | The index of the option to be used as the selected option when the menu is loaded | 0 |

Below is an example

```javascript
import StaticSelectElement from 'slack-block-msg-kit/BlockElements/StaticSelectElement';
import Option from 'slack-block-msg-kit/CompositionObjects/Option';
import OptionGroup from 'slack-block-msg-kit/CompositionObjects/OptionGroup';

const sse = new StaticSelectElement('actionId', 'placeholder');

sse.addOptionGroups(
  [ new OptionGroup('Group', [new Option('Option 1', 'one')])],
);
```

## Adding a confirmation dialog (.addConfirmationDialogByParameters())

You may wish to confirm the user selection with a [Confirmation Dialog](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/Docs/CompositionObjects/ConfirmationDialog.md). Simply make use of the (**addConfirmationDialogByParameters**) method for this.

```javascript
import StaticSelectElement from 'slack-block-msg-kit/BlockElements/StaticSelectElement';
import Option from 'slack-block-msg-kit/CompositionObjects/Option';
import Text, { TextType } from 'slack-block-msg-kit/CompositionObjects/Text';

const sse = new StaticSelectElement('actionId', 'placeholder');

sse.addOptionGroups([
  new Option('Option 1', 'one'),
]).addConfirmationDialogByParameters(
  'confirm',
  new Text(TextType.plainText, 'Are you sure?'),
  'Yes',
  'No',
);
```

## Possible Errors

| Error | Cause | Remedy |
| ----- | ----- | ------ |
| 'placeholder should not be more than 150 characters.' | Adding more than 150 characters in the placeholder | Reduce the placeholder size |
| 'actionId should not be more than 255 characters.' | Adding more than 255 characters in the actionId | Reduce the actionId size |
| 'StaticSelectElement cannot have both options and option_groups' | Adding options and optionGroups to the same StaticSelect element | Use on of the two |
| 'Cannot have more than 100 options' | Adding more than 100 options in the options array | Max options array size should be 100 |
| 'Cannot have more than 100 optionGroups' | Adding more than 100 options in the optionGroups array | Max optionGroups array size should be 100 |
| 'initialOptionGroupIndex is out of optionGroup range' | Selecting an optionGroupIndex that is beyond the optionGroups array ranch | Use an initialOptionGroupIndex in the optionGroups array range|
| 'initialOptionIndex is out of options range' | selecting an initialOptionIndex that is beyond the options array range | Use an initialOptionIndex that is in the option array range |
