import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import "./css/App.css";
import "./css/Responsive.css";
import "./css/index.css";
import store from "./redux/store";
import Pages from "./Routes/Pages";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Suspense fallback="loading........">
          <Pages />
        </Suspense>
      </Provider>
    </div>
  );
}

export default App;
