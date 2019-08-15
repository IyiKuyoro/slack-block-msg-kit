# Section

A section usually represents a block of text in a message. It could include images, buttons and table like text among other elements. In most cases, all slack messages will have at least one section block.

Here is a short video tutorial on how to create a section.

[![Section Tutorial Video](https://res.cloudinary.com/iyikuyoro/image/upload/v1565897966/slack-block-msg-kit/Untitled_presentation.png)](https://www.youtube.com/watch?v=54cOgOYAsjE)

## Importing the Section Class

There are two ways of importing the Section class.

```javascript
import Section from 'slack-block-msg-kit/Blocks/Section';
```

or

```javascript
import { Section } from 'slack-block-msg-kit';
```

## Creating a Section

To create a [Section](https://api.slack.com/reference/messaging/blocks#section), a [text object](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/CompositionObject/Text.md) is required. The text object is rendered as the message that is displayed on slack. Below is a short example on how to instantiate a simple section.

```javascript
import Section from 'slack-block-msg-kit/Blocks/Section';
import Text, { TextType } from 'slack-block-msg-kit/CompositionObjects/Text';

const section = new Section(
  new Text(TextType.plainText, 'This is a text object'),
);
```

## Adding a block_id

Sections can also be made with a block_id. A block_id is returned to your application as part of the payload when an action is generated from that block on slack. You may want to use a block_id if you wish to uniquely identify the source of an action. Note that it is not one of the compulsory section parameters. To create a section object with a block_id, we pass a string as the second parameter to the section constructor like below. Keep in mind that the block_id cannot be more than 255 characters. An error will be thrown otherwise.

```javascript
import Section from 'slack-block-msg-kit/Blocks/Section';
import Text, { TextType } from 'slack-block-msg-kit/CompositionObjects/Text';

const section = new Section(
  new Text(TextType.plainText, 'This is a text object'),
  'ID001',
);
```

## Adding a field (Section)

A field is a array of [text objects](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/CompositionObject/Text.md) that are rendered side by side in a table like manner in a section. Below is a visual example of how fields are rendered as on slack.

![Fields Example Image](https://res.cloudinary.com/iyikuyoro/image/upload/v1562519506/slack-block-msg-kit/Screenshot_2019-07-07_at_6.11.12_PM.png)

To append the above fields to the section on slack, we use a simple method (**addField**). Below is an example that demonstrated that. Keep in mind that the maximum character length for each of these fields is 2000.

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

## Adding an accessory

Accessories which are typically [block elements](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/BlockElements/BlockElements.md) can be added to the section. Below is an example of a button accessory that has been added to a section object.

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
