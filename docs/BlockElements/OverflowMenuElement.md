# Overflow Menu

![Overflow Menu](https://res.cloudinary.com/iyikuyoro/image/upload/v1563276895/slack-block-msg-kit/Screenshot_2019-07-16_at_12.33.41_PM.png)

An [overflow menu](https://api.slack.com/reference/messaging/block-elements#overflow) renders a list of options on slack hidden behind an ellipsis.

## Importing the Overflow Menu Class

```javascript
import { OverflowMenuElement } from 'slack-block-msg-kit';
```

or

```javascript
import OverflowMenuElement from 'slack-block-msg-kit/BlockElements/OverflowMenuElement';
```

## Creating an Overflow Menu Object (Constructor)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| actionId  | string | The action id of the select element | 'ACT001' |
| options | [Option](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/CompositionObjects/Option.md)[] | An array of options | [new Option('Option 1', 'value 1'), new Option('Option 2', 'value 2')] |

Creating an overflow menu is done by passing two required parameters to the constructor.

```javascript
import Option from 'slack-block-msg-kit/CompositionObjects/Option';
import OverflowMenuElement from 'slack-block-msg-kit/BlockElements/OverflowMenuElement';

const overflowMenu = new OverflowMenuElement('actionId', [
  new Option('Option 1', 'value 1'),
  new Option('Option 2', 'value 2'),
]);
```

## Adding a confirmation dialog (.addConfirmationDialogByParameters())

You may wish to confirm the user selection with a [Confirmation Dialog](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/CompositionObjects/ConfirmationDialog.md). Simply make use of the (**addConfirmationDialogByParameters**) method for this.

```javascript
import Text, { TextType } from 'slack-block-msg-kit/CompositionObjects/Text'
import Option from 'slack-block-msg-kit/CompositionObjects/Option';
import OverflowMenuElement from 'slack-block-msg-kit/BlockElements/OverflowMenuElement';

const overflowMenu = new OverflowMenuElement('actionId', [
  new Option('Option 1', 'value 1'),
  new Option('Option 2', 'value 2'),
]);

overflowMenu.addConfirmationDialogByParameters(
  'confirm',
  new Text(TextType.plainText, 'Are you sure?'),
  'Yes',
  'No',
);
```

| Error | Cause | Remedy |
| ----- | ----- | ------ |
| 'actionId should not be more than 255 characters.' | Adding more than 255 characters in the actionId | Reduce the actionId size |
| 'Minimum of two options allowed' | Adding less that two options in the menu | Consider using a button |
| 'Maximum of five options allowed' | Adding more than five options in the menu | Consider using a select menu |
| 'Two options cannot share the same value in one group: 'value'' | Having two options with the same value | Use unique values for each option. |
