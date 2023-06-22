import React from 'react';
import "./style.scss"
import Header from "./components/header/header";
import Pages from "./components/pages/pages";
import Footer from "./components/footer/footer";
import Genre from "./components/genre/Genre";
import New from "./components/new/new";
import Scrollable from "./components/Books/Scrollable";
import Books from "./components/Books/Books";
import AboutUs from "./components/AboutUs/AboutUs";
import {Route, Routes} from "react-router-dom";
import AllBooks from "./components/allBooks/allBooks";

function App ()  {

    return (
        <div>
          <Header/>
            <Routes>
                <Route path={"/"} element={<Pages/>}/>
                <Route path={"/books"} element={<AllBooks/>}/>
            </Routes>


            <Books/>

            <AboutUs/>
            <Footer/>
        </div>
    );
};

export default App;