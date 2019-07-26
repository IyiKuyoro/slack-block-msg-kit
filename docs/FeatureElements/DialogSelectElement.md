# DialogSelectElement

[Select elements](https://api.slack.com/dialogs#select_default_values) can be added to slack dialogs. There are several [data sources](#dialogselectdatasource) that can be used for the select menu. The default is static.

## Table of Content

- [DialogSelectElement](#dialogselectelement)
  - [Table of Content](#table-of-content)
  - [Importing the DialogSelectElement Class](#importing-the-dialogselectelement-class)
  - [Create a new Select Element (Constructor)](#create-a-new-select-element-constructor)
  - [Changing the data source (changeDataSource)](#changing-the-data-source-changedatasource)
  - [Adding a Minimum Query Length (addMinQueryLength)](#adding-a-minimum-query-length-addminquerylength)
  - [Adding a default selected option (addSelectedOption)](#adding-a-default-selected-option-addselectedoption)
  - [Adding Options(addOptions)](#adding-optionsaddoptions)
  - [Adding Option Group (addOptionsGroup)](#adding-option-group-addoptionsgroup)
  - [Possible errors](#possible-errors)
  - [DialogSelectDataSource](#dialogselectdatasource)
    - [Import DialogSelectDataSource](#import-dialogselectdatasource)

## Importing the DialogSelectElement Class

```javascript
import DialogSelectElement from 'slack-block-msg-kit/FeatureElements/DialogSelectElement';
```

or

```javascript
import { DialogSelectElement } from 'slack-block-msg-kit';
```

## Create a new Select Element (Constructor)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| label | string | The fields label | 'Options' |
| name | string | The name that will be assigned to this field | 'user_options' |

```javascript
import DialogSelectElement from 'slack-block-msg-kit/FeatureElements/DialogSelectElement';

const select = new DialogSelectElement('select label', 'select name');
```

## Changing the data source (changeDataSource)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| newSource | [DialogSelectDataSource](#dialogselectdatasource) | The data source of the select menu | DialogSelectDataSource.external |

```javascript
import DialogSelectElement, { DialogSelectDataSource } from 'slack-block-msg-kit/FeatureElements/DialogSelectElement';

const select = new DialogSelectElement('select label', 'select name');

select.changeDataSource(DialogSelectDataSource.external);
```

## Adding a Minimum Query Length (addMinQueryLength)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| minLength | number | A minimum string length before a request to your app is triggered | 3 |

The minimum query length can only be applied to a select element that has an external data source. It represents the minimum number of characters the user has to type on the on the menu to trigger a request for fresh data.

```javascript
import DialogSelectElement, { DialogSelectDataSource } from 'slack-block-msg-kit/FeatureElements/DialogSelectElement';

const select = new DialogSelectElement('select label', 'select name');

select
  .changeDataSource(DialogSelectDataSource.external)
  .addMinQueryLength(3);
```

## Adding a default selected option (addSelectedOption)

You may add a default selected option when the menu is loaded for external and static options.

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| options | [DialogSelectOption](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/FeatureElements/DialogSelectOption.md) | A default selected option | | new DialogSelectOption('option', 'value') |

```javascript
import DialogSelectOption from 'slack-block-msg-kit/FeatureElements/DialogSelectOption';
import DialogSelectElement from 'slack-block-msg-kit/FeatureElements/DialogSelectElement';

const select = new DialogSelectElement('select label', 'select name');

select
  .addSelectedOption(new DialogSelectOption('option', 'value'));
```

## Adding Options(addOptions)

Add an array of options to the select menu. Keep in mind that you cannot have option group and options in the same select menu.

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| options | [DialogSelectOption](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/FeatureElements/DialogSelectOption.md)[] | An array of options to be added to the select menu | [new DialogSelectOption('label', 'value'), new DialogSelectOption('label1', 'value1')] |

```javascript
import DialogSelectOption from 'slack-block-msg-kit/FeatureElements/DialogSelectOption';
import DialogSelectElement from 'slack-block-msg-kit/FeatureElements/DialogSelectElement';

const select = new DialogSelectElement('select label', 'select name');

select.addOptions([
  new DialogSelectOption('label', 'value'),
  new DialogSelectOption('label1', 'value1'),
]);
```

## Adding Option Group (addOptionsGroup)

Add an array of option groups to the select menu. Keep in mind that you cannot have options and option group in the same select menu.

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| optionGroups | [DialogSelectOptionGroup](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/FeatureElements/DialogSelectOptionGroup.md) | An array of option groups | [new DialogSelectOptionGroup('label', [new DialogSelectOption('label', 'value'), new DialogSelectOption('label1', 'value1')])] |

```javascript
import DialogSelectOption from 'slack-block-msg-kit/FeatureElements/DialogSelectOption';
import DialogSelectOptionGroup from 'slack-block-msg-kit/FeatureElements/DialogSelectOptionGroup';
import DialogSelectElement from 'slack-block-msg-kit/FeatureElements/DialogSelectElement';

const select = new DialogSelectElement('select label', 'select name');

select.addOptionsGroup([
  new DialogSelectOptionGroup('label', [
    new DialogSelectOption('label', 'value'),
    new DialogSelectOption('label1', 'value1'),
  ])
]);
```

## Possible errors

| Error | Cause | Remedy |
| ----- | ----- | ------ |
| 'label should not be more than 48 characters.` | Adding a label that is more than 48 characters | Reduce the label size |
| 'name should not be more than 300 characters.` | Adding a name that is more than 300 characters | Reduce the name size |
| 'Only external data sources require a min query length' | Trying to add min query length to non external data. | Remove the min query |
| 'minLength must be a positive integer less than 75 and greater than 0` | Providing an invalid minimum length. | Allowable range 0 - 75 |
| 'Cannot have options and option_groups in the same select menu' | Cannot have options and option_group in the same menu | Chose one format |
| 'Total options cannot be more than 100' | Trying to add more than 100 options to the select menu | Reduce the number of options or use groups |
| 'Cannot have more than 100 option groups' | Trying to add more than 100 option groups | Perhaps try to simplify by using an external select |

## DialogSelectDataSource

A select menu can have other data sources different from static. This enum holds all the other permitted data source.

- **users**: Create a select menu with members of the workspace as options
- **channels**: Create a select menu with channels in the workspace
- **conversations**: Create a select menu with conversations
- **external**: Create a select menu with an external data source

### Import DialogSelectDataSource

```javascript
import { DialogSelectDataSource } from 'slack-block-msg-kit/FeatureElements/DialogSelectElement';
```

[Here](#changing-the-data-source-changedatasource) are instructions on how to change the data type.
