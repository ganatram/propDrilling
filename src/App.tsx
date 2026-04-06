import { useReducer } from 'react';
/* import { Header } from './Header';
import { Main } from './Main'; */
// import { authenticate, User } from './api/authenticate';
// import { authorize } from './api/authorize';
import { AppProvider } from './AppContext';

import { Header } from './Header';
import { Main } from './Main';
import { Test1 } from './Test1';

/* state = initialState // {
user: undefined, // { id: '1', name: 'Bob' }
permissions: undefined,
loading: false,
} */

function App() {
  /*   async function handleSignInClick() {
    dispatch({ type: 'authenticate' });
    const authenticatedUser = await authenticate(); // { id: '1', name: 'Bob' }
    console.log(authenticatedUser); // {id: '1', name: 'Bob'}
    dispatch({
      type: 'authenticated',
      user: authenticatedUser, // // { id: '1', name: 'Bob' }
    });
    if (authenticatedUser !== undefined) {
      dispatch({ type: 'authorize' });
      const authorizedPermissions = await authorize(authenticatedUser.id); // ['admin']
      dispatch({
        type: 'authorized',
        permissions: authorizedPermissions, // ['admin']
      });
    }
  } */

  return (
    /*  <div className="max-w-7xl mx-auto px-4">
      <Header user={user} onSignInClick={handleSignInClick} loading={loading} />
      <Main user={user} permissions={permissions} />
    </div> */
    <div className="max-w-7xl mx-auto px-4">
      <AppProvider>
        <Header />
        <Main />
      </AppProvider>
    </div>
  );
}

export default App;
