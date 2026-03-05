Question-1: What is JSX, and why is it used?
Answer: JSX allows to write HTML-like code directly inside JavaScript files.

JSX is the standard for React development for three main reasons:

Readability – It looks like HTML, making component structure easy to visualize, unlike verbose React.createElement() calls.

JavaScript Power – Unlike basic HTML templates, JSX lets you embed any JavaScript expression directly using curly braces {} (variables, math, function calls, etc.).

Logic + UI Together – React embraces keeping markup and its related logic in the same component, since they are naturally connected (e.g., a button's appearance and its click behavior). This makes components self-contained and reusable.

Question-2: What is the difference between State and Props?
Answer: Core Difference between State vs Props in React are given below 

Props
Data passed into a component
Owned by the parent component
Immutable — the child cannot modify them
Used to configure and pass data down to child components
Example: Settings on a washing machine — set externally, used internally

State
Data managed inside a component
Owned by the component itself
Mutable — updated via setState or useState
Tracks internal changes (user clicks, typing, API responses) and triggers re-renders
Example: Water level in a washing machine — managed and changed dynamically by the machine itself

Question-3: What is the useState hook, and how does it work?
Answer: A built-in React hook that allows functional components to have their own state. UseState lets functional components remember and update data. It returns a value, updater pair and calling the updater triggers a re-render to reflect changes in the UI. It always use the setter function never modify state directly.

Question-4: How can you share state between components in React?
Answer: In React, the method you choose to share state depends on how many components need the data and how "deeply" they are nested in your application tree. 

Lifting State Up: Move the state to the closest common parent of the components that need it.
Mechanism: The parent passes the state down as props and an update function as a callback.
Best For: Simple sharing between a few closely related components (e.g., siblings).
Context API: Create a "global" data provider that any child component can subscribe to without passing props through every level.
Mechanism: Wrap the tree in a Provider and use the useContext hook to access data.
Best For: Deeply nested components or app-wide settings like themes, user authentication, or language.
External Libraries: Use a dedicated state management tool (e.g., Redux, Zustand, Recoil).
Mechanism: State lives in a centralized "store" outside the component tree.
Best For: Large-scale applications with complex, high-frequency updates across many unrelated components.

Question-5: How is event handling done in React?
Answer: In React, event handling is very similar to handling events on DOM elements, but with a few key syntax and architectural differences. 

CamelCase Naming: Event names in React are written in camelCase (e.g., onClick, onChange) rather than lowercase (e.g., onclick, onchange).
Passing Functions: You pass a function reference as the event handler rather than a string.

Synthetic Events: React wraps native browser events in a cross-browser object called a SyntheticEvent. This ensures consistent behavior across different browsers. 

Implementation Details
Event Object: Handlers automatically receive the event object (conventionally named e) as their first argument.
Preventing Default Behavior: You cannot return false to prevent default browser behavior (like form submission refreshing the page); you must explicitly call e.preventDefault().
Stopping Propagation: To stop an event from bubbling up to parent components, call e.stopPropagation().
Passing Arguments: If you need to pass extra data to a handler, wrap it in an arrow function.