# Slack Block Message Kit

[![Maintainability](https://api.codeclimate.com/v1/badges/e9a5b2d6a3e658892de3/maintainability)](https://codeclimate.com/github/IyiKuyoro/slack-block-msg-kit/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/e9a5b2d6a3e658892de3/test_coverage)](https://codeclimate.com/github/IyiKuyoro/slack-block-msg-kit/test_coverage) [![npm version](https://badge.fury.io/js/slack-block-msg-kit.svg)](https://badge.fury.io/js/slack-block-msg-kit) [![CircleCI](https://circleci.com/gh/IyiKuyoro/slack-block-msg-kit.svg?style=svg)](https://circleci.com/gh/IyiKuyoro/slack-block-msg-kit)

This is a simple library that helps build slack block messages and all it's elements. It has robust validations to ensure mistakes are not made with the message formating.

## Table of Content

- [Slack Block Message Kit](#Slack-Block-Message-Kit)
  - [Table of Content](#Table-of-Content)
  - [How to Use](#How-to-Use)
  - [Contributors](#Contributors)
  - [How to Contribute](#How-to-Contribute)

## How to Use

Typically you will have setup a slack bot you wish to use in sending messages on slack. This document does not contain any instructions on how to setup a slack bot or how to communicate with the slack API for that mater. The instructions detailed below are to help build the slack message layout blocks that are sent to slack for display.

Install the package as a dependency to get started. `npm i --save slack-block-msg-kit`

This library is still in active development and only the following classes are currently available.

- [Block](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/Blocks/Blocks.md)

> - **[Section](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/Blocks/SectionBlock.md)**
> - **[Image](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/Blocks/ImageBlock.md)**
> - **[Actions](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/Blocks/ActionsBlock.md)**
> - **[Context](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/Blocks/ContextBlock.md)**
> - **[Divider](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/Blocks/Divider.md)**

- [Block Elements](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/BlockElements/BlockElements.md)

> - **[Image](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/BlockElements/ImageElement.md)**
> - **[Button](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/BlockElements/ButtonElement.md)**
> - **[StaticSelect](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/BlockElements/StaticSelectElement.md)**
> - **[ExternalSelect](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/BlockElements/ExternalSelectElement.md)**
> - **[UserSelect](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/BlockElements/UserSelectElement.md)**
> - **[ConversationSelect](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/BlockElements/ConversationSelectElement.md)**
> - **[ChannelSelect](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/BlockElements/ChannelSelectElement.md)**
> - **[OverflowMenu](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/BlockElements/OverflowMenuElement.md)**
> - **[DatePicker](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/BlockElements/DatePickerElement.md)**

- [Composition Objects](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/CompositionObjects/CompositionObjects.md)

> - **[Text](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/CompositionObjects/Text.md)**
> - **[Confirmation Dialog](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/CompositionObjects/ConfirmationDialog.md)**
> - **[Option](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/CompositionObjects/Option.md)**
> - **[OptionGroup](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/CompositionObjects/OptionGroup.md)**

## Contributors

- [Opeoluwa Iyi-Kuyoro](https://github.com/IyiKuyoro): 👨🏿(Creator)
- [Akinremi Olumide](https://github.com/akinmyde): 👨🏿(Contributor)

## How to Contribute

[Here](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/develop/HOW_TO_CONTRIBUTE.md) is a little help with that.
