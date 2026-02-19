import { Provider } from "react-redux";
import { store } from "./store/store.js";
import "./styles/index.css";
import "./styles/normalize.css";
import AppRouter from "./routers/AppRouter";

//Provider wraps entire application so the redux store is available to every component
function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
