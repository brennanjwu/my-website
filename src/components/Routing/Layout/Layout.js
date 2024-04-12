import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar.js";
import "./Layout.scss";
import LoadingBar from "react-top-loading-bar";

function Layout(props) {

    const [progress, setProgress] = useState(0);

    return (
        <div className="App">
            <LoadingBar color='#000000' progress={progress}
                        onLoaderFinished={() => setProgress(0)} />
            <Navbar logoText={props.logoText}/>
            <div className="page">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;