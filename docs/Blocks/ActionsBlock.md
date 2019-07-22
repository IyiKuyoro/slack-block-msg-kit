# Actions

Actions load up as a group of controls on slack. They are typically passed as an array of block elements with the exception of Image Elements. Below is an example of an actions block with two block elements.

![Actions example](https://res.cloudinary.com/iyikuyoro/image/upload/v1562771708/slack-block-msg-kit/Screenshot_2019-07-10_at_4.13.26_PM.png)

## Importing the Actions Class

```javascript
import { Actions } from 'slack-block-msg-kit';
```

or

```javascript
import Actions from 'slack-block-msg-kit/Blocks/Actions';
```

## Creating an Actions Block (constructor)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| elements  | [BlockElement](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/BlockElements/BlockElements.md)[] | An array of block elements with the exception of ImageElement that is to be rendered in the actions. | [ new ButtonElement('button', 'ACT001') ] |
| _blockId_   | string? | A string that represents the id of this block element. | 'BLK001' |

The actions object can be created by passing an array of [BlockElement](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/BlockElements/BlockElements.md). Below is an example of the creation of the Actions block above.

```javascript
import Actions from 'slack-block-msg-kit/Blocks/Actions';
import ButtonElement, { ButtonStyle } from 'slack-block-msg-kit/BlockElements/ButtonElement';

const btn1 = new ButtonElement('None of these', 'BTN001');
const btn2 = new ButtonElement('Cancel', 'BTN002');
btn2.changeStyle(ButtonStyle.danger);

const act = new Actions([btn1, btn2]);
```

## Adding a block_id

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

## Adding elements (addElements())

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| elements  | [BlockElement](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/BlockElements/BlockElements.md)[] | An array of block elements with the exception of ImageElement that added to the elements to be rendered in the actions. | [ new ButtonElement('button', 'ACT001') ] |

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

## Possible errors

| Error | Cause | Remedy |
| ----- | ----- | ------ |
| 'Actions element cannot be more than 5.' | Adding more than 5 elements | Reduce the number of elements to 5 |
| 'Image elements cannot be used in actions block' | Adding an image element to the actions. | Remove the image element from the array |
| 'Action Id '${id}' has a conflict in the list of elements' | Adding two block elements with the same action_id | Ensure that action_ids are unique |
