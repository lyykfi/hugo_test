import "./main.less";

import * as React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
} from "react-router-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

import QuestPage from "../pages/quest/index";
import QuestionsPage from "../pages/questions/index";

import MainMenu from "../components/main_menu/index";

import store from "../store/index";

/**
 *
 */
const App = () => {
    return <Provider store={store}>
        <Router>
            <div>
                <MainMenu />

                <Route exact path="/" component={QuestionsPage}/>
                <Route path="/quest" component={QuestPage}/>
            </div>
        </Router>
    </Provider>;
};

export default App;
