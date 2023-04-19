import React from 'react';
import {ContextProvider} from './src/context/Context';
import MainNavigation from './src/navigation/MainNavigation';

function App(): JSX.Element {
  return (
    <ContextProvider>
      <MainNavigation />
    </ContextProvider>
  );
}

export default App;
