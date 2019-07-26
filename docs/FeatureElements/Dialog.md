# Dialog

A [slack dialog](https://api.slack.com/dialogs) is a pop up modal that can be used to conveniently collect some information from your user on slack.

## Table of Content

- [Dialog](#dialog)
  - [Table of Content](#table-of-content)
  - [Importing the Dialog Class](#importing-the-dialog-class)
  - [Creating a Dialog (Constructor)](#creating-a-dialog-constructor)
  - [Adding a state (addState)](#adding-a-state-addstate)
  - [Change the Submit Button Text (changeSubmitLabel)](#change-the-submit-button-text-changesubmitlabel)
  - [Notify your app if the dialog is canceled (notifyOnCancel)](#notify-your-app-if-the-dialog-is-canceled-notifyoncancel)
  - [Possible errors](#possible-errors)
  - [Dialog Elements](#dialog-elements)

## Importing the Dialog Class

```javascript
import { Dialog } from 'slack-block-msg-kit';
```

or

```javascript
import Dialog from 'slack-block-msg-kit/FeatureElements/Dialog';
```

## Creating a Dialog (Constructor)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| title | string | The title of the dialog | 'User Info' |
| callbackId | string | The callback id of the dialog | 'CLB001' |
| elements | [DialogElements](#dialog-elements)[] | An array of elements to be added to the dialog | new DialogSelectElement('select label', 'select name') |

```javascript
import Dialog from 'slack-block-msg-kit/FeatureElements/Dialog';

import DialogSelectOption from 'slack-block-msg-kit/FeatureElements/DialogSelectOption';
import DialogSelectOptionGroup from 'slack-block-msg-kit/FeatureElements/DialogSelectOptionGroup';
import DialogSelectElement from 'slack-block-msg-kit/FeatureElements/DialogSelectElement';

const select = new DialogSelectElement('select label', 'select name');

select.addOptionsGroup([
  new DialogSelectOptionGroup('label', [
    new DialogSelectOption('label', 'value'),
    new DialogSelectOption('label1', 'value1'),
  ])
]);

const dialog = new Dialog('Dialog Title', 'CLB001', [
  select
]);
```

## Adding a state (addState)

States are a way of passing some data to your app when an action is triggered on slack. Don't use this for secret information, perhaps you should explore the callback id as an option.

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| state | string | The state that you wish to preserve | '{keep: true}' |

```javascript
...

const dialog = new Dialog('Dialog Title', 'CLB001', [
  select
]);

dialog.addState('{keep: true}');
```

## Change the Submit Button Text (changeSubmitLabel)

The dialog submit button will have a default text of "submit". You can change this to what ever you wish.

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| submitLabel | string | The submit button new text | 'Save' |

```javascript
...

const dialog = new Dialog('Dialog Title', 'CLB001', [
  select
]);

dialog.changeSubmitLabel('Save');
```

## Notify your app if the dialog is canceled (notifyOnCancel)

You may wish to have your app notified if the dialog is canceled by the user. _No Parameters_

```javascript
...

const dialog = new Dialog('Dialog Title', 'CLB001', [
  select
]);

dialog.notifyOnCancel();
```

## Possible errors

| Error | Cause | Remedy |
| ----- | ----- | ------ |
| 'title should not be more than 24 characters.' | Adding a default title that is more than 24 characters | Reduce the title size |
| 'callbackId should not be more than 255 characters.' | Adding a default callbackId that is more than 255 characters | Reduce the callbackId size |
| 'submitLabel should not be more than 48 characters.' | Adding a default submitLabel that is more than 48 characters | Reduce the submitLabel size |
| 'Cannot have more than 10 elements in a dialog' | Trying to add more than 10 elements to the dialog | Reduce the number of dialog elements |
| 'You need to add at least one element to the dialog' | Trying to create a dialog with zero element | Add at least one element to your dialog |

## Dialog Elements

Dialog elements are elements that are used in creating input fields on a slack dialog box. There are only three dialog elements. Find the documentations in the link below.

- **[DialogTextElement](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/FeatureElements/DialogTextElement.md)**
- **[DialogTextareaElement](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/FeatureElements/DialogTextareaElement.md)**
- **[DialogSelectElement](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/FeatureElements/DialogSelectElement.md)**
