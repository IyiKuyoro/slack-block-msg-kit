# DialogSelectOptionGroup

This element groups options together under a label in the select menu.

## Table of Content

- [DialogSelectOptionGroup](#dialogselectoptiongroup)
  - [Table of Content](#table-of-content)
  - [Importing the DialogSelectOptionGroup](#importing-the-dialogselectoptiongroup)
  - [Creating an Option Group (Constructor)](#creating-an-option-group-constructor)

## Importing the DialogSelectOptionGroup

```javascript
import DialogSelectOptionGroup from 'slack-block-msg-kit/FeatureElements/DialogSelectOptionGroup';
```

## Creating an Option Group (Constructor)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| label | string | The option group label | 'Group 1' |
| options | [DialogSelectOption](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/FeatureElements/DialogSelectOption.md)[] | An array of options to be added to this group | [new DialogSelectOption('label', 'value'), new DialogSelectOption('label1', 'value1')] |

| Error | Cause | Remedy |
| ----- | ----- | ------ |
| 'label should not be more than 75 characters.` | Adding a default label that is more than 75 characters | Reduce the label size |
| 'A group cannot have more than 100 options' | Adding a more than 100 options to one group | Reduce the number of options |
| 'Two options cannot share the same value in one group:...' | Two options should not have the same value | Use different values for different options |
