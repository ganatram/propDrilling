//   Context API
// Shared object that can be accessed by all the components directly
// move the state over to the context object makes a lot of sense

// step 1 - creating the Context :
// const SomeContext = createContext(defaultValue);

// step 2 - use a Context Provider Component:
/*  export function SomeProvider({ children }: Props) {
  const [someState, setSomeState] = useState(initialState);

  return(
    <SomeContext.Provider value={{someState}}>
        {children}
    <SomeContext/>
  )
} 
 */

// Step 3 - Wrap the Context Consumers in the Context Provider

/* export function App() {
  return (
    <SomeProvider>
      <Header />
      <Main />
    </SomeProvider>
  );
} */

// step 4 - How to child components get data from the context provider - useContext()

/* export function Header() {
  const someData = useContext('SomeContext'); // {user:'adam',permissions='undefined',loading:false}

  return <div>{someData.user}</div>;
} */

// step 5 - How to child components send instrucitons to modify state in context -- dispatch()

/* export function Header() {
  const someData = useContext('SomeContext'); // {user:'adam',permissions='undefined',loading:false}

  function callbackFunc(){
  dispatch({type:'authenticate})
  }

  return <button onClick={callbackFunc}>   </button>
} */
