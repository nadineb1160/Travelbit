import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from "../../pages/About";
import Home from "../../pages/Home";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import PasswordReset from "../PasswordReset";
import AddCountry from "../AddCountry";
import AddCity from "../AddCity";
import Profile from "../../pages/Profile";
import Travel from "../../pages/Travel";
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import Wrapper from "../Wrapper/index";
import { useUserContext } from "../../state/UserContext.js"

function AuthenticatedRoutes() {
    return (

        <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route exact path="/passwordReset" component={PasswordReset} />
        </Switch>
    )
}

function Router() {
    const { user } = useUserContext();


    return (
        <BrowserRouter>
            <Navbar />
            <Wrapper>
                {user ?
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/travel" component={Travel} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/addCountry" component={AddCountry} />
                        <Route exact path="/addCity" component={AddCity} />
                        {/* <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/signin" component={SignIn} /> */}
                        {/* <Route component={NoMatch} /> */}
                    </Switch>
                    : <AuthenticatedRoutes />
                }
            </Wrapper>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;