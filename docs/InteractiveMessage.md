# Interactive Message

[Interactive messages](https://api.slack.com/reference/messaging/payload) are the objects that old all the payload used to render a message on the slack user interface.

## Table of Content

- [Interactive Message](#Interactive-Message)
  - [Table of Content](#Table-of-Content)
  - [Importing the InteractiveMessage](#Importing-the-InteractiveMessage)
  - [Creating an Interactive Message Object (Constructor)](#Creating-an-Interactive-Message-Object-Constructor)
  - [Adding a block (addBlock())](#Adding-a-block-addBlock)
  - [Adding message to a thread (addAddThreadTimeStamp())](#Adding-message-to-a-thread-addAddThreadTimeStamp)

## Importing the InteractiveMessage

```javascript
import { InteractiveMessage } from 'slack-block-msg-kit';
```

or

```javascript
import InteractiveMessage from 'slack-block-msg-kit/InteractiveMessage';
```

## Creating an Interactive Message Object (Constructor)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| text | string | This is the text that is displayed in the message if no blocks are added. It is also used as the fallback message | 'A sample message' |
| _isMrkdwn_ | boolean? | Should the text be rendered as markdown or not. The default is true. | false |
| _blocks_ | [Block](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/Blocks/Blocks.md)[]? | Blocks that are to be added to the message |

There is only one required parameter when creating an interactive message and that is the text parameter. Slack may not require a text if blocks are added but we consider it necessary to be used as fall back text.

```javascript
import InteractiveMessage from 'slack-block-msg-kit/InteractiveMessage';

const msg = new InteractiveMessage('Some sample text!');
```

The text is rendered in markdown format by default. this can be changed by passing false as the second parameter.

```javascript
import InteractiveMessage from 'slack-block-msg-kit/InteractiveMessage';

const msg = new InteractiveMessage('Some sample text!', false);
```

You may also wish to add the blocks to the message right away.

```javascript
import InteractiveMessage from 'slack-block-msg-kit/InteractiveMessage';
import { Section, Text, TextType } from 'slack-block-msg-kit';

const msg = new InteractiveMessage(
  'Some sample text!',
  false,
  [
    new Section(new Text(TextType.plainText, 'The section Text'))
  ]
);
```

## Adding a block (addBlock())

To add a block element, all that is required is to call the **addBlock** method passing the new element to be added.

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| block | Block | A new block element to be added | new Section(new Text(TextType.plainText, 'The section Text')) |

```javascript
import InteractiveMessage from 'slack-block-msg-kit/InteractiveMessage';
import { Section, Text, TextType } from 'slack-block-msg-kit';

const msg = new InteractiveMessage(
  'Some sample text!',
  false,
);

msg.addBlock(new Section(new Text(TextType.plainText, 'The section Text')));
```

## Adding message to a thread (addAddThreadTimeStamp())

To add the message to a thread, simply add the parent message's time stamp with **addAddThreadTimeStamp**.

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| parentMessageTimestamp | string | '12345678' |

```javascript
import InteractiveMessage from 'slack-block-msg-kit/InteractiveMessage';

const msg = new InteractiveMessage(
  'Some sample text!',
  false,
);

msg.addAddThreadTimeStamp('032671823');
```
