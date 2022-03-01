import React from 'react';
import RouterMap from "./router/RouterMap";
import './App.css';

interface AppProps {
  
}

interface AppState{
  count: number;
}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div className="App">
        <RouterMap />
      </div>
    );
  }
}

export default App;
