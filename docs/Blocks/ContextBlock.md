# Context

This object helps display message context on slack. Below is an image of the message context as gotten from the slack documentation

![Context Image](https://res.cloudinary.com/iyikuyoro/image/upload/v1562783973/slack-block-msg-kit/Screenshot_2019-07-10_at_7.38.59_PM.png)

## Importing the Context Class

```javascript
import { Context } from 'slack-block-msg-kit';
```

or

```javascript
import Context from 'slack-block-msg-kit/Blocks/Context';
```

## Creating a Context Block (Constructor)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| elements  | ([ImageElement](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/BlockElements/ImageElement.md) \| [Text](#Text))[] | An array of image elements and text that is rendered as the context | [ new ImageElement('<https://fakeimage.jpg>', 'fake image'), new Text(TextType.mrkdwn, 'some text') ] |
| _blockId_   | string? | A string that represents the id of this block element. | 'BLK001' |

A context object is created by passing an array of image elements or text objects as the first parameter of the constructor. Below is an example to create the context above.

```javascript
import { Context, ImageElement, Text, TextType } from 'slack-block-msg-kit';

const cnt = new Context([
  new ImageElement('https://image.freepik.com/free-photo/red-drawing-pin_1156-445.jpg', 'pin'),
  new Text(TextType.mrkdwn, 'Location: *Dogpatch*'),
]);
```

## Adding a block_id

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

**Inherited method (addBlockId())**:

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

## Adding elements (addElements())

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| elements  | ([ImageElement](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/BlockElements/ImageElement.md) \| [Text](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/BlockElements/Text.md))[] | An array of image elements and text that is rendered as the context | [ new ImageElement('<https://fakeimage.jpg>', 'fake image'), new Text(TextType.mrkdwn, 'some text') ] |

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

## Possible errors

| Error | Cause | Remedy |
| ----- | ----- | ------ |
| 'Context elements cannot be more than 10.' | Adding more than 10 elements | Reduce the number of elements to 10 |
