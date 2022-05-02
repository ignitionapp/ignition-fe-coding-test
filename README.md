# Ignition JavaScript Interview Test

The purpose of this test is to evaluate your ability with the following aspects of writing JavaScript code:

- Creation of a Library Function
- Usage of Regular Expressions
- Writing a Test
- Building a simple Component
- Using react component State
- Reading existing code and fixing bugs
- Writing a more advanced component using lifecycle hooks
- API Interaction (no server knowledge required)

## Setup

To aid with completing these exercises, a set of prerequisites have been assembled for you. When you pull this repository, you'll need to run
`yarn install` to fetch all dependencies. We suggest you use an online tool like **CodeSandbox** to host and share your exercise with us. This will make it easy for you to avoid having to deal with dependencies in your local environment.

## Exercises

Solve as many problems as you can from this set

### `isValidIdentifier` String Validator Function

Write a function `isValidIdentifier` that takes a `string` and returns

- `true`, if it receives a string representing a valid decimal
- `false`, if input is not a valid decimal

#### Notes:

- **Use regular expressions** to power your validation logic

### Write a test

Write a `jest` test to cover all cases you can think of for `isValidDecimal` library function. Jest is already set up as a dependency.

### Simple React Form

Create a component that has an Input for entering amounts and a Button.
When you input a value that is a valid decimal and press a button, component should say "Valid" in green. When value is not valid, it should say "Not Valid" in red.

#### Notes:

Design choices are up to you and will be evaluated as part of your ability to contribute to the evolution of Ignition's user interface.
Show usage of `useState` react hook to manage a controlled input

### Button Grid

Render a 3 x 3 grid of 9 buttons.
When component renders, it should select one button at random and make it red, the rest of the buttons should be green. When red button is clicked it should cause another button to turn red at random. When an green button is clicked, it should become red. There should only be one red button in the grid at a time.

### Fix an error in component

You have a componenent called `DataGrid` which uses another component called `Detail`.
`Detail` is supposed to show you the value and show a `Value + 1` button which, when clicked will increment the value.

Component is fixed when:

- You can select a category by clicking on it
- Selected category detail is shown in the table
- All calculations are correct

NOTE:

- Keep both components

## Submitting your result

Please send a link to your CodeSandbox to the recruiter.
Your submission will be discussed during technical interview

## Technical Interview

During technical interview, you will be asked to complete another test, which will be similar to the problems solved above. This part of the test will evaluate your ability to solve problems on the spot. No pressure will be applied and the problems shouldn't be too hard, but it will help guide the technical discussion and evaluation of your problem-solving ability.
