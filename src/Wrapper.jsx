import React from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Content from "./components/Content/Content";
import HeaderContainer from "./components/Header/HeaderContainer";

const Wrapper = () => {
    return (
        <div style={{display: "flex"}}>
            <HeaderContainer/>
            <Menu/>
            <Content/>
        </div>
    );
}

export default Wrapper;