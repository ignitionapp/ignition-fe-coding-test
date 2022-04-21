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

_If you cannot complete these exercises in less than 2 hours, you may find technical interview difficult._

### `isValidAmount` String Validator Function

Write a function `isValidAmount` that takes a `string` and returns

- `true`, if it receives a string representing a valid amount (e.g. `1.0`, `0`, `1`, `-1`, and `1.01`)
- `false`, if input is not a valid amount (e.g. `abc`, `.1`, `-.1`, and `1.`)

#### Notes:

- **Use regular expressions** to power your validation logic
- Assume that `.` (dot) is a decimal separator

### Write a test

Write a `jest` test to cover all cases you can think of for `isValidAmount` library function. Jest is already set up as a dependency.

### Simple React Form

Create a component that has an Input for entering amounts and a Button.
When you input a value that is a valid decimal and press a button, component should say "Valid" in green. When value is not valid, it should say "Not Valid" in red.

#### Notes:

Design choices are up to you and will be evaluated as part of your ability to contribute to the evolution of Ignition's user interface.
Show usage of `useState` react hook to manage a controlled input

### Button Grid

Render a 3 x 3 grid of 9 buttons with the following criteria.

- When component renders initially, it should select one button at random and make it red, the rest of the buttons should be green. 
- When a red button is clicked it should cause another button to turn red at random, and turn itself green. 
- When a green button is clicked, it should become red. The existing red button should become green.

Note - Only one button could be red after clicking.

### Fix an error in component

You have a component called `FixMe` which uses another component called `BumpValue`.
`BumpValue` is supposed to show you the value and show a `Value + 1` button which, when clicked will increment the value.

Component is fixed when:

- spinner doesn't show, and
- clicking the button increments value, and
- current value calculation is shown as a correct sum

NOTE:

- Keep both components
- Do not change the signature of components. Value and callback props should stay as they are.

## Submitting your result

Please send a link to your CodeSandbox to the recruiter.
Your submission will be discussed during technical interview

## Technical Interview

During technical interview, you will be asked to complete another test, which will be similar to the problems solved above. This part of the test will evaluate your ability to solve problems on the spot. No pressure will be applied and the problems shouldn't be too hard, but it will help guide the technical discussion and evaluation of your problem-solving ability.
