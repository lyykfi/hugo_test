import * as React from "react";
import {
  NavLink,
} from "react-router-dom";

import "./style.less";

/**
 *
 */
const MainMenu = () => {
    return <ul id="main_menu" role="nav">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink exact to="/quest">Quest</NavLink></li>
    </ul>;
};

export default MainMenu;
