import React from 'react';
import './App.css';
import HeaderNav from "./header/HeaderNav/HeaderNav";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyWorks from "./MyWorks/MyWorks";
import DistantWork from "./distantWork/DistantWork";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function App() {
    return (
        <div className="app">
            <HeaderNav/>
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <DistantWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
