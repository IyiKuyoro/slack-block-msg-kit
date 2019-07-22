# Confirmation Dialog

A [confirmation dialog](https://api.slack.com/reference/messaging/composition-objects#confirm) can be displayed after a button is clicked as a way of validating the action that is to be done. Typically, you will make use of a confirmation dialog for a destructive action. Below is a visual example of a confirmation dialog on screen. Click the image to see a short video.

[![Confirmation dialog video](https://res.cloudinary.com/iyikuyoro/image/upload/v1562574797/slack-block-msg-kit/Screenshot_2019-07-08_at_9.32.01_AM.png)](https://youtu.be/LMkzxV7Hltc)

## Table of Content

- [Confirmation Dialog](#Confirmation-Dialog)
  - [Table of Content](#Table-of-Content)
  - [Importing a Confirmation Dialog](#Importing-a-Confirmation-Dialog)
  - [Creating a Confirmation Dialog](#Creating-a-Confirmation-Dialog)

## Importing a Confirmation Dialog

```javascript
import { ConfirmationDialog } from 'slack-block-msg-kit';
```

or

```javascript
import ConfirmationDialog from 'slack-block-msg-kit/CompositionObjects/ConfirmationDialog';
```

## Creating a Confirmation Dialog

To create a [Confirmation Dialog](https://api.slack.com/reference/messaging/composition-objects#confirm), make use of the constructor. Let's see how to create the dialog displayed in the video above.

```javascript
import { ConfirmationDialog, Text, TextType } from 'slack-block-msg-kit';

const dialog = new ConfirmationDialog(
  'Delete',
  new Text(TextType.plainText, 'Are you sure you want to delete the mail?'),
  'Yes!',
  'No, I change my mind.',
);
```
