# Channel Select

A [channel select](https://api.slack.com/reference/messaging/block-elements#channel-select) menu lists all the available channels to the current user on slack.

## Table of Content

- [Channel Select](#Channel-Select)
  - [Table of Content](#Table-of-Content)
  - [Importing the ChannelSelectElement Class](#Importing-the-ChannelSelectElement-Class)
  - [Creating a Channel Select Object (Constructor)](#Creating-a-Channel-Select-Object-Constructor)
  - [Adding an initial_channel (addInitialChannel())](#Adding-an-initialchannel-addInitialChannel)
  - [Adding a confirmation dialog (addConfirmationDialogByParameters())](#Adding-a-confirmation-dialog-addConfirmationDialogByParameters)
  - [Possible Errors](#Possible-Errors)

## Importing the ChannelSelectElement Class

```javascript
import { ChannelSelectElement } from 'slack-block-msg-kit';
```

or

```javascript
import ChannelSelectElement from 'slack-block-msg-kit/BlockElements/ChannelSelectElement';
```

## Creating a Channel Select Object (Constructor)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| actionId  | string | The action id of the select element | 'ACT001' |
| placeholder | string | The placeholder text for the select element | 'select an option' |

```javascript
import ChannelSelectElement from 'slack-block-msg-kit/BlockElements/ChannelSelectElement';

const channelSelect = new ChannelSelectElement('actionId', 'placeholder');
```

## Adding an initial_channel (addInitialChannel())

An initial channel can be selected by default when the select menu is loaded on slack. It is one of the optional parameters that can be added to the channel select object. To add an initial_channel, simply make use of the **addInitialChannel** method.

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| initialChannelId  | string | The initial channel's slack id | 'CT001122' |

```javascript
import ChannelSelectElement from 'slack-block-msg-kit/BlockElements/ChannelSelectElement';

const channelSelect = new ChannelSelectElement('actionId', 'placeholder');

channelSelect.addInitialChannel('CT001122');
```

## Adding a confirmation dialog (addConfirmationDialogByParameters())

You may wish to confirm the user selection with a [Confirmation Dialog](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/CompositionObjects/ConfirmationDialog.md). Simply make use of the (**addConfirmationDialogByParameters**) method for this.

```javascript
import Text, { TextType } from 'slack-block-msg-kit/CompositionObjects/Text'
import ChannelSelectElement from 'slack-block-msg-kit/BlockElements/ChannelSelectElement';

const channelSelect = new ChannelSelectElement('actionId', 'placeholder');

channelSelect.addConfirmationDialogByParameters(
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
