# Option

An [option](https://api.slack.com/reference/messaging/composition-objects#option) is a selection from a list. It is usually used with select elements for drop down menus.

## Table of Content

- [Option](#Option)
  - [Table of Content](#Table-of-Content)
  - [Importing the Option Class](#Importing-the-Option-Class)
  - [Creating an Option (Constructor)](#Creating-an-Option-Constructor)
  - [Adding a url (addUrl())](#Adding-a-url-addUrl)
  - [Possible Errors](#Possible-Errors)

## Importing the Option Class

```javascript
import { Option } from 'slack-block-msg-kit';
```

or

```javascript
import Option from 'slack-block-msg-kit/CompositionObjects/Option';
```

## Creating an Option (Constructor)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| text      | string | The text rendered as a plain text as the option's label on slack | 'Option 1' |
| value     | string | The value returned to your application as part of the payload when this option is selected | 'one' |

Create an option by passing the two required parameters to the constructor. Both parameters are strings that cannot be more than 75 characters long.

```javascript
import Option from 'slack-block-msg-kit/CompositionObjects/Option';

const opt = new Option('Option 1', 'one');
```

## Adding a url (addUrl())

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| url       | string | The url to be loaded in the user's browser | '<https://fakeurl.com>' |

A url that can be loaded in the user's browser is one of the optional properties that can be added to the Option object. To add a url, simply call the **addUrl** method. The url passed cannot be more than 3000 characters.

```javascript
import Option from 'slack-block-msg-kit/CompositionObjects/Option';

const opt = new Option('Option 1', 'one');
opt.addUrl('https://fakeurl.com');
```

## Possible Errors

| Error | Cause | Remedy |
| ----- | ----- | ------ |
| 'text cannot be more than 75 characters' | Adding more than 75 characters in the text | Reduce the text size |
| 'value cannot be more than 75 characters' | Adding more than 75 characters in the value | Reduce the value size |
| 'url cannot be more than 3000 characters' | Adding a url that is more than 3000 characters | Reduce the url length with a tool like <https://bitly.com/> |
