# External Select

[External select](https://api.slack.com/reference/messaging/block-elements#external-select) renders a select menu from an external list of options.

## Table of Content

- [External Select](#External-Select)
  - [Table of Content](#Table-of-Content)
  - [Importing the ExternalSelectElement Class](#Importing-the-ExternalSelectElement-Class)
  - [Creating an External Select Element Object (Constructor)](#Creating-an-External-Select-Element-Object-Constructor)
  - [Adding an initial option (addInitialOption)](#Adding-an-initial-option-addInitialOption)
  - [Adding a Minimum Query Length (addMinQueryLength())](#Adding-a-Minimum-Query-Length-addMinQueryLength)
  - [Adding a confirmation dialog (addConfirmationDialogByParameters())](#Adding-a-confirmation-dialog-addConfirmationDialogByParameters)
  - [Possible Errors](#Possible-Errors)

## Importing the ExternalSelectElement Class

```javascript
import { ExternalSelectElement } from 'slack-block-msg-kit';
```

or

```javascript
import ExternalSelectElement from 'slack-block-msg-kit/BlockElements/ExternalSelectElement';
```

## Creating an External Select Element Object (Constructor)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| actionId  | string | The action id of the select element | 'ACT001' |
| placeholder | string | The placeholder text for the select element | 'select an option' |

```javascript
import ExternalSelectElement from 'slack-block-msg-kit/BlockElements/ExternalSelectElement';

const sel = new ExternalSelectElement('ACT001', 'select an option');
```

## Adding an initial option (addInitialOption)

An initial option can be selected by default when the select menu is loaded. It is one of the optional parameters that can be added to the external select object. To add the initial_option property, simply make use of the **addInitialOption** method.

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| initialOption | Option | 'The initial option to be selected when the menu is loaded' | new Option('Option 1', 'value 1') |

```javascript
import ExternalSelectElement from 'slack-block-msg-kit/BlockElements/ExternalSelectElement';
import Option from 'slack-block-msg-kit/CompositionObjects/Option';

const sel = new ExternalSelectElement('ACT001', 'select an option');

sel.addInitialOption(new Option('Option 1', 'value 1'));
```

## Adding a Minimum Query Length (addMinQueryLength())

The min_query_length can be used to limit the amount of request made to your server to load the options when the typeahead field is used.

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| minQueryLength | number | Fewest number of typed characters required to initiate a request | 4 |

```javascript
import ExternalSelectElement from 'slack-block-msg-kit/BlockElements/ExternalSelectElement';

const sel = new ExternalSelectElement('ACT001', 'select an option');

sel.addMinQueryLength(3);
```

## Adding a confirmation dialog (addConfirmationDialogByParameters())

You may wish to confirm the user selection with a [Confirmation Dialog](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/CompositionObjects/ConfirmationDialog.md). Simply make use of the (**addConfirmationDialogByParameters**) method for this.

```javascript
import ExternalSelectElement from 'slack-block-msg-kit/BlockElements/ExternalSelectElement';
import { Text, TextType } from 'slack-block-msg-kit';

const sel = new ExternalSelectElement('ACT001', 'select an option');

sel.addConfirmationDialogByParameters(
  'Dialog title',
  new Text(TextType.plainText, 'Dialog message'),
  'Yes',
  'No',
);
```

## Possible Errors

| Error | Cause | Remedy |
| ----- | ----- | ------ |
| 'placeholder should not be more than 150 characters.' | Adding more than 150 characters in the placeholder | Reduce the placeholder size |
| 'actionId should not be more than 255 characters.' | Adding more than 255 characters in the actionId | Reduce the actionId size |
