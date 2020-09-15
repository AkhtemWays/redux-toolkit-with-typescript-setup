import React from "react";
import { Content } from "./Content";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { OnlineComponent } from "./OnlineComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Content />
      </div>
      <OnlineComponent />
    </Provider>
  );
}

export default App;
