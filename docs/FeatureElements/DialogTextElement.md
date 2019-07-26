# DialogTextElement

The dialog [text element](https://api.slack.com/dialogs#text_elements) represents the text input fields in a slack dialog box. It is used to create an input field of not more than 150 characters in a dialog.

## Table of Content

- [DialogTextElement](#dialogtextelement)
  - [Table of Content](#table-of-content)
  - [Importing the DialogTextElement](#importing-the-dialogtextelement)
  - [Creating a Text field (Constructor)](#creating-a-text-field-constructor)
  - [Assign a Max Input Length (assignMaxLength)](#assign-a-max-input-length-assignmaxlength)
  - [Assign a Min Input Length (assignMinLength)](#assign-a-min-input-length-assignminlength)
  - [Assign a Hint to the Text (addHint)](#assign-a-hint-to-the-text-addhint)
  - [Add a Sub Type to the Field (addTextSubType)](#add-a-sub-type-to-the-field-addtextsubtype)
  - [Setting a Default Value (setDefaultValue)](#setting-a-default-value-setdefaultvalue)
  - [Possible errors](#possible-errors)
  - [DialogTextSubType](#dialogtextsubtype)
    - [Supported Subtypes](#supported-subtypes)

## Importing the DialogTextElement

```javascript
import DialogTextElement from 'slack-block-msg-kit/FeatureElements/DialogTextElement';
```

or

```javascript
import { DialogTextElement } from 'slack-block-msg-kit';
```

## Creating a Text field (Constructor)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| label | string | The fields label | 'Name' |
| name | string | The name that will be assigned to this field | 'user_name' |

Simply pass the text label and name to the DialogTextElement constructor to create a text element

```javascript
import { DialogTextElement } from 'slack-block-msg-kit';

const text = new DialogTextElement('label', 'name');
```

## Assign a Max Input Length (assignMaxLength)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| maxLength | number | The maximum length of characters you wish this text input to have. | 10 |

You may wish to restrict the user to a maximum length of characters in the input field. If this is not set, slack will accept up to 150 characters from the user.

```javascript
import DialogTextElement from 'slack-block-msg-kit/FeatureElements/DialogTextElement';

const text = new DialogTextElement('label', 'name');

text.assignMaxLength(10);
```

## Assign a Min Input Length (assignMinLength)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| minLength | number | The minimum length of characters. | 5 |

You may also wish to set a minium length of required characters to this element.

```javascript
import DialogTextElement from 'slack-block-msg-kit/FeatureElements/DialogTextElement';

const text = new DialogTextElement('label', 'name');

text.assignMinLength(10);
```

## Assign a Hint to the Text (addHint)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| hint | string | The text input hint | 'A little hint for the user.' |

Add a hint for the user.

```javascript
import DialogTextElement from 'slack-block-msg-kit/FeatureElements/DialogTextElement';

const text = new DialogTextElement('label', 'name');

text.addHint('A user hint.');
```

## Add a Sub Type to the Field (addTextSubType)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| type | [DialogTextSubTypes](#dialogtextsubtype) | The subtype of the text element | DialogTextSubTypes.email |

Sometimes, you may want the user to provide a certain kind of text in the input fields. perhaps an email. This is done by adding a subtype to the text element.

```javascript
import DialogTextElement, { DialogTextSubTypes } from 'slack-block-msg-kit/FeatureElements/DialogTextElement';

const text = new DialogTextElement('label', 'name');

text.addTextSubType(DialogTextSubTypes.email);
```

## Setting a Default Value (setDefaultValue)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| value | string | A default value that is preset when the input field is loaded. | 'John Doe' |

```javascript
import DialogTextElement from 'slack-block-msg-kit/FeatureElements/DialogTextElement';

const text = new DialogTextElement('label', 'name');

text.setDefaultValue('John Doe');
```

## Possible errors

| Error | Cause | Remedy |
| ----- | ----- | ------ |
| 'label should not be more than 48 characters.` | Adding a label that is more than 48 characters | Reduce the label size |
| 'name should not be more than 300 characters.` | Adding a name that is more than 300 characters | Reduce the name size |
| 'maxLength must be a positive integer less than 150 and greater than 1` | Providing an invalid max length. | Allowable range 0 - 150 |
| 'minLength must be a positive integer less than 150 and greater than 1` | Providing an invalid minimum length. | Allowable range 1 - 150 |
| 'hint should not be more than 150 characters.` | Adding a hint that is more than 150 characters | Reduce the hint size |
| 'value should not be more than 150 characters.` | Adding a default value that is more than 150 characters | Reduce the value size |

## DialogTextSubType

There is a list of supported subtypes that a text field could have.

```javascript
import { DialogTextSubTypes } from 'slack-block-msg-kit/FeatureElements/DialogTextElement';
```

### Supported Subtypes

- email
- number
- tel
- url

Here instructions on changing the subtype for [Text](#add-a-sub-type-to-the-field-addtextsubtype) and [Textarea](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/FeatureElements/DialogTextareaElement.md#add-a-sub-type-to-the-field-addtextsubtype)
