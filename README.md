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
      - [Section](#Section)
        - [Importing the Section Class](#Importing-the-Section-Class)
        - [Creating a Section](#Creating-a-Section)
        - [Adding a block_id (Section)](#Adding-a-blockid-Section)
        - [Adding fields (Section)](#Adding-fields-Section)
        - [Adding an accessory](#Adding-an-accessory)
      - [Image](#Image)
        - [Importing the Image class](#Importing-the-Image-class)
        - [Creating an Image (Constructor)](#Creating-an-Image-Constructor)
        - [Adding a block_id (Image)](#Adding-a-blockid-Image)
        - [Adding an Image Title (Image.addTitle)](#Adding-an-Image-Title-ImageaddTitle)
        - [Possible errors](#Possible-errors)
      - [Actions](#Actions)
        - [Importing the Actions Class](#Importing-the-Actions-Class)
        - [Creating an Actions Block (Constructor)](#Creating-an-Actions-Block-Constructor)
        - [Adding a block_id (Actions)](#Adding-a-blockid-Actions)
        - [Adding elements (Actions.addElements)](#Adding-elements-ActionsaddElements)
        - [Possible errors (Actions)](#Possible-errors-Actions)
    - [Block Elements](#Block-Elements)
      - [Button](#Button)
        - [Importing the Button Class](#Importing-the-Button-Class)
        - [Creating a button](#Creating-a-button)
        - [Adding a URL to the button](#Adding-a-URL-to-the-button)
        - [Adding a value](#Adding-a-value)
        - [Changing the style of the button](#Changing-the-style-of-the-button)
        - [Adding a confirmation dialog](#Adding-a-confirmation-dialog)
      - [Image Element](#Image-Element)
        - [Importing the image class](#Importing-the-image-class)
        - [Creating an Image Element](#Creating-an-Image-Element)
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

## Currently available classes

This library is still in active development and only the following classes are currently available.

- Block

> - **Section** > <https://api.slack.com/reference/messaging/blocks#section>
> - **Image** > <https://api.slack.com/reference/messaging/blocks#image>
> - **Actions** > <https://api.slack.com/reference/messaging/blocks#actions>

- Block Elements

> - **Image** > <https://api.slack.com/reference/messaging/block-elements#image>
> - **Button** > <https://api.slack.com/reference/messaging/block-elements#button>

- Composition Objects

> - **Text** > <https://api.slack.com/reference/messaging/composition-objects#text>
> - **Confirmation Dialog** > <https://api.slack.com/reference/messaging/composition-objects#confirm>

## How to Use

Typically you will have setup a slack bot you wish to use in sending messages on slack. This document does not contain any instructions on how to setup a slack bot or how to communicate with the slack API for that mater. The instructions detailed below are to help build the slack message layout blocks that are sent to slack for display.

Install the package as a dependency to get started. `npm i --save slack-block-msg-kit`

### Blocks

Slack messages are now built with individual layout blocks that comprise of a number of elements sent as a json object. [This](https://api.slack.com/reference/messaging/blocks) page contains all the currently available blocks from slack.

#### Section

A section usually represents a block of text in a message. It could include images, buttons, table like text among other elements.

##### Importing the Section Class

There are two ways of importing the Section class.

```javascript
import Section from 'slack-block-msg-kit/Blocks/Section';
```

or

```javascript
import { Section } from 'slack-block-msg-kit';
```

##### Creating a Section

To create a [Section](https://api.slack.com/reference/messaging/blocks#section), a [text object](#Text) is required. The text object is rendered as the message that is displayed on slack. Below is a short example on how to instantiate a simple section.

```javascript
import Section from 'slack-block-msg-kit/Blocks/Section';
import Text, { TextType } from 'slack-block-msg-kit/CompositionObjects/Text';

const section = new Section(
  new Text(TextType.plainText, 'This is a text object'),
);
```

##### Adding a block_id (Section)

Sections can also be made with a block_id. A block_id is returned to your application as part of the payload when an action is generated from that block on slack. You may want to use a block_id if you wish to uniquely identify the source of an action. It is not one of the compulsory section parameters. To create a section object with a block_id, we pass a string as the second parameter to the section constructor like below. Keep in mind that the block_id cannot be more than 255 characters. An error will be thrown otherwise.

```javascript
import Section from 'slack-block-msg-kit/Blocks/Section';
import Text, { TextType } from 'slack-block-msg-kit/CompositionObjects/Text';

const section = new Section(
  new Text(TextType.plainText, 'This is a text object'),
  'ID001',
);
```

##### Adding fields (Section)

A field is a array of [text objects](#Text) that are rendered side by side in a table like manner in a section. Below is a visual example of what fields are rendered as on slack.

![Fields Example Image](https://res.cloudinary.com/iyikuyoro/image/upload/v1562519506/slack-block-msg-kit/Screenshot_2019-07-07_at_6.11.12_PM.png)

To append the above fields to the section on slack, we use a simple method (**addField**). Below is an example that demonstrated that. Keep in mind that the maximum character length for each of this fields is 2000.

```javascript
import Section from 'slack-block-msg-kit/Blocks/Section';
import Text, { TextType } from 'slack-block-msg-kit/CompositionObjects/Text';

const section = new Section(
  new Text(TextType.plainText, 'This is are the names and ages of members of this channel. :smile:')
);

section
  .addField(new Text(TextType.mrkdwn, '*Name*'))
  .addField(new Text(TextType.mrkdwn, '*Age*'))
  .addField(new Text(TextType.mrkdwn, 'Opeoluwa Iyi-Kuyoro'))
  .addField(new Text(TextType.mrkdwn, '10'))
  .addField(new Text(TextType.mrkdwn, 'Oluwatominiyin Adebanjo'))
  .addField(new Text(TextType.mrkdwn, '12'));
```

##### Adding an accessory

Accessories which are typically [block elements](#Block-Elements) can be added to the section. Below is an example of a button accessory that has been added to a section object.

![Button accessory on section image](https://res.cloudinary.com/iyikuyoro/image/upload/v1562519902/slack-block-msg-kit/Screenshot_2019-07-07_at_6.18.07_PM.png)

To add the above button to the section object, we make use of a simple method (**addAccessory**).

```javascript
import Section from 'slack-block-msg-kit/Blocks/Section';
import Text, { TextType } from 'slack-block-msg-kit/CompositionObjects/Text';
import ButtonElement from 'slack-block-msg-kit/BlockElements/ButtonElement';

const section = new Section(
  new Text(TextType.plainText, 'Some changes have occurred since your last login')
);

section.addAccessory(
    new ButtonElement('View Changes', 'ACT001')
  );
```

#### Image

Images can be displayed in slack messages as well. [Here](https://api.slack.com/reference/messaging/blocks#image) is the slack documentation of the image block. This is quite different from [Image](#Image-Element).

##### Importing the Image class

```javascript
import { Image } from 'slack-block-msg-kit';
```

or

```javascript
import Image from 'slack-block-msg-kit/Blocks/Image';
```

##### Creating an Image (Constructor)

| Parameter | Type   | Description                                        | Example                   |
| --------- | ------ | -------------------------------------------------- | ------------------------- |
| imageUrl  | string | The url of the image to be loaded into the message | '<https://fakeimage.png>' |
| altText   | string | The alternative text of the image to be loaded     | 'fake image'              |
| blockId?  | string | The blockId of the image to be loaded              | 'BLK001'                  |

The image object is created by calling the constructors and passing two required parameters; imageUrl and the altText. The blockId parameter is optional Below is an example.

```javascript
import Image from 'slack-block-msg-kit/Blocks/Image';

const img = new Image('https://fakeimage.img', 'fake image');
```

##### Adding a block_id (Image)

Adding a block_id to the Image object is as simple as adding a third parameter to the Image constructor.

```javascript
import Image from 'slack-block-msg-kit/Blocks/Image';

const img = new Image('https://fakeimage.img', 'fake image', 'BLK001');
```

##### Adding an Image Title (Image.addTitle)

| Parameter | Type   | Description                        | Example       |
| --------- | ------ | ---------------------------------- | ------------- |
| title     | string | The title of the image to be added | 'Image title' |

To add a title to the image simply call the addTitle method passing in the image title you wish to use. Note however, that the title cannot be more than 2000 characters. Below is an example.

```javascript
import Image from 'slack-block-msg-kit/Blocks/Image';

const img = new Image('https://fakeimage.img', 'fake image');

img.addTitle('Image title');
```

##### Possible errors

| Error | Cause | Remedy |
| --------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------- |
| 'imageUrl should not be more than 3000 characters.' | This would happen if you use an image url that is more than 3000 characters long.      | Try to reduce the image url by using a tool like <https://bitly.com/> |
| 'altText should not be more than 2000 characters.'  | This would happen if you use an alternate text that is more than 3000 characters long. | Try to reduce the text length                                  |
| 'title should not be more than 2000 characters.'  | This would happen if you try to add a title that has more than 2000 characters.            | Try to reduce the length                                       |

#### Actions

Actions load up as a group of controls on slack. They are typically passed as an array of block elements with the exception of Image Elements. Below is an example of an actions block with two block elements.

![Actions example](https://res.cloudinary.com/iyikuyoro/image/upload/v1562771708/slack-block-msg-kit/Screenshot_2019-07-10_at_4.13.26_PM.png)

##### Importing the Actions Class

```javascript
import { Actions } from 'slack-block-msg-kit';
```

or

```javascript
import Actions from 'slack-block-msg-kit/Blocks/Actions';
```

##### Creating an Actions Block (Constructor)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| elements  | [BlockElement](#Block-Elements)[] | An array of block elements with the exception of ImageElement that is to be rendered in the actions. | [ new ButtonElement('button', 'ACT001') ] |
| _blockId_   | string? | A string that represents the id of this block element. | 'BLK001' |

The actions object can be created by passing an array of [BlockElement](#Block-Elements). Below is an example of the creation of the Actions block above.

```javascript
import Actions from 'slack-block-msg-kit/Blocks/Actions';
import ButtonElement, { ButtonStyle } from 'slack-block-msg-kit/BlockElements/ButtonElement';

const btn1 = new ButtonElement('None of these', 'BTN001');
const btn2 = new ButtonElement('Cancel', 'BTN002');
btn2.changeStyle(ButtonStyle.danger);

const act = new Actions([btn1, btn2]);
```

##### Adding a block_id (Actions)

There are two ways of adding a block_id to the Actions block;

- Constructor method
- Inherited method

**Constructor method**: Using the constructor described above, simply pass a second string parameter to the constructor.

```javascript
import Actions from 'slack-block-msg-kit/Blocks/Actions';
import ButtonElement, { ButtonStyle } from 'slack-block-msg-kit/BlockElements/ButtonElement';

const btn1 = new ButtonElement('None of these', 'BTN001');
const btn2 = new ButtonElement('Cancel', 'BTN002');
btn2.changeStyle(ButtonStyle.danger);

const act = new Actions([btn1, btn2], 'BLK001');
```

**Inherited method (addBlockId)**:

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| blockId   | string | A string that represents the id of this block element. | 'BLK001' |

We can add a block_id by calling the **addBlockId** method on the Actions object.

```javascript
import Actions from 'slack-block-msg-kit/Blocks/Actions';
import ButtonElement, { ButtonStyle } from 'slack-block-msg-kit/BlockElements/ButtonElement';

const btn1 = new ButtonElement('None of these', 'BTN001');
const btn2 = new ButtonElement('Cancel', 'BTN002');
btn2.changeStyle(ButtonStyle.danger);

const act = new Actions([btn1, btn2]);

act.addBlockId('BLK001');
```

##### Adding elements (Actions.addElements)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| elements  | [BlockElement](#Block-Elements)[] | An array of block elements with the exception of ImageElement that added to the elements to be rendered in the actions. | [ new ButtonElement('button', 'ACT001') ] |

To add to the list of elements that is to be rendered, simply call the **addElements** method. Keep in mind that you cannot have more than 5 elements on one actions object.

```javascript
import Actions from 'slack-block-msg-kit/Blocks/Actions';
import ButtonElement, { ButtonStyle } from 'slack-block-msg-kit/BlockElements/ButtonElement';

const btn1 = new ButtonElement('None of these', 'BTN001');
const btn2 = new ButtonElement('Cancel', 'BTN002');

btn2.changeStyle(ButtonStyle.danger);

const act = new Actions([]);

act.addElements([btn1, btn2]);
```

##### Possible errors (Actions)

| Error | Cause | Remedy |
| 'Image elements cannot be used in actions block' | Adding an image element to the actions. | Remove the image element from the array |
| 'Action Id '${id}' has a conflict in the list of elements' | Adding two block elements with the same action_id | Ensure that action_ids are unique |

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

##### Adding a confirmation dialog

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
