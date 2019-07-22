# Divider

A [divider](https://api.slack.com/reference/messaging/blocks#divider) is a fine line that separates two blocks on in a message.

## Table of Content

- [Divider](#Divider)
  - [Table of Content](#Table-of-Content)
  - [Importing the Image class](#Importing-the-Image-class)
  - [Creating a Divider (Constructor)](#Creating-a-Divider-Constructor)
  - [Possible errors](#Possible-errors)

## Importing the Image class

```javascript
import Divider from 'slack-block-msg-kit/Blocks/Divider';
```

or

```javascript
import { Divider } from 'slack-block-msg-kit';
```

## Creating a Divider (Constructor)

| Parameter | Type   | Description | Example |
| --------- | ------ | ----------- | ------- |
| _blockId_ | string? | A string that is return to your app in the payload to represent this block | 'BLK001' |

You can create a divider with our without a block id. Simply pass the constructor is only parameter to include a block id.

```javascript
import { Divider } from 'slack-block-msg-kit';

const div = new Divider();
```

## Possible errors

| Error | Cause | Remedy |
| ----- | ----- | ------ |
| 'blockId should not be more than 255 characters.' | Trying to add a block id that is beyond 255 characters | Reduce the block id length. |
