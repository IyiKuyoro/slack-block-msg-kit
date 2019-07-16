# Date Picker

![Date picker image](https://res.cloudinary.com/iyikuyoro/image/upload/v1563297584/slack-block-msg-kit/Screenshot_2019-07-16_at_6.19.23_PM.png)

A [date picker](https://api.slack.com/reference/messaging/block-elements#datepicker) renders allows users to select a date from a calender on slack.

## table of Content

- [Date Picker](#Date-Picker)
  - [table of Content](#table-of-Content)
  - [Importing the Date Picker Class](#Importing-the-Date-Picker-Class)
  - [Creating a Date Picker Object (Constructor)](#Creating-a-Date-Picker-Object-Constructor)
  - [Adding a Placeholder (addPlaceholder())](#Adding-a-Placeholder-addPlaceholder)
  - [Adding an initial Date (addInitialDate())](#Adding-an-initial-Date-addInitialDate)
  - [Adding a confirmation dialog (addConfirmationDialogByParameters())](#Adding-a-confirmation-dialog-addConfirmationDialogByParameters)
  - [Possible Errors](#Possible-Errors)

## Importing the Date Picker Class

```javascript
import { DatePickerElement } from 'slack-block-msg-kit';
```

or

```javascript
import DatePickerElement from 'slack-block-msg-kit/BlockElements/DatePickerElement';
```

## Creating a Date Picker Object (Constructor)

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| actionId  | string | The action id of the date picker element | 'ACT001' |

A date picker is easily created by passing an action id as the only required parameter to the constructor

```javascript
import DatePickerElement from 'slack-block-msg-kit/BlockElements/DatePickerElement';

const datePicker = new DatePickerElement('ACT001');
```

## Adding a Placeholder (addPlaceholder())

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| placeholder | string | The text to be rendered as the placeholder | 'Select a date' |

A custom placeholder can be added to the date picker by passing a string to the **addPlaceholder** method.

```javascript
import DatePickerElement from 'slack-block-msg-kit/BlockElements/DatePickerElement';

const datePicker = new DatePickerElement('ACT001');

datePicker.addPlaceholder('Select a date');
```

## Adding an initial Date (addInitialDate())

| Parameter | Type | Description | Example |
| --------- | ---- | ----------- | ------- |
| year | number | The year of the date to be selected | 2019 |
| month | number | The month of the date to be selected | 2 |
| day | number | The day of the date to be selected | 28 |

You can add an initial date to be selected when the date picker is loaded up on slack. To do this, make use of the **addInitialDate** method, passing along three required parameters.

```javascript
import DatePickerElement from 'slack-block-msg-kit/BlockElements/DatePickerElement';

const datePicker = new DatePickerElement('ACT001');

datePicker.addInitialDate(2020, 2, 29);
```

## Adding a confirmation dialog (addConfirmationDialogByParameters())

You may wish to confirm the user's date selection with a [Confirmation Dialog](https://github.com/IyiKuyoro/slack-block-msg-kit/blob/master/docs/CompositionObjects/ConfirmationDialog.md). Simply make use of the (**addConfirmationDialogByParameters**) method for this.

```javascript
import Text, { TextType } from 'slack-block-msg-kit/CompositionObjects/Text'
import DatePickerElement from 'slack-block-msg-kit/BlockElements/DatePickerElement';

const datePicker = new DatePickerElement('ACT001');

datePicker.addConfirmationDialogByParameters(
  'confirm',
  new Text(TextType.plainText, 'Are you sure?'),
  'Yes',
  'No',
);
```

## Possible Errors

| Error | Cause | Remedy |
| ----- | ----- | ------ |
| 'actionId should not be more than 255 characters.' | Adding more than 255 characters in the actionId | Reduce the actionId size |
| 'Year must have four digits' | Trying to add an invalid year | Ensure the year has four digits |
| 'Month out of range' | Trying to add a month outside the 12 calender months | Ensure the month is within the range of 1 - 12 |
| 'Day out of range' | Trying to add a day outside the bounds of the preselected month | Ensure the date falls within that calender month |
| 'Only leap years have 29 days in February' | Trying to add 29 of February in a non leap year | Ensure the date falls within that calender month |
