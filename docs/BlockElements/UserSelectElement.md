# User Select

![User Select](https://res.cloudinary.com/iyikuyoro/image/upload/v1563182440/slack-block-msg-kit/Screenshot_2019-07-15_at_10.17.21_AM.png)

A user select menu is a select menu that displays all the members of a slack workspace for selection.

## Table of Content

- [User Select](#User-Select)
  - [Table of Content](#Table-of-Content)
  - [Importing the UserSelectElement Class](#Importing-the-UserSelectElement-Class)
  - [Creating a User Select Object (Constructor)](#Creating-a-User-Select-Object-Constructor)
  - [Adding an initial_user (addInitialUser())](#Adding-an-initialuser-addInitialUser)
  - [Adding a confirmation dialog (addConfirmationDialogByParameters())](#Adding-a-confirmation-dialog-addConfirmationDialogByParameters)
  - [Possible Errors](#Possible-Errors)

## Importing the UserSelectElement Class

```javascript
import UserSelectElement from 'slack-block-msg-kit/BlockElements/UserSelectElement';
```

or

```javascript
import { UserSelectElement } from 'slack-block-msg-kit';
```

## Creating a User Select Object (Constructor)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| actionId  | string | The action id of the select element | 'ACT001' |
| placeholder | string | The placeholder text for the select element | 'select an option' |

Creating a user select object is done by passing the two required parameters to the constructor.

```javascript
import UserSelectElement from 'slack-block-msg-kit/BlockElements/UserSelectElement';

const use = new UserSelectElement('actionId', 'placeholder');
```

## Adding an initial_user (addInitialUser())

An initial user can be selected by default when the select menu is loaded on slack. It is one of the optional parameters that can be added to the user select object. To add an initial_user, simply make use of the **addInitialUser** method.

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| initialUserId  | string | The initial user's slack id | 'CT001122' |

```javascript
import UserSelectElement from 'slack-block-msg-kit/BlockElements/UserSelectElement';

const use = new UserSelectElement('actionId', 'placeholder');

use.addInitialUser('CT001122');
```

## Adding a confirmation dialog (addConfirmationDialogByParameters())

You may wish to confirm the user selection with a [Confirmation Dialog](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/CompositionObjects/ConfirmationDialog.md). Simply make use of the (**addConfirmationDialogByParameters**) method for this.

```javascript
import UserSelectElement from 'slack-block-msg-kit/BlockElements/UserSelectElement';
import Text, { TextType } from 'slack-block-msg-kit/CompositionObjects/Text'

const use = new UserSelectElement('actionId', 'placeholder');

use.addConfirmationDialogByParameters(
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
