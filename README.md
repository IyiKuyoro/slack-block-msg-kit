# Slack Block Message Kit

[![Maintainability](https://api.codeclimate.com/v1/badges/e9a5b2d6a3e658892de3/maintainability)](https://codeclimate.com/github/IyiKuyoro/slack-block-msg-kit/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/e9a5b2d6a3e658892de3/test_coverage)](https://codeclimate.com/github/IyiKuyoro/slack-block-msg-kit/test_coverage) [![npm version](https://badge.fury.io/js/slack-block-msg-kit.svg)](https://badge.fury.io/js/slack-block-msg-kit) [![CircleCI](https://circleci.com/gh/IyiKuyoro/slack-block-msg-kit.svg?style=svg)](https://circleci.com/gh/IyiKuyoro/slack-block-msg-kit)

This is a simple library that helps build slack block messages and all it's elements. It has robust validations to ensure mistakes are not made with the message formating.
**Still in development**

## Table of Content

- [Slack Block Message Kit](#Slack-Block-Message-Kit)
  - [Table of Content](#Table-of-Content)
  - [Currently available classes](#Currently-available-classes)
  - [How to Use](#How-to-Use)
    - [Blocks](#Blocks)
      - [Context](#Context)
        - [Importing the Context Class](#Importing-the-Context-Class)
        - [Creating a Context Block (Constructor)](#Creating-a-Context-Block-Constructor)
        - [Adding a block_id (Context)](#Adding-a-blockid-Context)
        - [Adding elements (Context.addElements)](#Adding-elements-ContextaddElements)
        - [Possible errors (Context)](#Possible-errors-Context)
    - [Block Elements](#Block-Elements)
      - [Button](#Button)
        - [Importing the Button Class](#Importing-the-Button-Class)
        - [Creating a button](#Creating-a-button)
        - [Adding a URL to the button](#Adding-a-URL-to-the-button)
        - [Adding a value](#Adding-a-value)
        - [Changing the style of the button](#Changing-the-style-of-the-button)
        - [Adding a confirmation dialog (Button)](#Adding-a-confirmation-dialog-Button)
      - [Image Element](#Image-Element)
        - [Importing the image class](#Importing-the-image-class)
        - [Creating an Image Element](#Creating-an-Image-Element)
      - [Static Select](#Static-Select)
        - [Importing the StaticSelect Class](#Importing-the-StaticSelect-Class)
        - [Creating a Static Select Object](#Creating-a-Static-Select-Object)
        - [Adding options (StaticSelect)](#Adding-options-StaticSelect)
        - [Adding a confirmation dialog (StaticSelectElement)](#Adding-a-confirmation-dialog-StaticSelectElement)
        - [Possible Errors (StaticSelect)](#Possible-Errors-StaticSelect)
      - [User Select](#User-Select)
        - [Importing the UserSelectElement Class](#Importing-the-UserSelectElement-Class)
        - [Creating a User Select Object](#Creating-a-User-Select-Object)
        - [Adding an initial_user (UserSelect)](#Adding-an-initialuser-UserSelect)
        - [Adding a confirmation dialog (UserSelectElement)](#Adding-a-confirmation-dialog-UserSelectElement)
        - [Possible Errors (UserSelect)](#Possible-Errors-UserSelect)
    - [Composition Objects](#Composition-Objects)
      - [Text](#Text)
        - [Importing the Text Class](#Importing-the-Text-Class)
        - [Creating a Text](#Creating-a-Text)
        - [Adding an Emoji](#Adding-an-Emoji)
        - [Render text verbatim](#Render-text-verbatim)
        - [Common Gatchas](#Common-Gatchas)
      - [TextType](#TextType)
        - [Importing the TextType enum](#Importing-the-TextType-enum)
      - [Confirmation Dialog](#Confirmation-Dialog)
        - [Importing a Confirmation Dialog](#Importing-a-Confirmation-Dialog)
        - [Creating a Confirmation Dialog](#Creating-a-Confirmation-Dialog)
      - [Option](#Option)
        - [Importing the Option Class](#Importing-the-Option-Class)
        - [Creating an Option](#Creating-an-Option)
        - [Adding a url (Option.addUrl)](#Adding-a-url-OptionaddUrl)
        - [Possible Errors (Option)](#Possible-Errors-Option)
      - [OptionGroup](#OptionGroup)
        - [Importing the OptionGroup Class](#Importing-the-OptionGroup-Class)
        - [Creating an OptionGroup](#Creating-an-OptionGroup)
        - [Possible Errors (OptionGroup)](#Possible-Errors-OptionGroup)

## Currently available classes

This library is still in active development and only the following classes are currently available.

- Block

> - **Section** > <https://api.slack.com/reference/messaging/blocks#section>
> - **Image** > <https://api.slack.com/reference/messaging/blocks#image>
> - **Actions** > <https://api.slack.com/reference/messaging/blocks#actions>
> - **Context** > <https://api.slack.com/reference/messaging/blocks#context>

- Block Elements

> - **Image** > <https://api.slack.com/reference/messaging/block-elements#image>
> - **Button** > <https://api.slack.com/reference/messaging/block-elements#button>
> - **StaticSelect** > <https://api.slack.com/reference/messaging/block-elements#static-select>
> - **UserSelect** > <https://api.slack.com/reference/messaging/block-elements#users-select>

- Composition Objects

> - **Text** > <https://api.slack.com/reference/messaging/composition-objects#text>
> - **Confirmation Dialog** > <https://api.slack.com/reference/messaging/composition-objects#confirm>
> - **Option** > <https://api.slack.com/reference/messaging/composition-objects#option>
> - **OptionGroup** > <https://api.slack.com/reference/messaging/composition-objects#option-group>

## How to Use

Typically you will have setup a slack bot you wish to use in sending messages on slack. This document does not contain any instructions on how to setup a slack bot or how to communicate with the slack API for that mater. The instructions detailed below are to help build the slack message layout blocks that are sent to slack for display.

Install the package as a dependency to get started. `npm i --save slack-block-msg-kit`

### Blocks

Slack messages are now built with individual layout blocks that comprise of a number of elements sent as a json object. [This](https://api.slack.com/reference/messaging/blocks) page contains all the currently available blocks from slack.

#### Context

This object helps display message context on slack. Below is an image of the message context as gotten from the slack documentation

![Context Image](https://res.cloudinary.com/iyikuyoro/image/upload/v1562783973/slack-block-msg-kit/Screenshot_2019-07-10_at_7.38.59_PM.png)

##### Importing the Context Class

```javascript
import { Context } from 'slack-block-msg-kit';
```

or

```javascript
import Context from 'slack-block-msg-kit/Blocks/Context';
```

##### Creating a Context Block (Constructor)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| elements  | ([ImageElement](#Image-Element) \| [Text](#Text))[] | An array of image elements and text that is rendered as the context | [ new ImageElement('<https://fakeimage.jpg>', 'fake image'), new Text(TextType.mrkdwn, 'some text') ] |
| _blockId_   | string? | A string that represents the id of this block element. | 'BLK001' |

A context object is created by passing an array of image elements or text objects as the first parameter of the constructor. Below is an example to create the context above.

```javascript
import { Context, ImageElement, Text, TextType } from 'slack-block-msg-kit';

const cnt = new Context([
  new ImageElement('https://image.freepik.com/free-photo/red-drawing-pin_1156-445.jpg', 'pin'),
  new Text(TextType.mrkdwn, 'Location: *Dogpatch*'),
]);
```

##### Adding a block_id (Context)

There are two ways of adding a block_id to the context block;

- Constructor method
- Inherited method

**Constructor method**: Using the constructor described above, simply pass a second string parameter to the constructor.

```javascript
import { Context, ImageElement, Text, TextType } from 'slack-block-msg-kit';

const cnt = new Context([
  new ImageElement('https://image.freepik.com/free-photo/red-drawing-pin_1156-445.jpg', 'pin'),
  new Text(TextType.mrkdwn, 'Location: *Dogpatch*'),
], 'BLK001');
```

**Inherited method (addBlockId)**:

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| blockId   | string | A string that represents the id of this block element. | 'BLK001' |

We can add a block_id by calling the **addBlockId** method on the context object.

```javascript
import { Context, ImageElement, Text, TextType } from 'slack-block-msg-kit';

const cnt = new Context([
  new ImageElement('https://image.freepik.com/free-photo/red-drawing-pin_1156-445.jpg', 'pin'),
  new Text(TextType.mrkdwn, 'Location: *Dogpatch*'),
]);

cnt.addBlockId('BLK001');
```

##### Adding elements (Context.addElements)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| elements  | ([ImageElement](#Image-Element) \| [Text](#Text))[] | An array of image elements and text that is rendered as the context | [ new ImageElement('<https://fakeimage.jpg>', 'fake image'), new Text(TextType.mrkdwn, 'some text') ] |

To add elements to the array, simply call the **addElements** method and pass the array of ImageElement and/or Text. Note however, that you cannot have more than 10 elements.

```javascript
import { Context, ImageElement, Text, TextType } from 'slack-block-msg-kit';

const cnt = new Context([
  new ImageElement('https://image.freepik.com/free-photo/red-drawing-pin_1156-445.jpg', 'pin'),
  new Text(TextType.mrkdwn, 'Location: *Dogpatch*'),
]);

cnt.addElements([
  new Text(TextType.mrkdwn, 'Some text'),
]);
```

##### Possible errors (Context)

| Error | Cause | Remedy |
| ----- | ----- | ------ |
| 'Context elements cannot be more than 10.' | Adding more than 10 elements | Reduce the number of elements to 10 |

### Block Elements

#### Button

Buttons are used as child components to trigger actions by the user from slack. They are usually assigned an ID so your application can know the exact action triggered.

##### Importing the Button Class

```javascript
import { ButtonElement, ButtonStyle} from 'slack-block-msg-kit';
```

or

```javascript
import ButtonElement, { ButtonStyle } from 'slack-block-msg-kit/BlockElements/ButtonElement';
```

##### Creating a button

To create a [Button](https://api.slack.com/reference/messaging/block-elements#button), we make use of the constructor. The first two parameters of the constructor are required being the text and the action id.

```javascript
import ButtonElement, { ButtonStyle } from 'slack-block-msg-kit/BlockElements/ButtonElement';

const button = new ButtonElement('Close', 'ACT001');
```

##### Adding a URL to the button

You may wish to load a page in the user's browser when the button is clicked. To do this, make use of the method (**addUrl**). Keep in mind that the url cannot be more than 3000 characters.

```javascript
import ButtonElement, { ButtonStyle } from 'slack-block-msg-kit/BlockElements/ButtonElement';

const button = new ButtonElement('Close', 'ACT001');

button.addUrl('https://fakeurl.com');
```

##### Adding a value

To add a value to the payload that is returned when the button is clicked, make use of (**addValue**). Keep in mind that the value cannot be more than 2000 characters.

```javascript
import ButtonElement, { ButtonStyle } from 'slack-block-msg-kit/BlockElements/ButtonElement';

const button = new ButtonElement('Close', 'ACT001');

button.addValue('Clicked ACT001');
```

##### Changing the style of the button

You may also wish to change the style of the button from the default to either primary or secondary. To do this, simply call the method (**changeStyle**), passing the required button style.

There are only two button styles and both can be accessed from the ButtonStyle Object which is imported along with the ButtonElement below.

```javascript
import ButtonElement, { ButtonStyle } from 'slack-block-msg-kit/BlockElements/ButtonElement';

const button = new ButtonElement('Close', 'ACT001');

button.changeStyle(ButtonStyle.danger);
```

##### Adding a confirmation dialog (Button)

You may wish to confirm the user action before executing with a [Confirmation Dialog](#Confirmation-Dialog). Simply make use of the (**addConfirmationDialogByParameters**) method for this.

```javascript
import { Text, TextType } from 'slack-block-msg-kit';
import ButtonElement, { ButtonStyle } from 'slack-block-msg-kit/BlockElements/ButtonElement';

const button = new ButtonElement('Close', 'ACT001');

button.addConfirmationDialogByParameters(
  'confirm',
  new Text(TextType.plainText, 'Are you sure?'),
  'Yes',
  'No',
);
```

#### Image Element

An image element just like a button element is usually a component of a block like a section.

##### Importing the image class

The image class can be imported in one of two ways

```javascript
import ImageElement from 'slack-block-msg-kit/BlockElements/ImageElement';
```

or

```javascript
import { ImageElement } from 'slack-block-msg-kit';
```

##### Creating an Image Element

This is probably one of the easiest objects you can create with this library. Simply call the constructor passing the two required parameters; the image URl and the alternate text.

```javascript
import { ImageElement } from 'slack-block-msg-kit';

const img = new ImageElement('https://fakeimage.img', 'fake image');
```

#### Static Select

Static select renders a select menu from a static list of options.

##### Importing the StaticSelect Class

```javascript
import { StaticSelectElement } from 'slack-block-msg-kit';
```

or

```javascript
import StaticSelectElement from 'slack-block-msg-kit/BlockElements/StaticSelectElement';
```

##### Creating a Static Select Object

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| actionId  | string | The action id of the select element | 'ACT001' |
| placeholder | string | The placeholder text for the select element | 'select an option' |

Creating a static select object is done by passing the two required parameters to the constructor. The constructed select object cannot be used right away. some options need to be added to it.

```javascript
import StaticSelectElement from 'slack-block-msg-kit/BlockElements/StaticSelectElement';

const sse = new StaticSelectElement('actionId', 'placeholder');
```

##### Adding options (StaticSelect)

There are two ways of adding options to a static select object.

- Adding an [options](#Option) array (**addOptions**)
- Adding an [optionGroups](#OptionGroup) array (**addOptionGroups**)

One StaticSelect object cannot have both options and option groups.

**addOptions**: To add options to the StaticSelectObject, all that is required is to call the addOptions method.

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| options   | [Option](#Option)[] | An array of options to be added to the menu | [ new Option('Option 1', 'one') ] |
| _initialOptionIndex_ | number? | The index of the option to be used as the selected option when the menu is loaded | 0 |

Below is an example

```javascript
import StaticSelectElement from 'slack-block-msg-kit/BlockElements/StaticSelectElement';
import Option from 'slack-block-msg-kit/CompositionObjects/Option';

const sse = new StaticSelectElement('actionId', 'placeholder');

sse.addOptions([
  new Option('Option 1', 'one'),
]);
```

**addOptionGroup**: To add option groups to the StaticSelect element, all that is required is to call the addOptionGroup method.

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| optionGroups   | [OptionGroup](#OptionGroup)[] | An array of option groups to be added to the menu | [ new OptionGroup('Group', [new Option('Option 1', 'one')])] |
| _initialOptionGroupIndex_ | number? | The index of the option group to be used in selecting options array which contains the option to be used as the selected option when the menu is loaded | 0 |
| _initialOptionIndex_ | number? | The index of the option to be used as the selected option when the menu is loaded | 0 |

Below is an example

```javascript
import StaticSelectElement from 'slack-block-msg-kit/BlockElements/StaticSelectElement';
import Option from 'slack-block-msg-kit/CompositionObjects/Option';
import OptionGroup from 'slack-block-msg-kit/CompositionObjects/OptionGroup';

const sse = new StaticSelectElement('actionId', 'placeholder');

sse.addOptionGroups(
  [ new OptionGroup('Group', [new Option('Option 1', 'one')])],
);
```

##### Adding a confirmation dialog (StaticSelectElement)

You may wish to confirm the user selection with a [Confirmation Dialog](#Confirmation-Dialog). Simply make use of the (**addConfirmationDialogByParameters**) method for this.

```javascript
import StaticSelectElement from 'slack-block-msg-kit/BlockElements/StaticSelectElement';
import Option from 'slack-block-msg-kit/CompositionObjects/Option';
import Text, { TextType } from 'slack-block-msg-kit/CompositionObjects/Text';

const sse = new StaticSelectElement('actionId', 'placeholder');

sse.addOptionGroups([
  new Option('Option 1', 'one'),
]).addConfirmationDialogByParameters(
  'confirm',
  new Text(TextType.plainText, 'Are you sure?'),
  'Yes',
  'No',
);
```

##### Possible Errors (StaticSelect)

| Error | Cause | Remedy |
| ----- | ----- | ------ |
| 'placeholder should not be more than 150 characters.' | Adding more than 150 characters in the placeholder | Reduce the placeholder size |
| 'actionId should not be more than 255 characters.' | Adding more than 255 characters in the actionId | Reduce the actionId size |
| 'StaticSelectElement cannot have both options and option_groups' | Adding options and optionGroups to the same StaticSelect element | Use on of the two |
| 'Cannot have more than 100 options' | Adding more than 100 options in the options array | Max options array size should be 100 |
| 'Cannot have more than 100 optionGroups' | Adding more than 100 options in the optionGroups array | Max optionGroups array size should be 100 |
| 'initialOptionGroupIndex is out of optionGroup range' | Selecting an optionGroupIndex that is beyond the optionGroups array ranch | Use an initialOptionGroupIndex in the optionGroups array range|
| 'initialOptionIndex is out of options range' | selecting an initialOptionIndex that is beyond the options array range | Use an initialOptionIndex that is in the option array range |

#### User Select

![User Select](https://res.cloudinary.com/iyikuyoro/image/upload/v1563182440/slack-block-msg-kit/Screenshot_2019-07-15_at_10.17.21_AM.png)

A user select menu is a select menu that displays all the members of a slack workspace for selection.

##### Importing the UserSelectElement Class

```javascript
import UserSelectElement from 'slack-block-msg-kit/BlockElements/UserSelectElement';
```

or

```javascript
import { UserSelectElement } from 'slack-block-msg-kit';
```

##### Creating a User Select Object

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| actionId  | string | The action id of the select element | 'ACT001' |
| placeholder | string | The placeholder text for the select element | 'select an option' |

Creating a user select object is done by passing the two required parameters to the constructor.

```javascript
import UserSelectElement from 'slack-block-msg-kit/BlockElements/UserSelectElement';

const use = new UserSelectElement('actionId', 'placeholder');
```

##### Adding an initial_user (UserSelect)

An initial user can be selected by default when the select menu is loaded on slack. It is one of the optional parameters that can be added to the user select object. To add an initial_user, simply make use of the **addInitialUser** method.

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| initialUserId  | string | The initial user's slack id | 'CT001122' |

```javascript
import UserSelectElement from 'slack-block-msg-kit/BlockElements/UserSelectElement';

const use = new UserSelectElement('actionId', 'placeholder');

use.addInitialUser('CT001122');
```

##### Adding a confirmation dialog (UserSelectElement)

You may wish to confirm the user selection with a [Confirmation Dialog](#Confirmation-Dialog). Simply make use of the (**addConfirmationDialogByParameters**) method for this.

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

##### Possible Errors (UserSelect)

| Error | Cause | Remedy |
| ----- | ----- | ------ |
| 'placeholder should not be more than 150 characters.' | Adding more than 150 characters in the placeholder | Reduce the placeholder size |
| 'actionId should not be more than 255 characters.' | Adding more than 255 characters in the actionId | Reduce the actionId size |

### Composition Objects

Most blocks require a composition object as a child object. One of the very commonly required composition objects is the [Text Object](#Text).

#### Text

A Text object must have a ([TextType](#TextType)). A text object cannot be sent to slack as a stand alone object. It is usually a composition of another object, perhaps a [section](#Section) or a [Button](#Button).

##### Importing the Text Class

There are two ways of importing the Text class.

```javascript
import Text, { TextType } from 'slack-block-msg-kit/CompositionObjects/Text';
```

or

```javascript
import { Text, TextType } from 'slack-block-msg-kit';
```

##### Creating a Text

To create a [Text](https://api.slack.com/reference/messaging/composition-objects#text), we must choose the way the text is to be rendered which is typically denoted as the [TextType](#TextType). Below is an example on how to create an instance of the text object.

```javascript
import Text, { TextType } from 'slack-block-msg-kit/CompositionObjects/Text';

const text = new Text(TextType.plainText, 'There is a simple plain text.');
```

Perhaps you want your text to be read in the markdown format. No worries, simply change the text type to mrkdwn.

```javascript
import Text, { TextType } from 'slack-block-msg-kit/CompositionObjects/Text';

const text = new Text(TextType.mrkdwn, '*This text would be rendered in bold.*');
```

##### Adding an Emoji

You can create text objects with emojis. There are two ways to enable the addition of emojis to your text.

The first requires you adding a third boolean parameter to the constructor. Keep in mind however, that you cannot use emojis if the text type is mrkdwn.

```javascript
import Text, { TextType } from 'slack-block-msg-kit/CompositionObjects/Text';

const text = new Text(TextType.plain_text, '*This text would be rendered in bold.*', true);
```

The second way of adding emojis via a method (**allowEmoji**).

```javascript
import Text, { TextType } from 'slack-block-msg-kit/CompositionObjects/Text';

const text = new Text(TextType.plainText, 'There is a simple plain text.');

text.allowEmoji();
```

##### Render text verbatim

You can also render the text as is on slack without converting special characters and links. There are two ways of doing this.

The first; pass a fourth boolean parameter with represents verbatim. Keep in mind however, that verbatim cannot be used with plain_text, and as such cannot be paired with emoji.

```javascript
import Text, { TextType } from 'slack-block-msg-kit/CompositionObjects/Text';

const text = new Text(TextType.mrkdwn, '*This text would be rendered in bold.*', false, true);
```

The second way is by calling a method (**displayVerbatim**). We recommend you use this method.

```javascript
import Text, { TextType } from 'slack-block-msg-kit/CompositionObjects/Text';

const text = new Text(TextType.mrkdwn, 'There is a simple plain text.');

text.displayVerbatim();
```

##### Common Gatchas

- You cannot have emojis in a markdown type.
- You cannot render plain_text verbatim.

#### TextType

There are two available text types:

- markdown - (mrkdwn)
- plain text - (plainText)

##### Importing the TextType enum

There are two ways of importing the TextType class.

```javascript
import { TextType } from 'slack-block-msg-kit/CompositionObjects/Text';
```

or

```javascript
import { TextType } from 'slack-block-msg-kit';
```

#### Confirmation Dialog

A confirmation dialog can be displayed after a button is clicked as a way of validating the action that is to be done. Typically, you will make use of a confirmation dialog for a destructive action. Below is a visual example of a confirmation dialog on screen. Click the image to see a short video.

[![Confirmation dialog video](https://res.cloudinary.com/iyikuyoro/image/upload/v1562574797/slack-block-msg-kit/Screenshot_2019-07-08_at_9.32.01_AM.png)](https://youtu.be/LMkzxV7Hltc)

##### Importing a Confirmation Dialog

```javascript
import { ConfirmationDialog } from 'slack-block-msg-kit';
```

or

```javascript
import ConfirmationDialog from 'slack-block-msg-kit/CompositionObjects/ConfirmationDialog';
```

##### Creating a Confirmation Dialog

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

#### Option

An option is a selection from a list. It is usually used with select elements for drop down menus.

##### Importing the Option Class

```javascript
import { Option } from 'slack-block-msg-kit';
```

or

```javascript
import Option from 'slack-block-msg-kit/CompositionObjects/Option';
```

##### Creating an Option

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| text      | string | The text rendered as a plain text as the option's label on slack | 'Option 1' |
| value     | string | The value returned to your application as part of the payload when this option is selected | 'one' |

Create an option by passing the two required parameters to the constructor. Both parameters are strings that cannot be more than 75 characters long.

```javascript
import Option from 'slack-block-msg-kit/CompositionObjects/Option';

const opt = new Option('Option 1', 'one');
```

##### Adding a url (Option.addUrl)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| url       | string | The url to be loaded in the user's browser | '<https://fakeurl.com>' |

A url that can be loaded in the user's browser is one of the optional properties that can be added to the Option object. To add a url, simply call the **addUrl** method. The url passed cannot be more than 3000 characters.

```javascript
import Option from 'slack-block-msg-kit/CompositionObjects/Option';

const opt = new Option('Option 1', 'one');
opt.addUrl('https://fakeurl.com');
```

##### Possible Errors (Option)

| Error | Cause | Remedy |
| ----- | ----- | ------ |
| 'text cannot be more than 75 characters' | Adding more than 75 characters in the text | Reduce the text size |
| 'value cannot be more than 75 characters' | Adding more than 75 characters in the value | Reduce the value size |
| 'url cannot be more than 3000 characters' | Adding a url that is more than 3000 characters | Reduce the url length with a tool like <https://bitly.com/> |

#### OptionGroup

An option group is a way of collection options together in a select menu.

##### Importing the OptionGroup Class

```javascript
import { OptionGroup } from 'slack-block-msg-kit';
```

or

```javascript
import OptionGroup from 'slack-block-msg-kit/CompositionObjects/OptionGroup';
```

##### Creating an OptionGroup

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| label     | string | The babel of this option group | 'Group one' |
| options   | [Option](#Option)[] | An array of options to be added to the group. | [ new Option('option 1', 'one') ] |

Creating an option group object is as simple as calling the constructor and passing the required parameters.

```javascript
import Option from 'slack-block-msg-kit/CompositionObjects/Option';
import OptionGroup from 'slack-block-msg-kit/CompositionObjects/OptionGroup';

const opts = new OptionGroup(
  'options',
  [new Option('option', 'option')]
);
```

##### Possible Errors (OptionGroup)

| Error | Cause | Remedy |
| ----- | ----- | ------ |
| 'label cannot be more than 75 characters' | Adding more than 75 characters in the label | Reduce the label size |
| 'Cannot have more than 100 options in a group' | Adding more than 100 options in one group | Reduce the number of options in the array. |
| 'Two options cannot share the same value in one group: 'value'' | Having two options with the same value in one group | Use unique values for each option. |
