# Day-83 Task:

## Description
Today's task is to learn about:

- [Building UI with Components](https://nextjs.org/learn/react-foundations/building-ui-with-components)
- [Displaying Data with Props](https://nextjs.org/learn/react-foundations/displaying-data-with-props)


## Building UI with Components:
1. **Component Basics**:
   - Components are the building blocks of a React application.
   - Each component is a JavaScript function or class that can accept inputs (props) and returns a React element describing what should appear on the UI.

2. **Creating a Component**:
   - Define a component by creating a JavaScript function that returns JSX.
   - Example:
     ```javascript
     function Welcome() {
       return <h1>Hello, World!</h1>;
     }
     ```

3. **Using Components**:
- Components can be nested, reused, and composed to build complex UIs.
- Example of using the `Welcome` component:
    ```javascript
    function App() {
    return (
        <div>
        <Welcome />
        </div>
    );
    }
    ```

## Displaying Data with Props:
1. **Understanding Props**:
- Props (short for properties) are inputs to a React component.
- They are passed to the component via HTML attributes and are accessible within the component via the `props` object.

2. **Passing Props**:
- Props are passed to components similarly to HTML attributes.
- Example:
    ```javascript
    function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
    }
    
    function App() {
    return (
        <div>
        <Greeting name="Alice" />
        <Greeting name="Bob" />
        </div>
    );
    }
    ```

3. **Using Props**:
- Props allow components to be dynamic and reusable by passing different data to the same component.
- They help in making components more flexible and maintainable.