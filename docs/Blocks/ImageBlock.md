# Image

Images can be displayed in slack messages as well. [Here](https://api.slack.com/reference/messaging/blocks#image) is the slack documentation of the image block. This is quite different from [Image](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/Docs/ImageElement.md).

## Importing the Image class

```javascript
import { Image } from 'slack-block-msg-kit';
```

or

```javascript
import Image from 'slack-block-msg-kit/Blocks/Image';
```

## Creating an Image

| Parameter | Type   | Description | Example |
| --------- | ------ | ----------- | ------- |
| imageUrl  | string | The url of the image to be loaded into the message | '<https://fakeimage.png>' |
| altText   | string | The alternative text of the image to be loaded     | 'fake image'              |
| blockId?  | string | The blockId of the image to be loaded              | 'BLK001'                  |

The image object is created by calling the constructors and passing two required parameters; imageUrl and the altText. The blockId parameter is optional Below is an example.

```javascript
import Image from 'slack-block-msg-kit/Blocks/Image';

const img = new Image('https://fakeimage.img', 'fake image');
```

## Adding a block_id

Adding a block_id to the Image object is as simple as adding a third parameter to the Image constructor.

```javascript
import Image from 'slack-block-msg-kit/Blocks/Image';

const img = new Image('https://fakeimage.img', 'fake image', 'BLK001');
```

## Adding an Image Title

| Parameter | Type   | Description                        | Example       |
| --------- | ------ | ---------------------------------- | ------------- |
| title     | string | The title of the image to be added | 'Image title' |

To add a title to the image simply call the addTitle method passing in the image title you wish to use. Note however, that the title cannot be more than 2000 characters. Below is an example.

```javascript
import Image from 'slack-block-msg-kit/Blocks/Image';

const img = new Image('https://fakeimage.img', 'fake image');

img.addTitle('Image title');
```

## Possible errors

| Error | Cause | Remedy |
| --------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------- |
| 'imageUrl should not be more than 3000 characters.' | This would happen if you use an image url that is more than 3000 characters long.      | Try to reduce the image url by using a tool like <https://bitly.com/> |
| 'altText should not be more than 2000 characters.'  | This would happen if you use an alternate text that is more than 3000 characters long. | Try to reduce the text length                                  |
| 'title should not be more than 2000 characters.'  | This would happen if you try to add a title that has more than 2000 characters.            | Try to reduce the length                                       |
