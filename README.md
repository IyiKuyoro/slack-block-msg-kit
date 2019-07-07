# Slack Block Message Kit

[![Maintainability](https://api.codeclimate.com/v1/badges/e9a5b2d6a3e658892de3/maintainability)](https://codeclimate.com/github/IyiKuyoro/slack-block-msg-kit/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/e9a5b2d6a3e658892de3/test_coverage)](https://codeclimate.com/github/IyiKuyoro/slack-block-msg-kit/test_coverage) [![npm version](https://badge.fury.io/js/slack-block-msg-kit.svg)](https://badge.fury.io/js/slack-block-msg-kit) [![CircleCI](https://circleci.com/gh/IyiKuyoro/slack-block-msg-kit.svg?style=svg)](https://circleci.com/gh/IyiKuyoro/slack-block-msg-kit)

This is a simple package that helps build slack block messages and all it's elements. It has robust validations to ensure mistakes are not made with the message formating.
**Still in development**

## Currently available classes

This library is still in active development and only the following classes are currently available.

### Block

- **Section** > <https://api.slack.com/reference/messaging/blocks#section>

### Block Elements

- **Image** > <https://api.slack.com/reference/messaging/block-elements#image>
- **Button** > <https://api.slack.com/reference/messaging/block-elements#button>

### Composition Objects

- **Text** > <https://api.slack.com/reference/messaging/composition-objects#text>
- **Confirmation Dialog** > <https://api.slack.com/reference/messaging/composition-objects#confirm>

## How to Use

Typically you will have setup a slack bot you wish to use in sending messages on slack. This document does not contain any instructions on how to setup a slack bot or how to communicate with the slack API for that mater. The instructions detailed below are to help build the slack message layout blocks that are sent to slack for display.

Install the package as a dependency to get started. `npm i --save slack-block-msg-kit`

### Blocks

Slack messages are now built with individual layout blocks that comprise of number of elements sent as a json object. [This](https://api.slack.com/reference/messaging/blocks) page contains all the currently available blocks from slack.

#### Section

To build a section block, import the section block class into your file.
