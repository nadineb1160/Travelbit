import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from "../../pages/About";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Profile from "../../pages/Profile";
import Travel from "../../pages/Travel";
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import Wrapper from "../Wrapper/index";

function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Wrapper>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/travel" component={Travel} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/login" component={Login} />
                    {/* <Route component={NoMatch} /> */}
                </Switch>
            </Wrapper>
            {/* <Footer /> */}
        </BrowserRouter>
    );
}

export default Router;