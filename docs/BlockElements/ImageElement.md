# Image Element

An [image element](https://api.slack.com/reference/messaging/block-elements#image) just like a button element is usually a component of a block like a section.

## Table of Content

- [Image Element](#Image-Element)
  - [Table of Content](#Table-of-Content)
  - [Importing the image class](#Importing-the-image-class)
  - [Creating an Image Element](#Creating-an-Image-Element)

## Importing the image class

The image class can be imported in one of two ways

```javascript
import ImageElement from 'slack-block-msg-kit/BlockElements/ImageElement';
```

or

```javascript
import { ImageElement } from 'slack-block-msg-kit';
```

## Creating an Image Element

This is probably one of the easiest objects you can create with this library. Simply call the constructor passing the two required parameters; the image URl and the alternate text.

```javascript
import { ImageElement } from 'slack-block-msg-kit';

const img = new ImageElement('https://fakeimage.img', 'fake image');
```
