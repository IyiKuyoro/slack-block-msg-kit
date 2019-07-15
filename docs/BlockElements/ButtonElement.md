# Button

[Buttons](https://api.slack.com/reference/messaging/block-elements#button) are used as child components to trigger actions by the user from slack. They are usually assigned an ID so your application can know the exact action triggered.

## Table of Content

- [Button](#Button)
  - [Table of Content](#Table-of-Content)
  - [Importing the Button Class](#Importing-the-Button-Class)
  - [Creating a button (Constructor)](#Creating-a-button-Constructor)
  - [Adding a URL to the button (addUrl())](#Adding-a-URL-to-the-button-addUrl)
  - [Adding a value (addValue())](#Adding-a-value-addValue)
  - [Changing the style of the button (changeStyle())](#Changing-the-style-of-the-button-changeStyle)
  - [Adding a confirmation dialog (.addConfirmationDialogByParameters())](#Adding-a-confirmation-dialog-addConfirmationDialogByParameters)

## Importing the Button Class

```javascript
import { ButtonElement, ButtonStyle} from 'slack-block-msg-kit';
```

or

```javascript
import ButtonElement, { ButtonStyle } from 'slack-block-msg-kit/BlockElements/ButtonElement';
```

## Creating a button (Constructor)

To create a [Button](https://api.slack.com/reference/messaging/block-elements#button), we make use of the constructor. The first two parameters of the constructor are required being the text and the action id.

```javascript
import ButtonElement, { ButtonStyle } from 'slack-block-msg-kit/BlockElements/ButtonElement';

const button = new ButtonElement('Close', 'ACT001');
```

## Adding a URL to the button (addUrl())

You may wish to load a page in the user's browser when the button is clicked. To do this, make use of the method (**addUrl**). Keep in mind that the url cannot be more than 3000 characters.

```javascript
import ButtonElement, { ButtonStyle } from 'slack-block-msg-kit/BlockElements/ButtonElement';

const button = new ButtonElement('Close', 'ACT001');

button.addUrl('https://fakeurl.com');
```

## Adding a value (addValue())

To add a value to the payload that is returned when the button is clicked, make use of (**addValue**). Keep in mind that the value cannot be more than 2000 characters.

```javascript
import ButtonElement, { ButtonStyle } from 'slack-block-msg-kit/BlockElements/ButtonElement';

const button = new ButtonElement('Close', 'ACT001');

button.addValue('Clicked ACT001');
```

## Changing the style of the button (changeStyle())

You may also wish to change the style of the button from the default to either primary or secondary. To do this, simply call the method (**changeStyle**), passing the required button style.

There are only two button styles and both can be accessed from the ButtonStyle Object which is imported along with the ButtonElement below.

```javascript
import ButtonElement, { ButtonStyle } from 'slack-block-msg-kit/BlockElements/ButtonElement';

const button = new ButtonElement('Close', 'ACT001');

button.changeStyle(ButtonStyle.danger);
```

## Adding a confirmation dialog (.addConfirmationDialogByParameters())

You may wish to confirm the user action before executing with a [Confirmation Dialog](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/Docs/CompositionObjects/ConfirmationDialog.md). Simply make use of the (**addConfirmationDialogByParameters**) method for this.

```javascript
import { Text, TextType } from 'slack-block-msg-kit';
import ButtonElement, { ButtonStyle } from 'slack-block-msg-kit/BlockElements/ButtonElement';

const button = new ButtonElement('Close', 'ACT001');

button.addConfirmationDialogByParameters(
  'confirm',
  new Text(TextType.plainText, 'Are you sure?'),
  'Yes',
  'No',
);
```
