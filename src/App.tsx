import React from "react";
import { Content } from "./Content";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Content />
      </div>
    </Provider>
  );
}

export default App;
