# Conversation Select

![Conversation Select](https://res.cloudinary.com/iyikuyoro/image/upload/v1563224247/slack-block-msg-kit/Screenshot_2019-07-15_at_9.56.26_PM.png)

A [conversation select](https://api.slack.com/reference/messaging/block-elements#conversation-select) menu lists the available communications to the user on slack.

## Table of Content

- [Conversation Select](#Conversation-Select)
  - [Table of Content](#Table-of-Content)
  - [Importing the ConversationSelectElement Class](#Importing-the-ConversationSelectElement-Class)
  - [Creating a Conversation Select Object (Constructor)](#Creating-a-Conversation-Select-Object-Constructor)
  - [Adding an initial_conversation (addInitialConversation())](#Adding-an-initialconversation-addInitialConversation)
  - [Adding a confirmation dialog (addConfirmationDialogByParameters())](#Adding-a-confirmation-dialog-addConfirmationDialogByParameters)
  - [Possible Errors](#Possible-Errors)

## Importing the ConversationSelectElement Class

```javascript
import ConversationSelectElement from 'slack-block-msg-kit/BlockElements/ConversationSelectElement';
```

or

```javascript
import { ConversationSelectElement } from 'slack-block-msg-kit';
```

## Creating a Conversation Select Object (Constructor)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| actionId  | string | The action id of the select element | 'ACT001' |
| placeholder | string | The placeholder text for the select element | 'select an option' |

```javascript
import { ConversationSelectElement } from 'slack-block-msg-kit';

const convSelect = new ConversationSelectElement('actionId', 'placeholder');
```

## Adding an initial_conversation (addInitialConversation())

An initial conversation can be selected by default when the select menu is loaded on slack. It is one of the optional parameters that can be added to the conversation select object. To add an initial_conversation, simply make use of the **addInitialConversation** method.

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| initialConversationId  | string | The initial conversation's slack id | 'CT001122' |

```javascript
import { ConversationSelectElement } from 'slack-block-msg-kit';

const convSelect = new ConversationSelectElement('actionId', 'placeholder');

convSelect.addInitialConversation('CT001122');
```

## Adding a confirmation dialog (addConfirmationDialogByParameters())

You may wish to confirm the user selection with a [Confirmation Dialog](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/CompositionObjects/ConfirmationDialog.md). Simply make use of the (**addConfirmationDialogByParameters**) method for this.

```javascript
import Text, { TextType } from 'slack-block-msg-kit/CompositionObjects/Text'
import { ConversationSelectElement } from 'slack-block-msg-kit';

const convSelect = new ConversationSelectElement('actionId', 'placeholder');

convSelect.addConfirmationDialogByParameters(
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
