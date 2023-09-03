import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "../src/components/Home";
import Userlist from "../src/components/Userlist";
import Adduser from "../src/components/Adduser";
import Updateuser from "../src/components/Updateuser";
import { Provider } from "react-redux";
import store, { persistor } from "../src/redux/store";
import Login from "./pages/Auth/Login";

import Indexs from "./Routers/Indexs";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>

        <BrowserRouter >
          <div className="App">
           <Indexs  />
          </div>
        </BrowserRouter>
        <ToastContainer />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
