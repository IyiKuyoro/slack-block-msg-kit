# DialogTextareaElement

The dialog [textarea element](https://api.slack.com/dialogs#attributes_textarea_elements) represents an input text area on the slack dialog box. The text area can take up to 3000 characters.

## Table of Content

- [DialogTextareaElement](#dialogtextareaelement)
  - [Table of Content](#table-of-content)
  - [Importing the DialogTextareaElement](#importing-the-dialogtextareaelement)
  - [Creating a Textarea field (Constructor)](#creating-a-textarea-field-constructor)
  - [Assign a Max Input Length (assignMaxLength)](#assign-a-max-input-length-assignmaxlength)
  - [Assign a Min Input Length (assignMinLength)](#assign-a-min-input-length-assignminlength)
  - [Assign a Hint to the Textarea (addHint)](#assign-a-hint-to-the-textarea-addhint)
  - [Add a Sub Type to the Field (addTextSubType)](#add-a-sub-type-to-the-field-addtextsubtype)
  - [Setting a Default Value (setDefaultValue)](#setting-a-default-value-setdefaultvalue)
  - [Possible errors](#possible-errors)

## Importing the DialogTextareaElement

```javascript
import { DialogTextareaElement } from 'slack-block-msg-kit';
```

or

```javascript
import DialogTextareaElement from 'slack-block-msg-kit/FeatureElements/DialogTextareaElement';
```

## Creating a Textarea field (Constructor)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| label | string | The fields label | 'Name' |
| name | string | The name that will be assigned to this field | 'user_name' |

```javascript
import DialogTextareaElement from 'slack-block-msg-kit/FeatureElements/DialogTextareaElement';

const text = new DialogTextareaElement('label', 'name');
```

## Assign a Max Input Length (assignMaxLength)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| maxLength | number | The maximum length of characters you wish this text input to have. | 10 |

You may wish to restrict the user to a maximum length of characters in the input field. If this is not set, slack will accept up to 3000 characters from the user.

```javascript
import DialogTextareaElement from 'slack-block-msg-kit/FeatureElements/DialogTextareaElement';

const text = new DialogTextareaElement('label', 'name');

text.assignMaxLength(10);
```

## Assign a Min Input Length (assignMinLength)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| minLength | number | The minimum length of characters. | 5 |

You may also wish to set a minium length of required characters to this element.

```javascript
import DialogTextareaElement from 'slack-block-msg-kit/FeatureElements/DialogTextareaElement';

const text = new DialogTextareaElement('label', 'name');

text.assignMinLength(10);
```

## Assign a Hint to the Textarea (addHint)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| hint | string | The text input hint | 'A little hint for the user.' |

Add a hint for the user.

```javascript
import DialogTextareaElement from 'slack-block-msg-kit/FeatureElements/DialogTextareaElement';

const text = new DialogTextareaElement('label', 'name');

text.addHint('A user hint.');
```

## Add a Sub Type to the Field (addTextSubType)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| type | [DialogTextSubTypes](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/FeatureElement/DialogTextElement.md#dialogtextsubtype) | The subtype of the text element | DialogTextSubTypes.email |

Sometimes, you may want the user to provide a certain kind of textarea in the input fields. perhaps an email. This is done by adding a subtype to the text element.

```javascript
import { DialogTextSubTypes } from 'slack-block-msg-kit/FeatureElements/DialogTextElement';
import DialogTextareaElement from 'slack-block-msg-kit/FeatureElements/DialogTextareaElement';

const text = new DialogTextareaElement('label', 'name');

text.addTextSubType(DialogTextSubTypes.email);
```

## Setting a Default Value (setDefaultValue)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| value | string | A default value that is preset when the input field is loaded. | 'John Doe' |

```javascript
import DialogTextareaElement from 'slack-block-msg-kit/FeatureElements/DialogTextareaElement';

const text = new DialogTextareaElement('label', 'name');

text.setDefaultValue('John Doe');
```

## Possible errors

| Error | Cause | Remedy |
| ----- | ----- | ------ |
| 'label should not be more than 48 characters.` | Adding a label that is more than 48 characters | Reduce the label size |
| 'name should not be more than 300 characters.` | Adding a name that is more than 300 characters | Reduce the name size |
| 'maxLength must be a positive integer less than 150 and greater than 1` | Providing an invalid max length. | Allowable range 0 - 3000 |
| 'minLength must be a positive integer less than 150 and greater than 1` | Providing an invalid minimum length. | Allowable range 1 - 30000 |
| 'hint should not be more than 150 characters.` | Adding a hint that is more than 150 characters | Reduce the hint size |
| 'value should not be more than 150 characters.` | Adding a default value that is more than 150 characters | Reduce the value size |
