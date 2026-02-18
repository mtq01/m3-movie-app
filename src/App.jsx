import { Provider } from "react-redux";
import { store } from "./store/store.js";
import "./styles/index.css";
import "./styles/normalize.css";
import AppRouter from "./routers/AppRouter";

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
