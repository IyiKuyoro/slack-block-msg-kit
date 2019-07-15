# Slack Block Message Kit

[![Maintainability](https://api.codeclimate.com/v1/badges/e9a5b2d6a3e658892de3/maintainability)](https://codeclimate.com/github/IyiKuyoro/slack-block-msg-kit/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/e9a5b2d6a3e658892de3/test_coverage)](https://codeclimate.com/github/IyiKuyoro/slack-block-msg-kit/test_coverage) [![npm version](https://badge.fury.io/js/slack-block-msg-kit.svg)](https://badge.fury.io/js/slack-block-msg-kit) [![CircleCI](https://circleci.com/gh/IyiKuyoro/slack-block-msg-kit.svg?style=svg)](https://circleci.com/gh/IyiKuyoro/slack-block-msg-kit)

This is a simple library that helps build slack block messages and all it's elements. It has robust validations to ensure mistakes are not made with the message formating.
**Still in development**

## Table of Content

- [Slack Block Message Kit](#Slack-Block-Message-Kit)
  - [Table of Content](#Table-of-Content)
  - [Currently available classes](#Currently-available-classes)
  - [How to Use](#How-to-Use)
    - [Composition Objects](#Composition-Objects)
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

### Composition Objects

Most blocks require a composition object as a child object. One of the very commonly required composition objects is the [Text Object](#Text).

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
