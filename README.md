# The Gist

This repo is an exploration of the different possible state solutions in a React app.

Below is a set of ever more complicated state related problems paired with example solutions and commentary.

Solutions have been selected on the basis of:

1. Being the simplest pattern to solve the problem at hand (lowest cyclomatic complexity)
2. Using as few technologies and libraries as possible (lowest bar to entry for developers)
3. Isolation of concerns

---

## Problem One

### Requirements

1. My component needs to keep track of a value

### Solution

-   Use `useState` in the _lowest possible_ scope of your component tree

### Example

`src/SingleComponentState`

### Comments

-   Hooks over classes is a debate for another time
-   Invoking `useState` in the _lowest possible_ scope helps towards a separation of concerns

---

## Problem Two

### Requirements

1. My component needs to keep track of a value
2. Some other components also need that value

### Solution

-   Use `useState` in the _lowest possible_ scope of your component tree
-   Pass that value to child components as props

### Example

`src/OneLevelOfNesting`

### Comments

-   Your child components will re-render with any change to that state value from the parent.
-   Your child components can be written as simple functional components, agnostic to the source of their prop values.

---

## Problem Three

### Requirements

1. My component needs to keep track of a value
2. Some other components also need that value
3. Those other components are nested within further components which _do not_ require that value

### Solution

-   Use `useState` in the _lowest possible_ scope of your component tree
-   Consider re-organizing your code so that components that are concerned with the same values are in the same area
-   Make use of the `children` pattern to flatten your component tree
-   Pass that value to child components as props

### Example

`src/FlattenedComponentTree`

### Comments

-   'Prop Drilling' is an anti-pattern sometimes used to solve this problem. However, it wrongly forces intermediatory components to require values _only_ to pass on them down the tree. Components should only require values (through props) which directly work towards them realising their specific use case.
-   The existence of multiple components, each needing the same value(s), but being in wildly different positions in the component tree is a code smell. It points to either a repo architectural issue or a UX issue that could benefit from refactoring.

---

## Problem Four

### Requirements

1. My component needs to keep track of a value
2. Some other components also need that value
3. Those other components are nested within further components which _do not_ require that value
4. Re-organising and/or flattening components has reached some kind of limit

### Solution

-   Use `useState`
-   Pass that state into `createContext` to create a `context` and a `Provider` for that value
-   Use the `Provider` in the _lowest possible_ scope of your component tree
-   Consume the `context` (with `useContext`) within any components that need that value

### Example

`src/DeeplyNestedComponents`

### Comments

-   `context` is React's solution passing things around without using props
-   As we're now chaining a few different techniques together (`useState`, `createContext`, `useContext`) to achieve a singular aim, it's good practice to hide these away as implementation details behind a more concise API (as done in our example). We can also defend that API and its aims from regression by covering it with its own specific tests.

---

# Counter: Custom Hook vs useReducer vs Redux (hooks)

The above examples all use a very simple example of state. It could be fairly argued that they are more concerned with _how_ that state is passed around, rather than how it is implemented.

Though only a little more complex, the following are a few example implementations of the classic 'counter' example used by most libraries and tutorials. N.B. the Redux example makes it look like such a poor fit that either the implementation is poor or the requirements are not complex enough to justify using it.

### Requirements

1. Multiple component needs to keep track of a singular counter value
2. They also need to be able to increment and decrement that counter value by any given number

---

## 1. Custom Hook Counter

- Super minimal, readable API: `{ count, increment, decrement } = useCounter()`
- Very similar Provider/hook pattern as used in `src/DeeplyNestedComponents`

### Example

`src/etc/counter/UsingCustomHook`

---

## 2. useReducer Counter

- More fragmented API, consumers now need to self assemble their increment and decrement methods (e.g. `dispatch({ type: CounterActionsTypes.INCREMENT, payload: 37 })`)
- Implementation details of the counter have leaked out into the consumer, leaving them more coupled
- Arguably you could instead reveal the same API as the custom hook (e.g. `{ count, increment, decrement } = useCounter()`) and use the reducer pattern within to fulfill it, however even this would feel like overkill for the requirements at hand

### Example

`src/etc/counter/UsingReducer`

## 3. Redux Hooks Counter

- _Either my implementation is bad, or this is a terrible fit for such simple requirements_
- Requires two packages: `redux` and `react-redux`
- Even more fragmented API: the consumer needs `useSelector` and `useDispatch` from `react-redux`, plus  `CounterProvider` and `CounterActionsTypes` from our counter API to then self assemble the `increment` and `decrement` methods
- Again, you could instead reveal the same API as the custom hook with Redux just used under the hood

### Example

`src/etc/counter/UsingReduxHooks`

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
