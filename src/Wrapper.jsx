import React from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Content from "./components/Content/Content";

const Wrapper = () => {
    return (
        <div style={{display: "flex"}}>
            <Header/>
            <Menu/>
            <Content/>
        </div>
    );
}

export default Wrapper;