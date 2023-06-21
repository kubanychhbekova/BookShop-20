import React from 'react';
import "./style.scss"
import Header from "./components/header/header";
import Pages from "./components/pages/pages";
import Footer from "./components/footer/footer";

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