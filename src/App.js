import React from 'react';
import "./style.scss"
import Header from "./components/header/header";
import Pages from "./components/pages/pages";
import Footer from "./components/footer/footer";
import Genre from "./components/genre/Genre";
import New from "./components/new/new";

function App ()  {
    return (
        <div>
          <Header/>
<Pages/>

            <Footer/>
        </div>
    );
};

export default App;