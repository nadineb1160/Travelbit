import React from 'react';
import Router from "./components/Router"
import {WindowDimensionsProvider} from "./state/WindowDimensions"
import {UserProvider} from "./state/UserContext"
import './App.css';

function App() {

  return (
    <WindowDimensionsProvider>
      <UserProvider>
        <Router />
      </UserProvider>
    </WindowDimensionsProvider>
  );
}

export default App;
