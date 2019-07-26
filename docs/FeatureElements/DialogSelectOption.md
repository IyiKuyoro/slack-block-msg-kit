# DialogSelectOption

The dialog select option is used to create a single option in a select element on a dialog box.

## Table of Content

- [DialogSelectOption](#dialogselectoption)
  - [Table of Content](#table-of-content)
  - [Importing the DialogSelectOption](#importing-the-dialogselectoption)
  - [creating an Option (Constructor)](#creating-an-option-constructor)
  - [Possible errors](#possible-errors)

## Importing the DialogSelectOption

```javascript
import DialogSelectOption from 'slack-block-msg-kit/FeatureElements/DialogSelectOption';
```

## Creating an Option (Constructor)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| label | string | The option label | 'Option 1' |
| value | string | The the value of the option | 'value 1' |

```javascript
import DialogSelectOption from 'slack-block-msg-kit/FeatureElements/DialogSelectOption';

const opt = new DialogSelectOption('label', 'value');
```

## Possible errors

| Error | Cause | Remedy |
| ----- | ----- | ------ |
| 'label should not be more than 75 characters.` | Adding a default label that is more than 75 characters | Reduce the label size |
| 'value should not be more than 75 characters.` | Adding a default value that is more than 75 characters | Reduce the value size |
