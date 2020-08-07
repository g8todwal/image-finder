import React from 'react';
import './App.css';
import Main from './Components/MainComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
        <Main />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
