1. In React 18, how does "Automatic Batching" improve performance?
   A) It bundles multiple JavaScript files into a single chunk.
   B) It batches multiple state updates into a single re-render, even inside asynchronous callbacks like Promises or timeouts. \*
   C) It automatically minifies CSS and HTML.
   D) It prevents infinite loops inside useEffect.

2. What is a known performance caveat of the React Context API?
   A) It uses synchronous blocking rendering.
   B) Whenever the Provider's value changes, every component consuming that context will re-render, even if they don't use the specific property that changed. \*
   C) It stores data in the browser's LocalStorage, which is slow.
   D) It cannot handle string or boolean data types.

3. In Redux, what is the primary purpose of middleware like Redux Thunk or Redux Saga?
   A) To automatically generate action types and creators.
   B) To optimize the rendering speed of the React Virtual DOM.
   C) To handle asynchronous logic and side effects before an action reaches the reducer. \*
   D) To split the global store into smaller, local component stores.

4. When using Redux Toolkit (RTK), how does the createSlice function handle state mutations?
   A) It throws a strict mode error if you try to mutate state.
   B) It uses the Immer library under the hood, allowing you to write "mutating" syntax that is safely translated into immutable updates. \*
   C) It completely abandons immutability for better performance.
   D) It requires you to use the JavaScript spread operator ... for every update.

5. What is the exact execution output order of the following JavaScript code when run in Nodejs ?

   console.log(1);
   setTimeout(() => console.log(2), 001);
   Promise.resolve().then(() => console.log(3));
   console.log(4);

   A) 1, 2, 3, 4
   B) 1, 4, 2, 3
   C) 1, 4, 3, 2 \*
   D) 1, 3, 4, 2

6. When does a useEffect hook with an empty dependency array [] execute?
   A) Every time any state variable in the component changes.
   B) Only once, immediately after the component mounts to the screen. \*
   C) Right before the component unmounts and is destroyed.
   D) Continuously in the background every second.

7. const [count,setCount] = useState(0);  
   Why might calling setCount(count + 1) not immediately update the count variable on the very next line of code?
   A) Because state updates in React are asynchronous and batched for performance. \*
   B) Because React requires you to call forceUpdate() after setting state.
   C) Because the count variable is locked by the browser.
   D) Because you must use a custom hook to update numerical state.

8. Which of the following best describes "prop drilling" performance issue in updating UI?
   A) Modifying a prop directly inside a child component, causing an error.
   B) Passing a prop through several nested layers of components that don't actually need it, just to deliver it to a deeply nested child component. \*
   C) Validating the data types of props using TypeScript.
   D) A security vulnerability where props are exposed to the global window object.

9. Why is the key prop required when rendering a list of elements with .map()?
   A) It tells the browser how to apply CSS grids to the list.
   B) It helps React uniquely identify and distinguish jsx elements to calculate diffing between old and new copies of virtual dom \*
   C) It acts as a secure password for accessing list data.
   D) It is a mandatory HTML5 requirement for <li> tags.

10. What is the purpose of <React.Fragment> or its shorthand <> </>?
    A) To group multiple JSX elements together without adding an extra wrapper node (like a <div>) to the actual HTML DOM. \*
    B) To inject plain text or markdown directly into a component.
    C) To split a component into two separate files.
    D) To render elements only on mobile devices.

11. What are the two main components generated when you call React.createContext()?
    A) Store and Reducer
    B) Provider and Consumer \*
    C) State and Dispatch
    D) Action and Payload

12. In Redux philosophy, state is strictly "immutable". What does this mean for developers writing state updates?
    A) You cannot change the state at all once the app loads.
    B) You must return a completely new, updated copy of the state object, rather than directly modifying the existing state object. \*
    C) You can only update state using strings, not objects or arrays.
    D) You must save the state to a database before you are allowed to change it.

13. What two properties does a standard Redux action object typically contain,where one of them is mandatory?
    A) name and value
    B) type and payload \*
    C) event and data
    D) reducer and store

14. Which hook from react-redux allows a functional component to send an action to the Redux store?
    A) useSelector
    B) useContext
    C) useDispatch \*
    D) useReducer

15. Which hook from react-redux allows a functional component to read specific pieces of data from the Redux store?
    A) useSelector \*
    B) useReducer
    C) useContext
    D) useDispatch

16. What is a major developer-experience advantage of using createSlice in Redux Toolkit (RTK)?
    A) It automatically creates UI buttons for you.
    B) It combines actions and reducers into one file, and uses the Immer library so you can write "mutating" syntax that safely updates state immutably under the hood. \*
    C) It entirely removes the need to wrap your app in a <Provider>.
    D) It replaces React's Virtual DOM with a faster engine.

17. What is the standard use case for Redux middleware like "Redux Thunk"?
    A) To write asynchronous logic (like fetching data from an API) that can interact with the Redux store. \*
    B) To compress the overall file size of your Redux store.
    C) To automatically generate HTML forms based on your Redux state.
    D) To strictly enforce TypeScript rules at runtime.

18. What is the primary difference between the array methods .map() and .filter()?
    A) .map() modifies the original array, .filter() does not.
    B) .map() returns a new array with transformed elements, while .filter() returns a new array containing only elements that passed a true/false condition. \*
    C) .map() is used for objects, while .filter() is used for arrays.
    D) There is no difference; they do the exact same thing.

19. What will be the value of arr2 after this code runs? const arr1 = [1, 2]; const arr2 = [...arr1, 3];
    A) [[1, 2], 3]
    B) [1, 2, 3] \*
    C) [3, 1, 2]
    D) 3

20. In a JavaScript Promise, what is the specific purpose of the .catch() block?
    A) To pause the execution of the code.
    B) To handle any errors or rejections that occur during the asynchronous operation. \*
    C) To grab the successful data returned from an API.
    D) To convert a synchronous function into an asynchronous one.

21. Which of the following is true regarding async/await?
    A) It completely replaces Promises under the hood.
    B) It is syntactic sugar that makes asynchronous code look and read more like traditional top-to-bottom synchronous code. \*
    C) It is used to block the main thread to prevent users from clicking buttons.
    D) It requires importing the external axios library to function.

22. How do you declare a variable in TypeScript that is allowed to hold either a string OR a number (a Union Type)?
    A) let id: string & number;
    B) let id: [string, number];
    C) let id: string | number; \*
    D) let id: any;

23. What does the ? signify in a TypeScript interface definition (e.g., age?: number;)?
    A) The property age is optional and does not have to be provided when creating the object. \*
    B) The property age can be any data type, bypassing type checking.
    C) TypeScript is unsure of the type and will guess it at runtime.
    D) The property age is read-only and cannot be changed later.

24. While very similar, what is one feature that an interface has that a type alias does not?
    A) Interfaces can be used to type primitive arrays.
    B) Interfaces support "declaration merging" (defining the exact same interface name twice will merge their properties together). \*
    C) Interfaces run significantly faster in the browser.
    D) Interfaces do not require the code to be compiled.

25. What is the main purpose of using a Generic type (like Array<T>) in TypeScript?
    A) To permanently disable type checking for a specific file.
    B) To allow a function, class, or component to work flexibly with a variety of different data types, while still maintaining strict type safety. \*
    C) To automatically translate JavaScript code into TypeScript.
    D) To define variables that get deleted after one use.

26. Which of these is an example of a roaming type in Typescript, and is not suggested for usage for type safety?
    A) 'never' type
    B) 'unknown' type
    C) 'any' type \*
    D) None of these

27. What are the three standard arguments passed into an Express.js middleware function?
    A) (error, request, response)
    B) (request, response, next) \*
    C) (state, action, dispatch)
    D) (input, output, callback)

28. What does a 404 HTTP status code specifically indicate?
    A) Internal Server Error
    B) Unauthorized (Not logged in)
    C) The requested resource or route was Not Found \*
    D) The request was completely successful

29. In React,How is data stored internally from the URL route parameters, path:'/user/:id/contact/:data')
    given the BrowserURL state is :

localhost:3000/user/7/contact/911

A) {user:7,contact:911} \*
B) {user=7,contact}=911
C) let user =7,let contact = 911
D) None of these

30. What is the core difference between useMemo and useCallback?
    A) useMemo caches a function, while useCallback caches an array.
    B) useMemo caches the result of a calculation, while useCallback caches the function definition itself. \*
    C) useMemo is used for global state, while useCallback is used for local state.
    D) There is no difference; they are aliases for the same underlying hook.

31. When is it most appropriate to use the useReducer hook instead of useState?
    A) When you need to fetch data from an external REST API.
    B) When you are managing simple string or boolean values.
    C) When you have complex state logic that involves multiple sub-values, or when the next state depends heavily on the previous one. \*
    D) When you want to share state automatically across the entire application without props.

32. In React Router v6, which hook allows you to navigate to a new page programmatically (e.g., after a user submits a form)?
    A) useHistory
    B) useRedirect
    C) useNavigate \*
    D) useLocation

33. How do you implement "Lazy Loading" for components in React to reduce the initial bundle size?
    A) By using the useLazy hook.
    B) By using React.lazy() combined with a <Suspense> wrapper. \*
    C) By adding the loading="lazy" attribute to the component.
    D) By placing the component inside a setTimeout function.

34. In order to webpack to perform code splitting for Admin component, what needs to be done ?
    A) Ensure Admin has a default keyword in declaration and use a dynamic import with lazy() \*
    B) Ensure Admin has a default keyword in declaration and use a static import with --- import {Admin} from './admin.tsx'
    C) By adding the loading="lazy" attribute to the component.
    D) By placing the component inside a setTimeout function.

35. Which Hook is often used to catch routeErrors in react-router-dom ?
    A) .catch(()=>{})
    B) try & catch statement
    C) useErrors()
    D) useRouteError() \*

36. What is a "Selector" in Redux?
    A) A CSS string used to style Redux components.
    B) A function used to extract and return specific pieces of data from the Redux store state. \*
    C) A middleware that intercepts specific actions.
    D) A tool that selects which reducer should handle an action.

37. When using createAsyncThunk in Redux Toolkit, what three action types are automatically generated for you?
    A) start, success, error
    B) pending, fulfilled, rejected \*
    C) loading, complete, failed
    D) fetch, receive, catch

38. If a Context API Provider wraps your entire application, what is a simple way to prevent massive re-renders when only one small piece of context data changes?
    A) Do not use Context; use Redux instead.
    B) Split the single large Context into multiple smaller, logically separated Contexts (e.g., AuthContext, ThemeContext). \*
    C) Wrap every single component in the app with React.memo.
    D) Use useRef to store the Context values.

39. Which ES6 syntax allows you to easily combine two objects into a single new object?
    A) Object.combine(obj1, obj2)
    B) const newObj = { ...obj1, ...obj2 }; \*
    C) const newObj = obj1 + obj2;
    D) const newObj = [obj1, obj2];

40. What is a "Tuple" in TypeScript?
    A) An array with a fixed number of elements whose types are known in advance (e.g., [string, number]). \*
    B) An object that only contains functions.
    C) A variable that can hold infinite amounts of data.
    D) A union of three or more types.

41. What is the functional difference between the return types void and never in TypeScript?
    A) void means the function returns undefined (or nothing explicitly), while never means the function will never complete its execution normally (e.g., it always throws an error or has an infinite loop). \*
    B) void is for synchronous functions, while never is for asynchronous functions.
    C) void can return null, while never can return undefined.
    D) They are interchangeable terms for a function that doesn't return a value.

42. Which of the following is the most appropriate use case for the React Context API?
    A) Storing form data that updates on every keystroke.
    B) Storing global, low-frequency updates like the current user's Theme (Light/Dark) or Authentication status. \*
    C) Managing complex, highly relational data that requires frequent asynchronous API calls.
    D) Passing an ID down to a single child component one level deep.

43. What is the standard way to consume a Context value inside a modern React functional component?
    A) const value = Context.consume();
    B) const value = useContext(MyContext); \*
    C) const value = useReducer(MyContext);
    D) const value = getContext(MyContext);

44. How can a child component update the data stored in a Context Provider?
    A) By modifying the context object directly using standard JavaScript (e.g., Context.value = 'new').
    B) By wrapping the child component in a Context.Setter tag.
    C) The Provider must pass down a state setter function (like setTheme) inside its value object, which the child can then call. \*
    D) Context is strictly read-only and cannot be updated from child components.

45. If you need to provide both a "Theme" and "User" context to your app, what is the best practice?
    A) Combine them into one massive object and use a single Provider.
    B) Nest multiple Providers (e.g., <ThemeProvider><UserProvider>...) to keep the concerns separated and prevent unnecessary re-renders. \*
    C) Use Redux instead, because React only allows one Context per application.
    D) Pass the Theme via Context and the User via prop drilling.

46. In vanilla Redux, what is the absolute minimum requirement for an Action object?
    A) It must have a payload property.
    B) It must have a type property (usually a string). \*
    C) It must have an id property.
    D) It must contain a reducer function.

47. What is a "Thunk" in the context of Redux?
    A) A middleware that allows you to write action creators that return a function instead of an action object, enabling asynchronous logic like API calls. \*
    B) A piece of state that hasn't been used in a long time.
    C) A specialized UI component that connects to the store.
    D) A strict error thrown when you mutate state directly.

48. What does RTK Query (included with Redux Toolkit) primarily help developers do?
    A) Write CSS-in-JS efficiently.
    B) Simplify data fetching, caching, and syncing server state with your React UI. \*
    C) Query the Virtual DOM for testing purposes.
    D) Translate the application into multiple languages.

49. What makes the Redux DevTools extension so powerful for debugging?
    A) It automatically fixes broken CSS layouts.
    B) It allows for "time-travel debugging," letting you step backward and forward through every action dispatched and see exactly how the state changed. \*
    C) It scans your code for security vulnerabilities.
    D) It converts React class components into functional components.

50. In Jest, what does the expect(element).toBeInTheDocument() assertion do?
    A) It checks if the component's code is saved in a document file.
    B) It verifies that the specified HTML element was successfully rendered into the simulated DOM. \*
    C) It pushes the element into the Redux store.
    D) It checks if the browser is currently open.
